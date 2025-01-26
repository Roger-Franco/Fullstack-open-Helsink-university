import Part from './Part';
import Total from './Total';

const Content = ({ course }) => {
  return (
    <div>
      {course.parts.map((item) => (
        <Part key={item.id} partName={item.name} exercises={item.exercises} />
      ))}
      <Total parts={course.parts} />
    </div>
  )
}

export default Content;