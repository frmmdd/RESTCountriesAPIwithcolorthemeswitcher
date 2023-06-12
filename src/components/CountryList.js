/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import * as React from "react";
import { themes, useTheme } from '@/lib/ThemeContext';
import { useCountries } from "@/lib/CountryContext";
import CountryComponent from './CountryComponent';


const CountryList = () => {
  const { theme } = useTheme()

  const [countries, setCountries] = React.useState([]);
  const [isLoading, setLoading] = React.useState(false);

  const { filterCountry, findCountry} = useCountries();
  const filteredCountry = filterCountry(countries);
  const searchedCountry = findCountry(filteredCountry);

  React.useEffect(() => {
    setLoading(true);
    fetch('/api/countries')
      .then((res) => res.json())
      .then((data) => {
        setCountries(data);
        setLoading(false);
      });
  }, []);


  return (
    <div
      css={css`
        	display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          justify-items: stretch;
          align-items: stretch;
          gap: 4em;
          padding: 0 3em;
      `}
      style={{backgroundColor: theme?.background}}
    >
      {searchedCountry.splice(0, 20).map((country, index) => (
        <CountryComponent key={index} {...country} />
      ))}
    </div>
  );
};

export default CountryList;
