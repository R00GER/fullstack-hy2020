import React from 'react';
import '@testing-library/jest-dom';
import { render, fireEvent } from '@testing-library/react';
import Toggable from './Toggable';
import BlogForm from './BlogForm';
import Blog from './Blog';

const originalError = console.error;

describe('when rendering blogs', () => {
  beforeEach(() => {
    console.error = jest.fn();
  });

  test('blog component renders blogs title and author', () => {
    const blog = {
      title: 'Personal blog of Dan Abramov',
      author: 'Dan Abramov',
      url: 'https://overreacted.io/',
      likes: 8,
    };

    const component = render(<Blog blog={blog} />);
    const urls = component.container.querySelector('.blog-full-url');
    const likes = component.container.querySelector('.blog-full-likes');

    expect(component.container).toHaveTextContent('Personal blog of Dan Abramov by Dan Abramov');
    expect(urls).not.toBeInTheDocument();
    expect(likes).not.toBeInTheDocument();
  });
});

describe('when clicking buttons', () => {
  test('full blog with url and likes are rendered', () => {
    const blog = {
      title: 'Personal blog of Dan Abramov',
      author: 'Dan Abramov',
      url: 'https://overreacted.io/',
      likes: 8,
      user: {
        name: 'Ronny',
        username: 'R00GER',
        id: '1234',
      },
    };

    const user = {
      name: 'Ronny',
      username: 'R00GER',
    };

    const mockHandler = jest.fn();

    const component = render(<Blog blog={blog} user={user} viewBlog={mockHandler} />);
    const button = component.getByText('view');
    fireEvent.click(button);

    const urls = component.container.querySelector('.blog-full-url');
    const likes = component.container.querySelector('.blog-full-likes');

    expect(urls).toBeInTheDocument();
    expect(likes).toBeInTheDocument();
    expect(urls).toHaveTextContent('https://overreacted.io/');
    expect(likes).toHaveTextContent('likes 8');
  });

  test('two times, handler is called two times', () => {
    const blog = {
      title: 'Personal blog of Dan Abramov',
      author: 'Dan Abramov',
      url: 'https://overreacted.io/',
      likes: 8,
      user: {
        name: 'Ronny',
        username: 'R00GER',
        id: '1234',
      },
    };

    const user = {
      name: 'Ronny',
      username: 'R00GER',
    };

    const mockViewHandler = jest.fn();
    const mockLikeHandler = jest.fn();
    const mockLikes = jest.fn();

    const component = render(
      <Blog
        blog={blog}
        user={user}
        viewBlog={mockViewHandler}
        handleLikes={mockLikeHandler}
        likes={mockLikes}
      />,
    );

    const view = component.getByText('view');
    fireEvent.click(view);

    const likeButton = component.container.querySelector('.like-btn');
    fireEvent.click(likeButton);
    fireEvent.click(likeButton);
    expect(mockLikes.mock.calls).toHaveLength(2);
  });
});

describe('when creating a new blog', () => {
  test('handlers have been called with right data', () => {
    const toggable = render(
      <Toggable labelForCreateNew="create new" labelForCancel="cancel" />,
    );

    const mockHandler = jest.fn();

    const blogFormComponent = render(
      <BlogForm createNewBlog={mockHandler} />,
    );

    const blogForm = blogFormComponent.container.querySelector('.blog-form');

    const creteNewButton = toggable.getByText('create new');
    fireEvent.click(creteNewButton);

    const titleInput = blogFormComponent.container.querySelector('.title');
    const authorInput = blogFormComponent.container.querySelector('.author');
    const urlInput = blogFormComponent.container.querySelector('.url');

    fireEvent.change(titleInput, {
      target: { value: 'Personal blog of Dan Abramov' },
    });

    fireEvent.change(authorInput, {
      target: { value: 'Dan Abramov' },
    });

    fireEvent.change(urlInput, {
      target: { value: 'https://overreacted.io/' },
    });

    fireEvent.submit(blogForm);

    expect(blogForm).toBeInTheDocument();
    expect(mockHandler.mock.calls).toHaveLength(1);
    expect(mockHandler.mock.calls[0][0].title).toBe('Personal blog of Dan Abramov');
    expect(mockHandler.mock.calls[0][0].author).toBe('Dan Abramov');
    expect(mockHandler.mock.calls[0][0].url).toBe('https://overreacted.io/');
  });
});

afterAll(() => {
  console.error = originalError;
});
