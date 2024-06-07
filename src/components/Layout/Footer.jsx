import React from "react";
import styled from "styled-components";

const Footer = () => {
  return (
    <FooterComponent>
      <FooterText>GuidEwha</FooterText>
      <SchoolLogo
        src="https://www.ewha.ac.kr/_res/ewha/img/intro/img-symbol01.gif"
        alt="학교 마크"
      />
    </FooterComponent>
  );
};

export default Footer;

const FooterComponent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 0;
  padding-bottom: 1rem;
  padding-top: 2rem;
`;

const SchoolLogo = styled.img`
  width: 2rem;
  height: 2rem;
`;

const FooterText = styled.div`
  padding: 0.4rem;
  font-family: Pretendard;
  font-weight: 600;
  font-size: 1.4rem;
  color: rgb(0, 70, 42);
`;
