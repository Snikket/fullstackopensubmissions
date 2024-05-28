const Course = ({ course }) => {
  const Header = (props) => {
    return <h1>{props.course}</h1>;
  };

  const Content = (props) => {

    const Part = (props) => {
      return (
        <p>
          {props.partNumber} {props.exercise}
        </p>
      );
    };

    const parts = props.parts;
    return (
      <div>
        { parts.map(part => 
            <Part key={part.id} partNumber={part.name} exercise={part.exercises} />
            )
        }
        
      </div>
    );
  };

  const total = course.parts.reduce((accumulator, currentPart) => accumulator + currentPart.exercises, 0)

  return (
    <div>
      <Header course={course.name} />
      <Content parts={course.parts} />
      <p><b>total of {total} exercises </b></p>
    </div>
  );





};

export default Course;
