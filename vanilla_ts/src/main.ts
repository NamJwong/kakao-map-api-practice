import './style.css';

const kakao = (window as any).kakao;

const container = document.getElementById('map');
const options = {
  center: new kakao.maps.LatLng(33.450701, 126.570667),
  level: 3,
};

new kakao.maps.Map(container, options);
