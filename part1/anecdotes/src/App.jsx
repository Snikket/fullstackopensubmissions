import { useState } from 'react'

const Button = ({ handleClick, text }) => (
    <button onClick={handleClick}>
        {text}
    </button>
)

const AnecdoteLine = ({anecdote, votes}) => (
    <div>
        <p>{anecdote}</p>
        <p>has {votes} votes</p>
    </div>
)
const App = () => {
    const [votes, setVotes] = useState({ 0:0, 1:0, 2:0, 3:0, 4:0, 5:0, 6:0, 7:0 })
    const [selected, setSelected] = useState(0)
    const[mostVotedAnecdote, setMostVotedAnecdote] = useState({votes:0, anecdotesIndex:0})


    const anecdotes = [
        'If it hurts, do it more often.',
        'Adding manpower to a late software project makes it later!',
        'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
        'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
        'Premature optimization is the root of all evil.',
        'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
        'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
        'The only way to go fast, is to go well.'
    ]


    const handleVote = () => {
        const copyOfVotes = { ...votes }
        copyOfVotes[selected] += 1
        if(copyOfVotes[selected]>mostVotedAnecdote.votes){
            setMostVotedAnecdote({votes: copyOfVotes[selected], anecdotesIndex: selected})
        }
        setVotes(copyOfVotes);
    }
    const handleSelectAnecdoteClick = () => {
        setSelected(Math.floor(Math.random() * anecdotes.length));
    }

    return (
        <div>
            <h1>Anecdote of the day</h1>
            <AnecdoteLine anecdote={anecdotes[selected]} votes={votes[selected]}/>
            <Button handleClick={handleVote} text={"Vote"}/>
            <Button handleClick={handleSelectAnecdoteClick} text={"Get new Anecdote"}/>
            <h1>Anecdote with most votes</h1>
            <AnecdoteLine anecdote={anecdotes[mostVotedAnecdote.anecdotesIndex]} votes={mostVotedAnecdote.votes}/>
        </div>
    )
}

export default App