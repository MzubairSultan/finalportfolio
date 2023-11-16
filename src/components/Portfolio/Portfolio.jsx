import React, { useContext } from "react";
import "./Portfolio.css";
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css";
import olympiaGym from "../../img/olympiagym.png";
import Ecommerce from "../../img/ecom.png";
import speech from "../../img/textToSpeech.jpeg";
import LanguageTranslate from "../../img/languageTranslation.jpg";
import { themeContext } from "../../Context";
const Portfolio = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className="portfolio" id="portfolio">
      {/* heading */}
      <span style={{color: darkMode?'white': ''}}>Recent Projects</span>
      <span>Portfolio</span>

      {/* slider */}
      <Swiper
        spaceBetween={30}
        slidesPerView={3}
        grabCursor={true}
        className="portfolio-slider"
      >
        <SwiperSlide>
        <a href="https://olympiafitclub.netlify.app/" target="_blank"><img src={olympiaGym} alt="" className="myImage" /></a>  
        </SwiperSlide>
        <SwiperSlide>
          <img src={Ecommerce} alt="" />
        </SwiperSlide>
        <SwiperSlide>
         <a href="https://github.com/MzubairSultan/Language-Translation" target="_blank">
         <img src={LanguageTranslate} alt="" className="myImage" />
          </a> 
        </SwiperSlide>
        <SwiperSlide>
        <a href="https://github.com/MzubairSultan/smart-speech-App" target="_blank" >
        <img src={speech} alt=""  className="myImage"/>
          </a>  
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Portfolio;
