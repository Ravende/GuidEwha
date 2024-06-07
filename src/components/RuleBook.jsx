import React from "react";
import styled from "styled-components";
import { IoCloseCircleOutline } from "react-icons/io5";

const RuleBook = ({ onClose }) => {
  return (
    <RuleBookComponent>
      <CloseBtn alt="닫는 버튼" onClick={onClose} />
      <RuleTitle>방문객 유의사항</RuleTitle>
      <RuleText>
        <ul>
          <li>
            ECC 내부 건물은 지하 4층만 출입 가능합니다.관광객께서는 ECC 3번
            출구와 4번 출구를 이용해주십시오.
          </li>
          <li>
            관광객 출입 금지 팻말이 놓인 곳은 학생들의 학업이 이루어지는
            장소이니 출입을 자제하여 주십시오.
          </li>
          <li>
            아이들과 동반하셨을 시 아이들이 큰 소음을 유발하지 않도록 지도하여
            주십시오.
          </li>
          <li>
            사진 촬영 시에는 재학생들의 초상권이 침해되지 않도록 주의하여
            주십시오.
          </li>
          <li>
            ECC 외 재학생들의 수업이 이루어지는 모든 건물은 허가 없는 외부인이
            출입이 불가합니다.
          </li>
          <li>
            학생 및 교직원 외에는 셔틀 버스 이용이 불가하므로 양해해 주시기
            바랍니다.
          </li>
          <li>22시 이후에는 외부인의 교내 출입이 불가합니다.</li>
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
  background: rgba(0, 0, 0, 0.8);
  display: flex;
  flex-direction: column;
  padding-top: 2rem;
  //justify-content: center;
  //align-items: center;
  z-index: 100;
`;

const CloseBtn = styled(IoCloseCircleOutline)`
  color: #ffffff;
  position: absolute;
  width: 3rem;
  height: 3rem;
  top: 2.2rem;
  right: 1.5rem;
  //top: -15rem;
  //right: -18rem;
  cursor: pointer;
`;

const RuleTitle = styled.div`
  font-family: Pretendard;
  font-size: 2rem;
  font-weight: 700;
  color: #ffffff;
  display: flex;
  justify-content: center;
  padding: 0.5rem;
`;

const RuleText = styled.div`
  font-family: Pretendard;
  color: #ffffff;
  font-weight: 600;
  font-size: 1.5rem;
  line-height: 1.7;
`;
