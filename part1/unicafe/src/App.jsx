import { useState } from 'react'

const Button = ({ handleClick, text }) => (
    <button onClick={handleClick}>
        {text}
    </button>
)

const StatisticLine = ({ text, value }) => (
    <tr><td>{text}</td><td>{value}</td></tr>
)

const Statistics = ({bad, good, neutral, all}) => {
    if (all === 0) {
        return(
            <p>No feedback given</p>
        )
    }else{
        return(
            <table>
                <tbody>
                    <StatisticLine text={"good"} value={good}/>
                    <StatisticLine text={"neutral"} value={neutral}/>
                    <StatisticLine text={"bad"} value={bad}/>
                    <StatisticLine text={"all"} value={all}/>
                    <StatisticLine text={"average"} value={(good+bad*-1)/all}/>
                    <StatisticLine text={"positive"} value={(good/all*100)+"%"}/>
                </tbody>
            </table>);
    }


}

const App = () => {
    // save clicks of each button to its own state
    const [good, setGood] = useState(0)
    const [neutral, setNeutral] = useState(0)
    const [bad, setBad] = useState(0)
    const [all, setAll] = useState(0)

    const handleGoodClick = () => {
        const updatedGood = good+1;
        setGood(updatedGood);
        const newAll = all + 1;
        setAll(newAll);
    }

    const handleBadClick = () => {
        const updatedBad = bad+1;
        setBad(updatedBad);
        const newAll = all + 1;
        setAll(newAll);
    }

    const handleNeutralClick = () => {
        const updatedNeutral = neutral+1;
        setNeutral(updatedNeutral);
        const newAll = all + 1;
        setAll(newAll);
    }

    return (
        <div>
            <h1>give feedback</h1>
            <Button handleClick={handleGoodClick} text='good'></Button>
            <Button handleClick={handleNeutralClick} text='neutral'>right</Button>
            <Button handleClick={handleBadClick} text='bad'></Button>
            <h1>statistics</h1>
            <Statistics bad={bad} good={good} neutral={neutral} all={all} ></Statistics>
        </div>
    )
}

export default App