const mongoose = require('mongoose');
const supertest = require('supertest');
const { initialBlogs, blogsInDb } = require('./test_helper');
const app = require('../app');

const api = supertest(app);
const Blog = require('../models/blog');

let token;

describe('when there is ininitally some blogs saved', () => {
  beforeEach(async () => {
    await Blog.deleteMany({});
    await Blog.insertMany(initialBlogs);
  });

  test('blogs are returned as json', async () => {
    await api
      .get('/api/blogs')
      .expect(200)
      .expect('Content-Type', /application\/json/);
  });

  test('all notes are returned', async () => {
    const response = await api.get('/api/blogs');
    expect(response.body).toHaveLength(initialBlogs.length);
  });

  test('a spesific blog is within the returned blogs', async () => {
    const response = await api.get('/api/blogs');
    const titles = response.body.map((blog) => blog.title);

    expect(titles).toContain('Go To Statement Considered Harmful');
  });
});

describe('when there is valid login, token creted, and adding new blogs', () => {
  beforeEach(async () => {
    const user = {
      username: 'root',
      password: 'salasana',
    };

    const response = await api.post('/api/login').send(user).expect(200);
    token = response.body.token;
  });

  test("blogs id's are defined", async () => {
    const response = await api.get('/api/blogs/');
    expect(response.body[0].id).toBeDefined();
    expect(response.body[1].id).toBeDefined();
  });

  test('blog without required fields is not added', async () => {
    const newBlog = {
      author: 'Dan Abramov',
      likes: 0,
    };

    await api
      .post('/api/blogs')
      .set('Authorization', `bearer ${token}`)
      .send(newBlog)
      .expect(400)
      .expect('Content-Type', /application\/json/);

    const blogsAtEnd = await blogsInDb();
    expect(blogsAtEnd).toHaveLength(initialBlogs.length);
  });

  test('blog without valid token is not added', async () => {
    const newBlog = {
      title: 'Personal blog of Dan Abramov',
      author: 'Dan Abramov',
      url: 'https://overreacted.io/',
      likes: 0,
    };

    await api
      .post('/api/blogs')
      .send(newBlog)
      .expect(401)
      .expect('Content-Type', /application\/json/);

    const blogsAtEnd = await blogsInDb();
    expect(blogsAtEnd).toHaveLength(initialBlogs.length);
  });

  test('valid post can be added', async () => {
    const newBlog = {
      title: 'Personal blog of Dan Abramov',
      author: 'Dan Abramov',
      url: 'https://overreacted.io/',
      likes: 0,
    };

    const blogAtStart = await blogsInDb();

    await api
      .post('/api/blogs')
      .send(newBlog)
      .set('Authorization', `bearer ${token}`)
      .expect(200)
      .expect('Content-Type', /application\/json/);

    const blogsAtEnd = await blogsInDb();

    expect(blogsAtEnd).toHaveLength(blogAtStart.length + 1);
  });

  test('likes default is 0', async () => {
    const newBlog = {
      title: 'Personal blog of Dan Abramov',
      author: 'Dan Abramov',
      url: 'https://overreacted.io/',
      likes: '',
    };

    const blogsAtStart = await blogsInDb();

    await api
      .post('/api/blogs')
      .send(newBlog)
      .set('Authorization', `bearer ${token}`)
      .expect(200)
      .expect('Content-Type', /application\/json/);

    const blogsAtEnd = await blogsInDb();
    const savedBlog = blogsAtEnd.filter((blog) => blog.title === newBlog.title);

    expect(blogsAtEnd).toHaveLength(blogsAtStart.length + 1);
    expect(savedBlog[0]).toHaveProperty('likes', 0);
  });
});

describe('viewing a specific blog', () => {
  test('fails with statuscode 400 if id is invalid', async () => {
    const invalidId = '5a3d5da59070081a82a3445';

    await api.get(`/api/blogs/${invalidId}`).expect(400);
  });

  test('success with valid id', async () => {
    const blogs = await blogsInDb();
    const blogToView = blogs[0];

    const resultBlog = await api
      .get(`/api/blogs/${blogToView.id}`)
      .expect(200)
      .expect('Content-Type', /application\/json/);

    const processedBlogToView = JSON.parse(JSON.stringify(blogToView));
    expect(resultBlog.body).toEqual(processedBlogToView);
  });
});

describe('deletion of a blog', () => {
  test('succeeds with status code 204 if id is valid', async () => {
    const newBlog = {
      title: 'Personal blog of Dan Abramov',
      author: 'Dan Abramov',
      url: 'https://overreacted.io/',
      likes: '',
    };

    const post = await api
      .post('/api/blogs')
      .send(newBlog)
      .set('Authorization', `bearer ${token}`)
      .expect(200);

    const blogsAtStart = await blogsInDb();

    await api
      .delete(`/api/blogs/${post.body.id}`)
      .set('Authorization', `bearer ${token}`)
      .expect(204);

    const blogsAtEnd = await blogsInDb();
    expect(blogsAtEnd).toHaveLength(blogsAtStart.length - 1);
  });
});

afterAll(async () => {
  await mongoose.connection.close();
});
