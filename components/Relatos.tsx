"use client";

import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import './styles.css';
import "../styles/Banner.module.css";

// import required modules
import { Pagination } from "swiper/modules";

export default function App() {
    return (
        <>
            <Swiper
                pagination={{
                    dynamicBullets: true,
                    clickable: true,
                }}
                modules={[Pagination]}
                slidesPerView={'auto'}
                spaceBetween={30}
                centeredSlides={true}
                className="mySwiperBanner "
            >
                <SwiperSlide className="bg-[#f7ca96] rounded-xl w-10/12">Relato 1</SwiperSlide>
                <SwiperSlide className="bg-[#f7ca96] rounded-xl w-10/12">Relato 2</SwiperSlide>
                <SwiperSlide className="bg-[#f7ca96] rounded-xl w-10/12">Relato 3</SwiperSlide>
                <SwiperSlide className="bg-[#f7ca96] rounded-xl w-10/12">Relato 4</SwiperSlide>
                {/* <SwiperSlide>Slide 5</SwiperSlide>
                <SwiperSlide>Slide 6</SwiperSlide>
                <SwiperSlide>Slide 7</SwiperSlide>
                <SwiperSlide>Slide 8</SwiperSlide>
                <SwiperSlide>Slide 9</SwiperSlide> */}
            </Swiper>
        </>
    );
}
