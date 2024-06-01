const PersonForm = ({onSubmit, onNameChange, onNumberChange, newName, newPhoneNumber}) => {
return<form onSubmit={onSubmit}>
    <div>
      name: <input value={newName} onChange={onNameChange} />
    </div>
    <div>
      number: <input value={newPhoneNumber} onChange={onNumberChange} />
    </div>
    <div>
      <button type="submit">add</button>
    </div>
  </form>
}

export default PersonForm;