import React from "react";
import styled from "styled-components";
import EccIntroduce from "./EccDetails/EccIntroduce";
import TourInfo from "./EccDetails/TourInfo";
import MealTime from "./EccDetails/MealTime";
import VisitorsBook from "./EccDetails/VisitorsBook";

const DetailPageEcc = () => {
  return (
    <EccComponent>
      <EccIntroduce />
      <Line />
      <TourInfo />
      <Line />
      <MealTime />
      <Line />
      <VisitorsBook />
    </EccComponent>
  );
};

export default DetailPageEcc;

const EccComponent = styled.div`
  display: flex;
  flex-direction: column;
`;

const Line = styled.div`
  margin: 3rem 1rem 3rem 1.7rem;
  background-color: #c3bebe;
  width: 90%;
  height: 0.1rem;
`;
