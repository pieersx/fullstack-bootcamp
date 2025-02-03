export const Course = ({ courses }) => {
  return (
    <div>
      {courses.map((course) => {
        const total = course.parts.reduce((sum, part) => {
          return sum + part.exercises
        }, 0)

        return (
          <div key={course.id}>
            <Header name={course.name} />
            <Content parts={course.parts} />
            <Total total={total} />
          </div>
        )
      })}
    </div>
  )
}

const Header = ({ name }) => <h2>{name}</h2>

const Content = ({ parts }) => {
  return (
    <div>
      {parts.map((part) => (
        <Part key={part.id} name={part.name} exercises={part.exercises} />
      ))}
    </div>
  )
}

const Part = ({ name, exercises }) => (
  <p>
    {name} {exercises}
  </p>
)

const Total = ({ total }) => <strong>total of {total} exercises</strong>
