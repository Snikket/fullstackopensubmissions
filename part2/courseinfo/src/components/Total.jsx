const Total = ({parts}) => {

    return (
      <p><b>
        total of {parts.reduce((accumulator, currentPart) => accumulator + currentPart.exercises, 0)} exercises
        </b>
      </p>
    );
  };

  export default Total