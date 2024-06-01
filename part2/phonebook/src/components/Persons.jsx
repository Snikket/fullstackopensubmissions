const Persons = ({persons}) => {

    return <div>
                {persons.map(
                    (person) => <div key={person.id}> {person.name} {person.phoneNumber}</div> )
                }
            </div>
}

export default Persons;