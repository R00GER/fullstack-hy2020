import React from 'react';
import '@testing-library/jest-dom';
import { render, fireEvent } from '@testing-library/react';
import Blog from './Blog';

/* global describe, beforeEach, jest, test, afterAll, expect */
/* eslint no-console: ["error", { allow: ["error"] }] */
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
  beforeEach(() => {
    console.error = jest.fn();
  });

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
});

afterAll(() => {
  console.error = originalError;
});
