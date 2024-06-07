import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import schoolMap from "../assets/school-map.png";
import { FiMapPin } from "react-icons/fi";

const Route = () => {
  const navigate = useNavigate();
  const goMainPage = () => {
    navigate("/");
  };

  return (
    <MainComponent>
      <RecommentText>방문하고 싶은 장소를 선택해 주세요.</RecommentText>
      <MapImg src={schoolMap} />
      <IconContainer>
        <MapPinAryeong />
        <MapPinECC />
        <MapPinMuseum />
        <MapPinHall />
        <MapPinJinseon />
        <MapPinMain />
      </IconContainer>
      <Line />
      <Buildings>
        <Column>
          <CheckBox>
            <Checkmark />
            <CheckBoxText>Ewha Campus Complex</CheckBoxText>
          </CheckBox>
          <CheckBox>
            <Checkmark />
            <CheckBoxText>대강당</CheckBoxText>
          </CheckBox>
          <CheckBox>
            <Checkmark />
            <CheckBoxText>100주년기념박물관</CheckBoxText>
          </CheckBox>
        </Column>
        <Column>
          <CheckBox>
            <Checkmark />
            <CheckBoxText>이화역사관</CheckBoxText>
          </CheckBox>
          <CheckBox>
            <Checkmark />
            <CheckBoxText>진선미관</CheckBoxText>
          </CheckBox>
          <CheckBox>
            <Checkmark />
            <CheckBoxText>본관</CheckBoxText>
          </CheckBox>
        </Column>
      </Buildings>
      <StartBtn onClick={goMainPage}>경로 탐색</StartBtn>
    </MainComponent>
  );
};

export default Route;

const MainComponent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
`;

const MapImg = styled.img`
  width: 32rem;
  max-width: 100%;
  padding-bottom: 2rem;
  padding-top: 2rem;
`;

const RecommentText = styled.div`
  font-family: Pretendard;
  font-weight: 700;
  font-size: 1.2rem;
  padding-bottom: 0.8rem;
`;

const IconContainer = styled.div`
  position: absolute;
`;

const MapPinAryeong = styled(FiMapPin)`
  color: rgb(192, 57, 43);
  width: 2rem;
  height: 2rem;
  position: relative;
  top: -11.3rem;
  right: -12.5rem;
  cursor: pointer;
`;

const MapPinECC = styled(FiMapPin)`
  color: rgb(192, 57, 43);
  width: 2rem;
  height: 2rem;
  position: relative;
  top: -3rem;
  right: -8rem;
  cursor: pointer;
`;

const MapPinMuseum = styled(FiMapPin)`
  color: rgb(192, 57, 43);
  width: 2rem;
  height: 2rem;
  position: relative;
  top: 3rem;
  right: 1rem;
  cursor: pointer;
`;

const MapPinHall = styled(FiMapPin)`
  color: rgb(192, 57, 43);
  width: 2rem;
  height: 2rem;
  position: relative;
  top: -1rem;
  left: -3rem;
  cursor: pointer;
`;

const MapPinJinseon = styled(FiMapPin)`
  color: rgb(192, 57, 43);
  width: 2rem;
  height: 2rem;
  position: relative;
  top: -6.5rem;
  left: 3rem;
  cursor: pointer;
`;

const MapPinMain = styled(FiMapPin)`
  color: rgb(192, 57, 43);
  width: 2rem;
  height: 2rem;
  position: relative;
  top: -10rem;
  cursor: pointer;
`;

const Line = styled.div`
  margin: 1rem 1rem 1rem 1.7rem;
  background-color: #c3bebe;
  width: 100%;
  height: 0.2rem;
`;

const Buildings = styled.div`
  display: flex;
  flex-direction: row;
  gap: 5rem;
  padding: 1rem;
  margin-left: -3rem;
`;

const Column = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
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
  border: 1px solid gray;
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
  padding-left: 0.5rem;
`;

const StartBtn = styled.div`
  color: white;
  background-color: rgb(0, 70, 42);
  border-radius: 0.3rem;
  margin-top: 0.5rem;
  width: 7rem;
  height: 3rem;
  display: flex;
  justify-content: center;
  align-items: center;
`;
