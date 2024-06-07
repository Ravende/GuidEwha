import React from "react";
import styled from "styled-components";

const Translate = ({ onClose }) => {
  return (
    <LanguageView>
      <LanguageBox>
        <ChoiceText>Please select your language.</ChoiceText>
        <ChoiceTextKor>언어를 선택하세요.</ChoiceTextKor>
        <CheckBox>
          <Checkmark onClick={onClose} />
          <CheckBoxText>한글</CheckBoxText>
        </CheckBox>
        <CheckBox>
          <Checkmark onClick={onClose} />
          <CheckBoxText>English</CheckBoxText>
        </CheckBox>
        <CheckBox>
          <Checkmark onClick={onClose} />
          <CheckBoxText>中文</CheckBoxText>
        </CheckBox>
      </LanguageBox>
    </LanguageView>
  );
};

export default Translate;

const LanguageView = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.2);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 100;
`;

const LanguageBox = styled.div`
  width: 65%;
  height: 20%;
  background-color: #ffffff;
  padding: 1.5rem;
  border-radius: 1rem;
`;

const ChoiceText = styled.div`
  font-family: Pretendard;
  font-size: 1.5rem;
  font-weight: 700;
`;

const ChoiceTextKor = styled.div`
  font-family: Pretendard;
  font-size: 1.2rem;
  font-weight: 600;
  color: gray;
  padding-bottom: 1rem;
`;

const CheckBox = styled.label`
  display: flex;
  flex-direction: row;
  padding-bottom: 0.2rem;
`;

const Checkmark = styled.div`
  height: 1.3rem;
  width: 1.3rem;
  background-color: #eee;
  border-radius: 0.3rem;
  cursor: pointer;
  margin-right: 0.3rem;

  &:active {
    background-color: #2196f3;
  }
`;

const CheckBoxText = styled.div`
  font-family: Pretendard;
  font-weight: 600;
  font-size: 1rem;
`;
