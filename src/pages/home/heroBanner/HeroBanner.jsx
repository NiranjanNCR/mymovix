import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import useFetch from '../../../hooks/useFetch';
import { useSelector } from 'react-redux';
import './HeroBanner.scss';

import Img from "../../../component/lazyLoadImage/Img"
import ContentWrapper from '../../../component/contentWrapper/ContentWrapper';

const HeroBanner = () => {
    const [background, setBackground] = useState(" ");
    const [query, setQuery] = useState(" ");
    const navigate = useNavigate();

    const {url} = useSelector((state) => state.home);

    const {data, loading } = useFetch("/movie/upcoming");

    useEffect(()=> {
        const bg = url.backdrop + 
        data?.results?.[Math.floor(Math.random() *
         20)]?.backdrop_path
setBackground(bg);
    }, [data])

    const searchQueryHandler = (event) => {
        if (event.key === "Enter" && query.length > 0) {
            navigate(`/search/${query}`);
        }
    }

    return (
        <div className='heroBanner'>
       {!loading && <div className='backdrop-img'>
            <Img src={background}></Img>
        </div>}

<div className='opacity-layer'></div>
    
<ContentWrapper>
            <div className='wrapper'>
                <div className='heroBannerContent'>
                    <span className='title'>Welcome</span>
                    <span className='subTitle'>Millions of movies , TV shows and people to discover.
                        Explore Now</span>

                    <div className='searchInput'>
                        <input
                            type="text"
                            onChange={(event) => setQuery(event.target.value)}
                            onKeyUp={searchQueryHandler}
                            placeholder='Search fro a movie or tv show..'

                        />
                        <button>Search</button>
                    </div>

                </div>
            </div>
        </ContentWrapper>
        </div>
    )
}

export default HeroBanner;
