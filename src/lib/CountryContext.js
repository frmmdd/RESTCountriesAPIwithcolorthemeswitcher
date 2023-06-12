import * as React from "react";

export const CountriesContext = React.createContext()

export const useCountries = () => React.useContext(CountriesContext)

export function CountriesProvider({ children }){
  const [locality, setLocality] = React.useState({
    name: '',
    region: ''
  })

  const filterCountry = (countries) => {
    return countries.filter(country => {
      return (
        locality.region === ''  ||
        country.region.toLowerCase() === locality.region.toLowerCase()
      )
    })
  }

  const findCountry = (countries) => {
    return countries.filter(country => {
      return ( 
        locality.name === '' ||
        country.name.toLowerCase().includes(locality.name.toLowerCase())
      )
    })
  }

  return <CountriesContext.Provider value={{locality, setLocality, filterCountry, findCountry}}>{children}</CountriesContext.Provider>
}
