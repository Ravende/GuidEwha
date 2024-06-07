import React from "react";
import styled from "styled-components";
import eccB4Image from "../../assets/ecc-b4.png";
import { IoCaretForwardOutline } from "react-icons/io5";

const TourInfo = () => {
  return (
    <TourInformation>
      <EccTourTitle>
        <Icon />
        <TitleText>관광객 가능 출입 구역 안내</TitleText>
      </EccTourTitle>
      <TourContents>
        <EccB4Image src={eccB4Image} />
        <StoresInfo>
          <Box1>
            <Text>ECC극장 B403호</Text>
            <Text>떡집 B411-2호</Text>
            <Text>베이커리 B406호</Text>
            <Text>삼성홀 B414호</Text>
            <Text>샐러디 B404호</Text>
            <Text>생협기념품점 B410호</Text>
            <Text>서점 B409호</Text>
            <Text>안경점 B418호</Text>
            <Text>약국 B404-1호</Text>
          </Box1>
          <Line />
          <Box2>
            <Text>은행 B405호</Text>
            <Text>이삼봉홀 B412호</Text>
            <Text>이화김밥 B417호</Text>
            <Text>영화관1 B402-1호</Text>
            <Text>영화관2 B402-2호</Text>
            <Text>닥터로빈 B401호</Text>
            <Text>스타벅스 B415호</Text>
            <Text>편의점 B420호</Text>
            <Text>푸드코트 B407호</Text>
          </Box2>
        </StoresInfo>
      </TourContents>
    </TourInformation>
  );
};

export default TourInfo;

const TourInformation = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 2rem;
`;

const EccTourTitle = styled.div`
  display: flex;
  flex-direction: row;
  padding-bottom: 1rem;
`;

const Icon = styled(IoCaretForwardOutline)`
  color: rgb(0, 70, 42);
  width: 1.5rem;
  height: 1.5rem;
`;

const TitleText = styled.div`
  font-family: Pretendard;
  font-weight: 700;
  font-size: 1.2rem;
  text-align: start;
  color: rgb(0, 70, 42);
`;

const TourContents = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const EccB4Image = styled.img`
  width: 23rem;
  height: 23em;
  padding-right: 5rem;
`;

const StoresInfo = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  padding: 2rem;
  padding-bottom: 0;
  gap: 2rem;
`;

const Box1 = styled.div`
  padding: 1rem;
`;

const Box2 = styled.div`
  padding: 1rem;
`;

const Line = styled.div`
  background-color: #eee;
  height: 100%;
  width: 0.3rem;
`;

const Text = styled.p`
  font-family: Pretendard;
  font-weight: 500;
  font-size: 1rem;
`;
