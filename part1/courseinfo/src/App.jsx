const Part1 = ({ part1, exercises1 }) => {
  return (
    <div>
      <p>
        {part1} {exercises1}
      </p>
    </div>
  );
};

const Part2 = ({ part2, exercises2 }) => {
  return (
    <div>
      <p>
        {part2} {exercises2}
      </p>
    </div>
  );
};

const Part3 = ({ part3, exercises3 }) => {
  return (
    <div>
      <p>
        {part3} {exercises3}
      </p>
    </div>
  );
};

const Header = ({ course }) => <h1>{course}</h1>; // conts course = props.course || const {course} = props return

const Contect = ({
  part1,
  part2,
  part3,
  exercises1,
  exercises2,
  exercises3,
}) => {
  return (
    <div>
      <Part1 part1={part1} exercises1={exercises1} />
      <Part2 part2={part2} exercises2={exercises2} />
      <Part3 part3={part3} exercises3={exercises3} />
    </div>
  );
};

const Total = ({ exercises1, exercises2, exercises3 }) => (
  <p>Number of exercises {exercises1 + exercises2 + exercises3}</p>
);

const App = () => {
  const course = "Half Stack application development";
  const part1 = "Fundamentals of React";
  const exercises1 = 10;
  const part2 = "Using props to pass data";
  const exercises2 = 7;
  const part3 = "State of a component";
  const exercises3 = 14;

  return (
    <div>
      <Header course={course} />
      <Contect
        part1={part1}
        part2={part2}
        part3={part3}
        exercises1={exercises1}
        exercises2={exercises2}
        exercises3={exercises3}
      />
      <Total
        exercises1={exercises1}
        exercises2={exercises2}
        exercises3={exercises3}
      />
    </div>
  );
};

export default App
