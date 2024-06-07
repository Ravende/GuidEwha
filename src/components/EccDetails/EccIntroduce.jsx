import React from "react";
import styled from "styled-components";
import eccImage from "../../assets/ecc.jpg";

const EccIntroduce = () => {
  return (
    <Description>
      <EccTitle>
        이화캠퍼스복합단지
        <br />
        (Ewha Campus Complex)
      </EccTitle>
      <EccImage src={eccImage} />
      <EccText>
        총 6개층으로 이루어진 국내 대학 최대 규모의 신개념 지하캠퍼스 공간으로,
        세계적 건축가 도미니크 페로가 설계한 건물로 2008년 봉헌됐다.{" "}
      </EccText>
      <EccText>
        이화캠퍼스복합단지는 기존의 이화광장과 운동장을 마치 계곡처럼 가로실러
        본관 앞까지 이어지는 형태로 디자인되었다. 지하캠퍼스임에도 불구하고 오픈
        밸리를 통한 적극적인 채광과 환기가 가능하며 지상 공간과 같은 느낌의
        쾌적하고 상쾌한 그린캠퍼스로 설계되었다.
      </EccText>
    </Description>
  );
};

export default EccIntroduce;

const Description = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const EccTitle = styled.div`
  font-family: Pretendard;
  font-weight: 700;
  font-size: 1.3rem;
  padding: 1rem;
  text-align: center;
  color: rgb(0, 70, 42);
`;

const EccImage = styled.img`
  width: 30rem;
  height: 20rem;
  padding: 1rem;
  padding-bottom: 1.5rem;
`;

const EccText = styled.div`
  font-family: Pretendard;
  font-weight: 500;
  font-size: 0.9rem;
  padding-left: 1.5rem;
  padding-right: 1.5rem;
  margin-top: 1rem;
  line-height: 1.7;
`;
