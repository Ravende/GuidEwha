import React, { useState, useEffect } from "react";
import styled from "styled-components";
import RuleBook from "./RuleBook";

const MapBtn = () => {
  const [isRuleOpen, setIsRuleOpen] = useState(false);

  const handleRuleBook = () => {
    setIsRuleOpen((prevState) => !prevState);
  };

  useEffect(() => {
    if (isRuleOpen) {
      setIsRuleOpen(true);
    }
  }, [isRuleOpen]);

  return (
    <MapBtns>
      <MapButton>맞춤 경로 추천</MapButton>
      <MapButton onClick={handleRuleBook}>규칙집</MapButton>
      {isRuleOpen && <RuleBook onClose={handleRuleBook} />}
    </MapBtns>
  );
};

export default MapBtn;

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
  cursor: pointer;
`;
