/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import styled from '@emotion/styled'
import React from 'react'
import { useRouter } from 'next/router'
import Image from 'next/image'
import { themes, useTheme } from '@/lib/ThemeContext';
import ArrowLeft from '@/images/ArrowLeft';



const Container = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr 1fr;
  gap: 5em;
  border-radius: 0.4em;
  padding: 0 0 2em 0;
  img {
    height: 350px !important;
    border-radius: 0.4em 0.4em 0 0;
  }

  justify-items: center;

  @media (max-width:990px) {
    display: flex;
    flex-wrap: wrap;
    row-gap: 0.2em;
    column-gap: 0.2em;
    > * {
      flex: 1 !important;
    }
  }

  @media (max-width:390px) {
    column-gap: 5em;
  }
`;

const Wraper = styled.div`
  display: grid;
  margin: 0;
  p {
    margin: 0;
    padding: 0 1em;
  }
`;

const Button = styled.button`
  all: unset;
  padding: 0.6em;
  border-radius: 0.3em;
  margin: 3em 0;
  box-shadow: 1px 0px 12px 0px rgba(0,0,0,0.22);
  @media (max-width:390px) {
    margin: 2em 0;
  }
`

const Border = styled.p`
  padding: 0.6em;
  border-radius: 0.3em;
  margin: 0.9em;
  box-shadow: 1px 0px 12px 0px rgba(0,0,0,0.22);
`

const CountryDetails = () => {
  const { theme } = useTheme()

  const router = useRouter();
  const [country, setCountry] = React.useState();
  const [isLoading, setLoading] = React.useState(false);

  React.useEffect(() => {
    setLoading(true);
    fetch(`/api/country/${router.query.CountryDetails}`)
      .then((res) => res.json())
      .then((data) => {
        setCountry(data);
        setLoading(false);
      });
  }, [country]);

  
  return (
    <div css={css`
        padding: 0 3em;
        min-height: 95vh;
      `}
      style={{ 
        background: theme?.background,
      }}
    >
      <Button 
        type="button"
        style={{ 
          boxShadow: theme === themes.dark ? '#2b3743' : '#fff',
          color: theme?.foreground
        }}
        onClick={() => router.back()}
      >
        <ArrowLeft fill={
            theme === themes.dark ? '#fff' : '#2b3743'
          }
        /> Back
      </Button>
      <Container style={{
          backgroundColor: theme?.background,
          color: theme?.foreground
        }}
      >
        <Image
          width={100}
          height={100}
          src={country?.[0]?.flags?.svg}
          alt={country?.[0]?.name}
          css={css`width: 100%; aspect-ratio: 16 / 9; object-fit: cover; grid-row: 1 / 3;`}
          fetchpriority="high"
        />
        <Wraper>
          <h2 css={css`
            	padding: 1em;
              font-size: 1.5em
          `}>
            {country?.[0]?.name}
          </h2>
          <p>
            <strong>Native Name: </strong> 
              {country?.[0]?.nativeName}
          </p>
          <p>
            <strong>Population: </strong>
              {country?.[0]?.population}
          </p>
          <p>
            <strong>Region: </strong> 
              {country?.[0]?.region}
          </p>
          <p>
            <strong>Capital: </strong> 
              {country?.[0]?.capital}
          </p>
        </Wraper>
        <Wraper css={css`
          align-content: center;
          padding: 4em 0 0 0;
          gap: 0.3em;
          @media (max-width:390px) {
            padding: 2em 0;
          }
        `}>
          <p>
            <strong>Top Level Domain: </strong>
            {country?.[0]?.topLevelDomain}
          </p>
          <p>
            <strong>Currencies: </strong>
            {country?.[0]?.currencies?.[0]?.code}
          </p>
          <p>
            <strong>Languages: </strong>
            {country?.[0]?.languages?.map(({name}) => {
              return <p css={css`
                display: inline-flex;
                padding: 0.2em !important;
              `}>
                {name}
              </p>
            })}
          </p>
        </Wraper>
        <Wraper css={css`
            grid-column: 2 / 4;
            align-items: end;
            font-size: 1.3em;
          `}
        >
        <p>
            <strong>Border Countries: </strong>
            {country?.[0]?.languages?.map(({nativeName}) => {
              return <p css={css`
                display: inline-flex;
                padding: 0.5em !important;
              `}>
                <Border>{nativeName}</Border>
              </p>
            })}
          </p>
        </Wraper>
      </Container>
    </div>
  )
}

export default CountryDetails