const Filter = ({filterTerm, onChange}) => {
    return <div>find countries <input value={filterTerm} onChange={onChange}></input></div>
}

export default Filter;