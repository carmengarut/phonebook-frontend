export const Persons = ({persons, search, handleDelete}) => {
    return (
        <ul>
            {
            persons
                .filter(value => { 
                    return value.name.toLowerCase().includes(search)
                })
                .map(person => ( 
                    <li key={person.name}>
                        {person.name} {person.number}
                        <button value={person.id} onClick={handleDelete}>Delete</button>
                    </li>
                ))
            }
        </ul>
    )
}