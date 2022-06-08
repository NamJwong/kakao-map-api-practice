/* global kakao */
import { useEffect } from 'react';

declare global {
  interface Window {
    kakao: any;
  }
}

// const kakao = (window as any).kakao;


interface MapProps {
  latitude: number;
  longitude: number;
}

export default function Map({ latitude, longitude }: MapProps) {
  useEffect(() => {
    // const mapScript = document.createElement('script');

    // mapScript.async = true;
    // mapScript.src = `//dapi.kakao.com/v2/maps/sdk.js?appkey=${process.env.NEXT_PUBLIC_KAKAOMAP_APPKEY?.replaceAll(
    //   '"',
    //   ''
    // ).replace(';', '')}&autoload=false`;

    // document.head.appendChild(mapScript);

    console.log(window.kakao);

    // const onLoadKakaoMap = () => {
  //     window.kakao.maps.load(() => {
  //       const container = document.getElementById('map');
  //       const options = {
  //         center: new window.kakao.maps.LatLng(latitude, longitude),
  //       };
  //       const map = new window.kakao.maps.Map(container, options);
  //       const markerPosition = new window.kakao.maps.LatLng(
  //         latitude,
  //         longitude
  //       );
  //       const marker = new window.kakao.maps.Marker({
  //         position: markerPosition,
  //       });
  //       marker.setMap(map);
  //     });
  //   };
  //   mapScript.addEventListener('load', onLoadKakaoMap);

  //   return () => mapScript.removeEventListener('load', onLoadKakaoMap);
  }, [latitude, longitude]);

  return (
    <>
      <div id="map" className="map-container" />
      <style jsx>{`
        .map-container {
          aspect-ratio: 320 / 220;
        }
      `}</style>
    </>
  );
}
