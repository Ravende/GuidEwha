import React from "react";
import styled from "styled-components";
import schoolMap from "../assets/school-map.png";

const MainPage = () => {
  return (
    <>
      <MainComponent>
        <MapImg src={schoolMap} />
        <MapBtns>
          <MapButton>맞춤 경로 추천</MapButton>
          <MapButton>규칙집</MapButton>
        </MapBtns>
      </MainComponent>
    </>
  );
};

export default MainPage;

const MainComponent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const MapImg = styled.img`
  width: 32rem;
  max-width: 100%;
  padding: 2rem;
`;

const MapBtns = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 2.5rem;
  margin-bottom: 1rem;
`;

const MapButton = styled.div`
  border: 0.2rem solid rgb(0, 102, 79);
  background-color: rgba(0, 70, 42, 0.13);
  width: 12rem;
  height: 5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  //color: white;
  font-family: Pretendard;
  font-weight: 600;
  font-size: 1.4rem;
  border-radius: 3rem;
`;
