import React from "react";
import styled from "styled-components";
import schoolMap from "../assets/school-map.png";
import { FaCamera } from "react-icons/fa";
import { IoRestaurant } from "react-icons/io5";
import { IoMdCafe } from "react-icons/io";

const MainPage = () => {
  return (
    <>
      <MainComponent>
        <FilterBtns>
          <FilterButton>
            <PhotoIcon />
            사진 스팟
          </FilterButton>
          <FilterButton>
            <MealIcon />
            식당
          </FilterButton>
          <FilterButton>
            <CafeIcon />
            카페
          </FilterButton>
        </FilterBtns>
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
  width: 100%;
`;

const FilterBtns = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  width: 100%;
  gap: 1rem;
  padding-left: 2rem;
`;

const FilterButton = styled.div`
  border: 0.1rem solid #aaa;
  font-family: Pretendard;
  font-size: 1rem;
  font-weight: 500;
  border-radius: 1.5rem;
  padding: 0.4rem 0.8rem 0.5rem 0.5rem;
  height: 1.2rem;
  display: flex;
  justify-content: center;
  align-items: center;

  &:active {
    background-color: #aaa;
  }
`;

const PhotoIcon = styled(FaCamera)`
  color: rgb(39, 174, 96);
  width: 1.5rem;
  height: 1.5rem;
  padding: 0.5rem;
`;

const MealIcon = styled(IoRestaurant)`
  color: rgb(39, 174, 96);
  width: 1.5rem;
  height: 1.5rem;
  padding: 0.3rem;
`;

const CafeIcon = styled(IoMdCafe)`
  color: rgb(39, 174, 96);
  width: 1.5rem;
  height: 1.5rem;
  padding: 0.3rem;
`;

const MapImg = styled.img`
  width: 32rem;
  max-width: 100%;
  padding-bottom: 2rem;
  padding-top: 2rem;
`;

const MapBtns = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 2.5rem;
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
