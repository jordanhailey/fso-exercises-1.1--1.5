import React from 'react';
import './style.css';

/**
 * **Exercise 1.1 Requirements**:
 * > https://fullstackopen.com/en/part1/introduction_to_react#exercises-1-1-1-2
 *
 * - [ ] Inside of this `App.js` file, create 3 components: `Header`, `Content`, and `Total`.
 *  - [ ] `<Header />` takes care of rendering the name of the course.
 *  - [ ] `<Content />` renders the parts and their number of exercises.
 *  - [ ] `<Total />` renders the total number of exercises.
 * - [ ] The `App` component should pass the necessary data to each of the newly created components through props.
 */
const App = () => {
  const course = 'Half Stack application development';
  const part1 = 'Fundamentals of React';
  const exercises1 = 10;
  const part2 = 'Using props to pass data';
  const exercises2 = 7;
  const part3 = 'State of a component';
  const exercises3 = 14;

  return (
    <div>
      <h1>{course}</h1>
      <p>
        {part1} {exercises1}
      </p>
      <p>
        {part2} {exercises2}
      </p>
      <p>
        {part3} {exercises3}
      </p>
      <p>Number of exercises {exercises1 + exercises2 + exercises3}</p>
    </div>
  );
};

export default App;
