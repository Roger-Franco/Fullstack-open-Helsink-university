import Person from './Person';

const Persons = ({ person, deletePerson }) => {
  return (
    <Person person={person} deletePerson={deletePerson} />
  )
}

export default Persons;