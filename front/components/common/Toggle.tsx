import React, { useEffect } from 'react';
import styled from 'styled-components';
import WbSunnyIcon from '@material-ui/icons/WbSunny';
import NightsStayIcon from '@material-ui/icons/NightsStay';

const Toggle = ({ themeMode, toggleTheme }: IToggle) => {
  console.log('toggleTheme themeMode ', themeMode, themeMode === 'dark');
  useEffect(() => {
    toggleTheme();
  }, []);
  return (
    <>
      <Wrapper onClick={toggleTheme} themeMode={themeMode}>
        <WbSunnyIcon />
        <NightsStayIcon />
      </Wrapper>
    </>
  );
};

const Wrapper = styled.button`
  background: ${({ theme }) => theme.colors.mainBackground};
  border: 1px solid #d1d5da
  box-shadow: 0 1px 3px ${({ theme }) => theme.mode.divider};
  border-radius: 30px;
  cursor: pointer;
  display: flex;
  font-size: 0.5rem;
  justify-content: space-between;
  align-items: center;
  margin: 0 auto;
  overflow: hidden;
  padding: 0.5rem;
  position: fixed;
  z-index: 1;
  width: 4rem;
  height: 2rem;
  bottom: 2rem;
  right: 1rem;
  svg {
    color: ${({ theme }) => theme.colors.themeIcon};
    &:first-child {
      transform: ${({ themeMode }) =>
        themeMode === 'light' ? 'translateY(0)' : 'translateY(2rem)'};
      transition: all 0.25s ease 0.1s;
    }
    &:nth-child(2) {
      transform: ${({ themeMode }) =>
        themeMode === 'dark' ? 'translateY(0)' : 'translateY(-2rem)'};
      transition: all 0.25s ease 0.1s;
    }
  }
`;

export default Toggle;
