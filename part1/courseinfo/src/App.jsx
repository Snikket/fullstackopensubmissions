

const App = () => {
    const course = {
        name: 'Half Stack application development',
        parts: [
            {
                name: 'Fundamentals of React',
                exercises: 10
            },
            {
                name: 'Using props to pass data',
                exercises: 7
            },
            {
                name: 'State of a component',
                exercises: 14
            }
        ]
    }

    const Header = (props) => {
        console.log(props);
        return (
            <h1>{props.course}</h1>
        )
    }

    const Part = (props) => {
        return (
            <p>
                {props.partNumber} {props.exercise}
            </p>
        )
    }
    const Content = (props) => {
        console.log(props)
        const parts = props.parts;
        return (
            <div>
                <Part partNumber={parts[0].name} exercise={parts[0].exercises} />
                <Part partNumber={parts[1].name} exercise={parts[1].exercises} />
                <Part partNumber={parts[2].name} exercise={parts[2].exercises} />
            </div>
        )
    }

    const Total = (props) => {
        console.log(props);
        const parts=props.parts;
        return (
            <p>Number of exercises {parts[0].exercises + parts[1].exercises + parts[2].exercises}</p>
        )
    }

    return (
        <div>
            <Header course={course.name} />
            <Content parts={course.parts}/>
            <Total parts={course.parts} />
        </div>
    )
}

export default App