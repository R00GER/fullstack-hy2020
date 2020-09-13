const dummy = (blogs) => 1;

const totalLikes = (blogs) => blogs.reduce((acc, blog) => acc + blog.likes, 0);

const favouriteBlog = (blogs) => {
  const mostLikes = Math.max(...blogs.map((blog) => blog.likes));
  const mostLikedBlog = blogs.find((blog) => blog.likes === mostLikes);

  return blogs.length === 0
    ? 0
    : { title: mostLikedBlog.title, author: mostLikedBlog.author, likes: mostLikedBlog.likes };
};

const mostBlogs = (blogs) => {
  const countObject = {};

  blogs
    .map((blog) => blog.author)
    .forEach((keys) => {
      countObject[keys] = ++countObject[keys] || 1;
    });

  const maxValue = Number(
    Object.values(countObject)
      .sort((a, b) => b - a)
      .slice(0, 1)
      .join(''),
  );

  const author = Object.keys(countObject).find((key) => countObject[key] === maxValue);

  return blogs.length === 0 ? 0 : { author, blogs: maxValue };
};

const mostLikes = (blogs) => {
  const authors = [...new Set(blogs.map((blog) => blog.author))];
  const authorsAndLikes = authors.map((author) => ({
    author,
    likes: blogs.filter((a) => a.author === author).reduce((acc, curr) => acc + curr.likes, 0),
  }));
  const maxLikes = Math.max(...authorsAndLikes.map((author) => author.likes));
  const authorWithMostLikes = authorsAndLikes.find((author) => author.likes === maxLikes);

  return blogs.length === 0 ? 0 : authorWithMostLikes;
};

module.exports = {
  dummy,
  totalLikes,
  favouriteBlog,
  mostBlogs,
  mostLikes,
};
