const Filter = ({ filterPersons }) => {
  return (
    <div>
      filter shown with <input onChange={(event) => filterPersons(event.target.value)} />
    </div>
  )
}

export default Filter;