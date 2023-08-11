import React from 'react'
import HeroBanner from "./heroBanner/HeroBanner.jsx"
import Trending from "./trending/Trending";
import Popular from './popular/Popular.jsx';
import './Home.scss';
import TopRated from './toprated/TopRated.jsx';
const Home = () => {
  return (
    <div>
      <HeroBanner />
      <Trending />
      <Popular />
      <TopRated />
      {/* <div style={{height: 1000}}></div> */}
    </div>
  )
}

export default Home;
