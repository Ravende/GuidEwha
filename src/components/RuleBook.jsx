import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { IoCloseCircleOutline } from "react-icons/io5";

const RuleBook = ({ onClose }) => {
  return (
    <RuleBookComponent>
      <CloseBtn alt="닫는 버튼" onClick={onClose} />
      <RuleTitle>방문객 유의사항</RuleTitle>
      <RuleText>
        <ul>
          ECC 내부 건물은 지하 4층만 출입 가능합니다.관광객께서는 ECC 3번 출구와
          4번 출구를 이용해주십시오.
        </ul>
      </RuleText>
    </RuleBookComponent>
  );
};

export default RuleBook;

const RuleBookComponent = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.7);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  z-index: 100;
`;

const CloseBtn = styled(IoCloseCircleOutline)`
  color: #ffffff;
  //position: absolute;
  width: 2rem;
  height: 2rem;
  top: 6rem;
  right: 3rem;
  //top: -15rem;
  //right: -18rem;
  cursor: pointer;
`;

const RuleTitle = styled.div`
  font-family: Pretendard;
  font-size: 1.5rem;
  font-weight: 700;
  color: #ffffff;
`;

const RuleText = styled.div`
  font-family: Pretendard;
  color: #ffffff;
`;
