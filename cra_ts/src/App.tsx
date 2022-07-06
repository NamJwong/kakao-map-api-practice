import './App.css';
import { useEffect } from 'react';

declare global {
  interface Window {
    kakao: any;
  }
}

function App() {
  const { kakao } = window;

  useEffect(() => {
    kakao.maps.load(() => {
      const container = document.getElementById('map');
      const options = {
        center: new kakao.maps.LatLng(33.450701, 126.570667),
      };
      const map = new kakao.maps.Map(container, options);
      const markerPosition = new kakao.maps.LatLng(33.450701, 126.570667);
      const marker = new kakao.maps.Marker({
        position: markerPosition,
      });
      marker.setMap(map);
    });
  }, []);

  return (
    <>
      <h1>CRA - TS</h1>
      <div id="map" className="map-container" />
    </>
  );
}

export default App;
