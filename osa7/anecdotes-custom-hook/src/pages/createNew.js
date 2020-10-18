import React from 'react';
import { useField } from '../hooks';

const CreateNew = ({ addNew }) => {
  const content = useField('text', 'content');
  const author = useField('text', 'author');
  const info = useField('text', 'info');

  const {'reset': resetContent, ...contentInputProps } = content;
  const {'reset': resetAuthor, ...authorInputProps } = author;
  const {'reset': resetInfo, ...infoInputProps } = info;

  const handleSubmit = (e) => {
    e.preventDefault();

    addNew({
      content: content.value,
      author: author.value,
      info: info.value,
      votes: 0,
    });
  };

  const handleReset = (e) => {
    e.preventDefault();

    content.reset();
    author.reset();
    info.reset();
  };

  return (
    <div>
      <h2>create a new anecdote</h2>
      <form onSubmit={handleSubmit}>
        <div>
          content
          <input {...contentInputProps} />
        </div>
        <div>
          author
          <input {...authorInputProps} />
        </div>
        <div>
          url for more info
          <input {...infoInputProps} />
        </div>
        <button>create</button>
        <button onClick={handleReset}>reset</button>
      </form>
    </div>
  );
};

export default CreateNew;
