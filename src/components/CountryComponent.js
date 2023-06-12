/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { themes, useTheme } from '@/lib/ThemeContext'
import styled from '@emotion/styled'
import Image from 'next/image'
import Link from 'next/link'

const Container = styled.div`
  background: #fff;
  display: grid;
  border-radius: 0.4em;
  padding: 0 0 2em 0;
  img {
    border-radius: 0.4em 0.4em 0 0;
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

const CountryComponent = ({ flags, name, population, region, capital }) => {
  const { theme } = useTheme()

  return (
    <Link href={`name/${name}`}>
      <Container style={{ 
          background: theme === themes.dark ? '#2b3743' : '#fff' 
        }}>
        <Image
          width={100}
          height={100}
          src={flags?.svg}
          alt={name}
          css={css`width: 100%; aspect-ratio: 16 / 9; object-fit: cover;`}
          priority
        />
        <h2 
          css={css
            `padding: 0 1em`
          } 
          style={{ 
            color: theme?.foreground 
          }}
        >
          {name}
        </h2>
        <Wraper>
          <p 
            style={{ 
              color: theme?.foreground 
            }}
          >
            <strong style={{ 
              color: theme?.foreground 
            }}>
              population:</strong> {population}
          </p>
          <p style={{
            color: theme?.foreground
          }}>
              <strong style={{ 
                color: theme?.foreground 
              }}>
                region:
              </strong>
              {region}
          </p>
          <p style={{ 
              color: theme?.foreground 
            }}>
              <strong>capital:</strong> 
              {capital}
          </p>
        </Wraper>
      </Container>
    </Link>
  );
};

export default CountryComponent;
