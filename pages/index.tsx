import type { NextPage } from 'next';
import Map from '../components/Map';

const Home: NextPage = () => {
  return <Map latitude={37.645} longitude={127.0282} />;
};

export default Home;
