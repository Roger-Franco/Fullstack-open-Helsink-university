import personService from '../services/persons'

const Person = ({ person, deletePerson }) => {

  return (
    <li>{person.name} - {person.number}
      <button onClick={() => deletePerson(person)}>Delete</button></li>
  )
}

export default Person;