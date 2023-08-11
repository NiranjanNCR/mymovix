import {useState, useEffect} from "react";
import { useDispatch,useSelector } from "react-redux";
import { getApiConfiguration, getGenres } from "./store/homeSlice";
import { fetchDataFromApi } from "./utils/api";

import {BrowserRouter, Routes, Route} from 'react-router-dom';


import Header from "./component/header/Header";
import Footer from "./component/footer/Footer";
import Home from "./pages/home/Home";
import Details from "./pages/details/Details";
import SearchResult from './pages/searchResult/SearchResult';
import Explore from "./pages/explore/Explore";
import pageNotFound from "./pages/404/pageNotFound";
// import HeroBanner from "./pages/home/HeroBanner";



function App() {

  const dispatch= useDispatch();
  const {url} = useSelector((state) =>
    state.home)
console.log(url);

  useEffect(() => {
    fetchApiConfig();
    genresCall();
  }, []);


  const fetchApiConfig = () =>{
    fetchDataFromApi("/configuration").then((res) =>{
      console.log(res);

      const url ={
        backdrop: res.images.secure_base_url + 
        "original",
        poster: res.images.secure_base_url + 
        "original",
        profile: res.images.secure_base_url + 
        "original",

      }


      dispatch(getApiConfiguration(url));
    });
  };

// All promises calling all api
const genresCall = async () =>{
  let promises =[]
  let endPoints = ["tv", "movie"]
  let allGenres ={}

  endPoints.forEach((url) => {
    promises.push(fetchDataFromApi(`/genre/${url}/list`))
  })

  const data = await Promise.all(promises);
  console.log(data);
  data.map(({ genres }) => {
    return genres.map((item) => (allGenres[item.id] = item));
  });

  dispatch(getGenres(allGenres));
}


  return (
    <BrowserRouter> 
    <Header /> 
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/:mediaType/:id" element={<Details />}></Route>
        <Route path="/search/:query" element={<SearchResult />}></Route>
        <Route path="/explore/:mediaType" element={<Explore />}></Route>
        <Route path="*" element={<pageNotFound />}></Route>
      </Routes>
      <Footer />
    </BrowserRouter>
  )
 
}

export default App;
