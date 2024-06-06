import React from "react";
import styled from "styled-components";
import { MdTranslate } from "react-icons/md";

const Header = () => {
  return (
    <HeaderComponent>
      <HeaderText>Ewha Tour Map</HeaderText>
      <TranslateIcon />
    </HeaderComponent>
  );
};

export default Header;

const HeaderComponent = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 4rem;
  background-color: rgb(0, 70, 42);
`;

const HeaderText = styled.div`
  color: white;
  font-family: Pretendard;
  font-weight: 700;
  font-size: 1.2rem;
`;

const TranslateIcon = styled(MdTranslate)`
  color: white;
  width: 2rem;
  height: 2rem;
  position: absolute;
  right: 1rem;
`;
