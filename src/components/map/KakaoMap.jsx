//import { useRef, useState } from "react";
import { Map, MapMarker } from "react-kakao-maps-sdk";
import styled from "styled-components";
//import "./map.css";
import useKakaoLoader from "./useKakaoLoader.jsx";
//import axios from "axios";
//import { useNavigate } from "react-router-dom";

const KakaoMap = () => {
  useKakaoLoader();

  return (
    <MapContainer>
      <Map
        center={{
          lat: 37.559716,
          lng: 126.945468,
        }}
        level={3}
      >
        <MapMarker position={{ lat: 33.55635, lng: 126.795841 }}>
          <div style={{ color: "#000" }}>Hello World!</div>
        </MapMarker>
      </Map>
    </MapContainer>
  );
};

export default KakaoMap;

const MapContainer = styled.div`
  //overflow: hidden;
  width: 100%;
  height: 360px;
`;
