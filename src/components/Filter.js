/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import * as React from 'react';
import styled from '@emotion/styled';
import Select from 'react-select';
import { useCountries } from '@/lib/CountryContext';
import { themes, useTheme } from '@/lib/ThemeContext';
import Search from '@/images/Search';

const Container = styled.div`
  background: #f8f8f8;
  display: flex;
  justify-content: space-between;
  padding: 1.3em 3em;
  flex-wrap: wrap;
  gap: 1em
`;

const Input = styled.input`
  width: 30em;
  padding: 0.9em 3em;
  border: 0;
  border-radius: 0.4em;
  box-shadow: 0 0 15px 4px rgba(0,0,0,0.06);
  
  &:hover{
    outline: none;
  }
  &:focus{
    outline: none;
  }
`;

const options = [
  { value: '', label: 'Filter by Region' },
  { value: 'Africa', label: 'Africa' },
  { value: 'Americas', label: 'Americas' },
  { value: 'Asia', label: 'Asia' },
  { value: 'Europe', label: 'Europe' },
  { value: 'Oceania', label: 'Oceania' },
];

const Filter = () => {
  const { theme } = useTheme()

  const [selectedOption, setSelectedOption] = React.useState(options[0])
  const { locality, setLocality } = useCountries()

  const handleChangeCountry = (selectedOption) => {
    setLocality(prevState => ({
      ...prevState,
      region: selectedOption.value
    }))
    setSelectedOption(selectedOption)
  };

  const handleChangeCountryName = (event) => {
    setLocality(prevState => ({
      ...prevState,
      name: event.target.value
    }));
  };
  
  const customStyles = {
    control: (baseStyles, state) => ({
      ...baseStyles,
      width: '12em',
      border: 0,
      borderRadius: '0.4em',
      boxShadow: '0 0 15px 4px rgba(0,0,0,0.06)',
      background: theme === themes.dark ? '#2b3743' : '#fff',
      color: theme?.foreground,
    }),
    option: (baseStyles) => ({
      ...baseStyles,
      background: theme === themes.dark ? '#2b3743' : '#fff',
      color: theme?.foreground,
    }),
    singleValue:  (baseStyles) => ({
      ...baseStyles,
      background: theme === themes.dark ? '#2b3743' : '#fff',
      color: theme?.foreground,
    }),
  };

  return (
    <Container style={{backgroundColor: theme?.background}}>
      <div css={css`
          position: relative;
      `}>
        <Input
          type="text"
          placeholder="Search for country..."
          onChange={handleChangeCountryName}
          aria-label="Search"
          style={{ 
            background: theme === themes.dark ? '#2b3743' : '#fff',
            color: theme?.foreground,
          }}
        />
        <Search fill={
            theme === themes.dark ? '#fff' : '#2b3743'
          }
          css={css`
            position: absolute;
            top: 25%;
            left: 3.5%;
          `}
        />
      </div>
      <Select
        instanceId='id'
        defaultValue={selectedOption}
        onChange={handleChangeCountry}
        options={options}
        styles={customStyles}
        aria-label="Select Country"
      />
    </Container>
  );
};

export default Filter;
