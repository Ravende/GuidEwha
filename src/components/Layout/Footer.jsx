import React from "react";
import styled from "styled-components";
import schoolLogo from "../../assets/school-mark.png";

const Footer = () => {
  return (
    <FooterComponent>
      <FooterText>GuidEwha</FooterText>
      <SchoolLogo src={schoolLogo} alt="학교 마크" />
    </FooterComponent>
  );
};

export default Footer;

const FooterComponent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-bottom: 1rem;
`;

const SchoolLogo = styled.img`
  width: 1.8rem;
  height: 1.8rem;
`;

const FooterText = styled.div`
  padding: 0.4rem;
  font-family: Pretendard;
  font-weight: 700;
  font-size: 1rem;
  color: rgb(0, 70, 42);
`;
