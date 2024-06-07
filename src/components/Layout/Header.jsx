import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { MdTranslate } from "react-icons/md";
import Translate from "../Translate.jsx";

const Header = () => {
  const navigate = useNavigate();
  const goMainPage = () => {
    navigate("/");
  };

  const [isLangOpen, setIsLangOpen] = useState(false);

  const handleLanguageBox = () => {
    setIsLangOpen((prevState) => !prevState);
  };

  useEffect(() => {
    if (isLangOpen) {
      setIsLangOpen(true);
    }
  }, [isLangOpen]);

  return (
    <HeaderComponent>
      <HeaderText onClick={goMainPage}>Ewha Tour Map</HeaderText>
      <TranslateIcon onClick={handleLanguageBox} />
      {isLangOpen && <Translate onClose={handleLanguageBox} />}
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
  margin-bottom: 1rem;
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
  cursor: pointer;
`;

const TranslateIcon = styled(MdTranslate)`
  color: white;
  width: 2.3rem;
  height: 2.3rem;
  position: absolute;
  right: 1.2rem;
  cursor: pointer;
`;
