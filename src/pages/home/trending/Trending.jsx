import React, { useState } from 'react';

import Carousel from '../../../component/carousel/Carousel';
import ContentWrapper from '../../../component/contentWrapper/ContentWrapper';
import SwitchTabs from '../../../component/switchTabs/SwitchTabs';
import useFetch from "../../../hooks/useFetch";
import "./style.scss"

const Trending = () => {
const [endpoint, setEndpoint] = useState("day");

const { data , loading} = useFetch(`/trending/movie/${endpoint}`);

const onTabChange = (tab) => {
  setEndpoint(tab === "Day" ? "day" : "week");
};

  return (
    <div className='carouselSection'>
      <ContentWrapper className="content-wrapper">
          <span className='carouselTitle'>Trending</span>
          <SwitchTabs data={["Day", "week"]} onTabChange={onTabChange} />
      </ContentWrapper>
      <Carousel data= {data?.results} loading={loading} />
    </div>
  )
}

export default Trending;
