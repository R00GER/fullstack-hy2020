import axios from 'axios';

const baseUrl = 'http://localhost:3001/anecdotes';

const getAll = async () => {
  const response = await axios.get(baseUrl);
  return response.data;
};

const createNewAnecdote = async (anecdote) => {
  const newAnecdote = { content: anecdote, votes: 0 };
  const response = await axios.post(baseUrl, newAnecdote);
  return response.data;
};

const addVote = async (anecdote) => {
  const votedAnecdote = { ...anecdote, votes: anecdote.votes + 1 };
  const response = await axios.put(`${baseUrl}/${anecdote.id}`, votedAnecdote);
  return response.data;
};

export default { getAll, createNewAnecdote, addVote };
