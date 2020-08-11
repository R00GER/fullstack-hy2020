import React from "react";

const Header = () => {
  return <h1>Web development curriculum</h1>;
};

const Total = ({ course }) => {
  const parts = course.parts;
  const total = parts.reduce((acc, cur) => acc + cur.exercises, 0);

  return (
    <p>
      <strong>total of {total} exercises</strong>
    </p>
  );
};

const Part = ({ part }) => {
  return (
    <div>
      <p>
        {part.name} {part.exercises}
      </p>
    </div>
  );
};

const Content = ({ course }) => {
  return (
    <div>
      <h2>{course.name}</h2>
      {course.parts.map((part) => (
        <Part key={part.id} part={part} />
      ))}
    </div>
  );
};

const Course = ({ course }) => {
    if (course.id === 1) {
        return (
            <div>
              <Header />
              <Content course={course} />
              <Total course={course} />
            </div>
          );
    } else {
        return (
            <div>
              <Content course={course} />
              <Total course={course} />
            </div>
          );
    }
};

export default Course;
