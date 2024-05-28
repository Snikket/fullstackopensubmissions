import Part from './Part'

const Content = (props) => {
    console.log(props);
    const parts = props.parts;
    return (
      <div>
        { parts.map(part => 
            <Part partNumber={part.name} exercise={part.exercises} />
            )
        }
        
      </div>
    );
  };

  export default Content