import React from "react";
import styled from "styled-components";
import { IoCaretForwardOutline } from "react-icons/io5";
import { MdPushPin } from "react-icons/md";

const MealTime = () => {
  return (
    <Restuarants>
      <EccMealTitle>
        <Icon />
        <TitleText>관광객 가능 출입 구역 안내</TitleText>
      </EccMealTitle>
      <BoxComponents>
        <BoxRow>
          <Box>
            <NameText>
              <Pin />
              닥터로빈
            </NameText>
            <Text>02-363-3101</Text>
          </Box>
          <Box>
            <NameText>
              <Pin />
              샐러디
            </NameText>
            <Text>02-313-0577</Text>
          </Box>
        </BoxRow>
        <BoxRow>
          <Box>
            <NameText>
              <Pin />
              이화김밥
            </NameText>
            <Text>02-3277-4914</Text>
          </Box>
          <Box>
            <NameText>
              <Pin />
              MY del Place
            </NameText>
            <Text>02-3277-4914</Text>
          </Box>
        </BoxRow>
      </BoxComponents>
    </Restuarants>
  );
};

export default MealTime;

const Restuarants = styled.div`
  display: flex;
  flex-direction: column;
`;

const EccMealTitle = styled.div`
  display: flex;
  flex-direction: row;
  padding-bottom: 1rem;
  padding-left: 2rem;
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

const BoxComponents = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  padding-top: 1rem;
  justify-content: center;
`;

const BoxRow = styled.div`
  display: flex;
  flex-direction: row;
  gap: 3rem;
`;

const Box = styled.div`
  width: 10rem;
  height: 3rem;
  border: 1px solid gray;
  padding: 1rem;
`;

const Pin = styled(MdPushPin)`
  color: rgb(39, 174, 96);
  width: 1.5rem;
  height: 1.5rem;
`;

const NameText = styled.div`
  font-family: Pretendard;
  font-weight: 600;
  font-size: 1rem;
  display: flex;
  flex-direction: row;
  gap: 0.7rem;
`;

const Text = styled.div`
  color: gray;
  padding-left: 2rem;
`;
