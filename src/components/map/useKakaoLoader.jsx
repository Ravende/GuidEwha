import { useKakaoLoader as useKakaoLoaderOrigin } from "react-kakao-maps-sdk";

export default function useKakaoLoader() {
  useKakaoLoaderOrigin({
    appkey: "d6754814f5927221eb7b0ba010c627b9",
    libraries: ["clusterer", "drawing", "services"],
  });
}
