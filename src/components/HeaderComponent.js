import ChangeTheme from '@/images/ChangeTheme';
import { themes, useTheme } from '@/lib/ThemeContext';
import styled from '@emotion/styled';
import Image from 'next/image';
import { useState } from 'react';

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0 3em;
  box-shadow: 0px 4px 16px 0px rgba(0,0,0,0.44);
`;

const Title = styled.h1`
  font-size: 1em;
`;

const MenuRigth = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 0.2em;
`;

const HeaderComponent = () => {
  const { theme, setTheme } = useTheme()

  const toggleTheme = () => {
    setTheme(theme === themes.dark ? themes.light : themes.dark)
  }


  return (
    <Header
      style={{
        background: theme === themes.dark ? '#2b3743' : '#fff'
      }}>
      <Title
        style={{
          color: theme?.foreground
        }}>
        Where in the worls?
      </Title>
      <MenuRigth>
        <ChangeTheme fill={
          theme === themes.dark ? '#fff' : '#2b3743'
        }
          onClick={toggleTheme}
        />
        <p
          style={{
            color: theme?.foreground
          }}>
          Dark Mode
        </p>
      </MenuRigth>
    </Header>
  );
};

export default HeaderComponent