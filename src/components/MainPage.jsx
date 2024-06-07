import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import FilteringBtn from "./FilteringBtn";
import MapBtn from "./MapBtn";
import schoolMap from "../assets/school-map.png";
import { FaMapMarkerAlt } from "react-icons/fa";

const MainPage = () => {
  const navigate = useNavigate();
  const handleGoECC = () => {
    navigate("/detailPage/ECC");
  };

  return (
    <>
      <MainComponent>
        <FilteringBtn />
        <MapImg src={schoolMap} />
        <IconContainer>
          <MapPinAryeong />
          <MapPinECC onClick={handleGoECC} />
          <MapPinMuseum />
        </IconContainer>
        <MapBtn />
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
  width: 100%;
`;

const MapImg = styled.img`
  width: 32rem;
  max-width: 100%;
  padding-bottom: 2rem;
  padding-top: 2rem;
`;

const IconContainer = styled.div`
  position: absolute;
`;

const MapPinAryeong = styled(FaMapMarkerAlt)`
  color: rgb(192, 57, 43);
  width: 2rem;
  height: 2rem;
  position: relative;
  top: -7.3rem;
  right: -9.6rem;
  cursor: pointer;
`;

const MapPinECC = styled(FaMapMarkerAlt)`
  color: rgb(192, 57, 43);
  width: 2rem;
  height: 2rem;
  position: relative;
  top: 0.8rem;
  right: -5.3rem;
  cursor: pointer;
`;

const MapPinMuseum = styled(FaMapMarkerAlt)`
  color: rgb(192, 57, 43);
  width: 2rem;
  height: 2rem;
  position: relative;
  top: 7rem;
  right: 4.4rem;
  cursor: pointer;
`;
