import React from "react";
import styled from "styled-components";
import { FaCamera } from "react-icons/fa";
import { IoRestaurant } from "react-icons/io5";
import { IoMdCafe } from "react-icons/io";

const FilteringBtn = () => {
  return (
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
  );
};

export default FilteringBtn;

const FilterBtns = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  gap: 1rem;
  width: calc(100% - 2rem);
  padding-left: 1rem;
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
  cursor: pointer;

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
