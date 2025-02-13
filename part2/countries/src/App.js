import { useEffect, useState } from 'react'
import './index.css'
import axios from 'axios'

const App = () => {
  const [countries, setCountries] = useState([])
  const [countrie, setCountrie] = useState(null)

  useEffect(() => {
    if (!countrie) return
    axios.get(`https://restcountries.com/v3.1/name/${countrie}`).then(response => response.data).then(data => setCountries(data))
  }, [countrie])

  console.log(countries, 'countries')



  const countriesList = () => {
    if (!countries) return
    if (countries.length === 1) {
      return (
        <div>
          <h2>{countries[0].name.common}</h2>
          <p>Capital: {countries[0].capital[0]}</p>
          <p>Área: {countries[0].area}</p>
          <p>Population: {countries[0].population}</p>
          <p><b>Languages</b></p>
          <p>{Object.values(countries[0].languages).map(language => <li key={language}>{language}</li>)}</p>
          <img src={countries[0].flags.png} width="200" alt="" />
        </div>
      )
    }
    if (countries.length > 10) return (
      <div>
        <p>Too many matches, specify another filter</p>
      </div>
    )
    if (countries.length <= 10) return (
      <ul>
        {countries.map((country) => (
          <li key={country.name.common}>{country.name.common}<button onClick={() => setCountrie(country.name.common)}>show</button></li>
        ))}
      </ul>
    )
  }

  return (
    <div>
      <h2>Countries</h2>
      <div>
        find countries <input onChange={(event) => setCountrie(event.target.value)} />
      </div>
      {countriesList()}
    </div>
  )
}

export default App