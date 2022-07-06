import type { NextPage } from 'next';
import Map from '../components/Map';

const Home: NextPage = () => {
  return (
    <>
      <h1>CNA - TS</h1>
      <Map latitude={33.450701} longitude={126.570667} />
    </>
  );
};

export default Home;
