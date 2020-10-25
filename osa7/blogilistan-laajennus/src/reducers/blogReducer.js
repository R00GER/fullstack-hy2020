export const initializeBlogs = (blogs) => ({ type: 'INIT_BLOGS', blogs });
export const createBlog = (content) => ({ type: 'CREATE_BLOG', content });
export const removeBlog = (blog) => ({ type: 'REMOVE_BLOG', blog });
export const like = (blog) => ({ type: 'LIKE', blog });

const blogReducer = (state = [], action) => {
  switch (action.type) {
  case 'INIT_BLOGS':
    return action.blogs;
  case 'CREATE_BLOG':
    return state.concat(action.content);
  case 'REMOVE_BLOG':
    return state.filter((blog) => blog.id !== action.blog.id);
  case 'LIKE':
    return state.map((blog) => (blog.id === action.blog.id ? action.blog : blog));
  default:
    return state;
  }
};

export default blogReducer;
