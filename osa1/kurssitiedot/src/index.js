import React from "react";
import ReactDOM from "react-dom";

const Header = (props) => {
  return <h1>Course name: {props.name}</h1>;
};

const Content = (props) => {
  return (
    <div>
      <Part parts={props.course.parts[0].name} exercises={props.course.parts[0].exercises} />
      <Part parts={props.course.parts[1].name} exercises={props.course.parts[1].exercises} />
      <Part parts={props.course.parts[2].name} exercises={props.course.parts[2].exercises} />
    </div>
  );
};

const Part = (props) => {
  return (
    <div>
      <p>
        Part {props.parts} includes {props.exercises} exercises
      </p>
    </div>
  );
};

const Total = (props) => {
  return (
    <div>
      <p>
        Number of exercices{" "}
        {props.course.parts[0].exercises +
          props.course.parts[1].exercises +
          props.course.parts[2].exercises}
      </p>
    </div>
  );
};

const App = () => {
  const course = {
    name: "Half Stack application development",
    parts: [
      {
        name: "Fundamentals of React",
        exercises: 10,
      },
      {
        name: "Using props to pass data",
        exercises: 7,
      },
      {
        name: "State of a component",
        exercises: 14,
      },
    ],
  };

  return (
    <div>
      <Header name={course.name} />
      <Content course={course} />
      <Total course={course} />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
