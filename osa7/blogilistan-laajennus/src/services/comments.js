import axios from 'axios';

const baseUrl = 'http://localhost:3001/api/blogs';

const getAll = async () => {
  const response = await axios.get(`${baseUrl}/comments`);
  return response.data;
};

const getComment = async (id) => {
  const response = await axios.get(`${baseUrl}/${id}/comments`);
  return response.data;
};

const create = async (comment) => {
  const response = await axios.post(`${baseUrl}/${comment.blog}/comments`, comment);
  return response.data;
};

export default { getAll, getComment, create };
