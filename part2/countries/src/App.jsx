import axios from 'axios'
import { useEffect, useState } from 'react'
import { CountryDetails } from './components/CountryDetails'

const App = () => {
  const [countries, setCountries] = useState([])
  const [search, setSearch] = useState('')
  const [selectCountry, setSelectCountry] = useState(null)

  useEffect(() => {
    if (search.trim() === '') {
      setCountries([])
      setSelectCountry(null)
      return
    }

    axios
      .get(`https://restcountries.com/v3.1/name/${search}`)
      .then((res) => {
        setCountries(res.data)
        setSelectCountry(null)
      })
      .catch((e) => console.log('Error fetching data', e))
  }, [search])

  const handleShowCountry = (country) => {
    setSelectCountry(country)
  }

  const renderCountries = () => {
    if (countries.length > 10) {
      return <p>Too many matches, specify another filter</p>
    }

    if (countries.length > 1 && countries.length <= 10) {
      return (
        <ul>
          {countries.map((country) => (
            <li key={country.name.common}>
              {country.name.common}{' '}
              <button
                onClick={() => {
                  handleShowCountry(country)
                }}
              >
                Show
              </button>
            </li>
          ))}
        </ul>
      )
    }

    if (countries.length === 1) {
      return <CountryDetails country={countries[0]} />
    }
  }

  return (
    <div>
      <label>Find countries: </label>
      <input
        type='text'
        value={search}
        onChange={(e) => {
          setSearch(e.target.value)
        }}
      />

      {renderCountries()}

      {selectCountry && <CountryDetails country={selectCountry} />}
    </div>
  )
}

export default App
