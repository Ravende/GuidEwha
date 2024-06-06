import React from "react";
//import KakaoMap from "./map/KakaoMap";
import styled from "styled-components";
import schoolMap from "../assets/school-map.jpg";

const MainPage = () => {
  return (
    <>
      {/* <KakaoMap /> */}
      <MainComponent>
        <MapImg src={schoolMap} />
      </MainComponent>
    </>
  );
};

export default MainPage;

const MainComponent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const MapImg = styled.img`
  width: 23rem;
`;
