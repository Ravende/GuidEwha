import React, { useState } from "react";
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

  const [isModalOpen, setIsModalOpen] = useState(false);
  const handleMouseEnter = () => {
    setIsModalOpen(true);
  };

  const handleMouseLeave = () => {
    setIsModalOpen(false);
  };

  return (
    <MainComponent>
      <FilteringBtn />
      <MapImg src={schoolMap} />
      <IconContainer>
        <MapPinAryeong
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        />
        <MapPinECC onClick={handleGoECC} />
        <MapPinMuseum />
      </IconContainer>
      <MapBtn />
      {isModalOpen && (
        <Modal>
          <ModalContent>
            <Title>이화역사관 (Ewha Archives)</Title>
            <Text>
              이화학당 최초의 한옥교사를 재현하여 세워졌다. 한국의 방문객이라면
              누구나 이곳에서 한국 근현대사를 속에서의 이화의 역할과 의미를
              되새기는 시간을 가질 수 있다.
            </Text>
          </ModalContent>
        </Modal>
      )}
    </MainComponent>
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

const Modal = styled.div`
  position: absolute;
  top: 12rem;
  left: 24rem;
  width: 15rem;
  transform: translate(-50%, -50%);
  background-color: white;
  padding: 0.7rem;
  border: 1px solid gray;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  z-index: 10;
  border-radius: 1rem;
`;

const ModalContent = styled.div`
  text-align: center;
  padding: 0;
  margin: 0;
`;

const Title = styled.p`
  font-family: Pretendard;
  font-weight: 700;
  font-size: 1.2rem;
`;

const Text = styled.p`
  font-family: Pretendard;
  font-weight: 400;
  font-size: 0.8rem;
`;
