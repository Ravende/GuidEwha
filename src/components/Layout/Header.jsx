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
  width: 100%;
  height: 5rem;
  min-height: 4rem;
  background-color: rgb(0, 70, 42);
  //border-bottom: 2px solid rgb(0, 70, 42);
  //border-top: 10px solid rgb(0, 70, 42);
`;

const HeaderText = styled.div`
  color: white;
  //color: rgb(0, 70, 42);
  font-family: Pretendard;
  font-weight: 700;
  font-size: 1.5rem;
`;

const TranslateIcon = styled(MdTranslate)`
  color: white;
  width: 2.3rem;
  height: 2.3rem;
  position: absolute;
  right: 1.2rem;
`;
