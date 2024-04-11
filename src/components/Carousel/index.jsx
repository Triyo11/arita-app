"use client";

import React from "react";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { CaretLeft, CaretRight } from "@phosphor-icons/react/dist/ssr";
import "animate.css";

import { getLatestNews } from "@/services/api-services";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const SwiperButtonNext = ({ children }) => {
  const swiper = useSwiper();
  return (
    <button className="text-primary-content" onClick={() => swiper.slideNext()}>
      {children}
    </button>
  );
};

const SwiperButtonPrev = ({ children }) => {
  const swiper = useSwiper();
  return (
    <button className="text-primary-content" onClick={() => swiper.slidePrev()}>
      {children}
    </button>
  );
};

const Carousel = async ({ latestNews }) => {
  const getLinkLatestNews = latestNews.map((item) => item.paths[0].path);
  // console.log(getLinkLatestNews)
  const getLatestNewsData = getLinkLatestNews.map(async (item) => {
    const data = await getLatestNews(item);
    return data;
  });

  const latestNewsData = Array.from(await Promise.all(getLatestNewsData));
  console.log(latestNewsData);

  return (
    <div className="relative">
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        modules={[Autoplay, Pagination]}
        id="mySwiper"
      >
        <div className="absolute top-1/2 md:left-10 left-2 z-20">
          <SwiperButtonPrev>
            <CaretLeft size={42} weight="bold" />
          </SwiperButtonPrev>
        </div>
        <div className="absolute top-1/2 md:right-10 right-2 z-20">
          <SwiperButtonNext>
            <CaretRight size={42} weight="bold" />
          </SwiperButtonNext>
        </div>
        {latestNewsData &&
          latestNewsData.map((news) =>
            news?.thumbnail.length > 0 ? (
              <SwiperSlide key={JSON.stringify(news?.title)}>
                <div className="text-justify flex justify-center animate__animated animate__zoomIn">
                  <img
                    onError={(e) =>
                      (e.currentTarget.src =
                        "https://via.placeholder.com/350x150")
                    }
                    src={news?.thumbnail}
                    alt={news?.title}
                    className="md:w-[90%] w-full md:h-96 h-60 md:object-contain object-cover"
                  />
                  <div className="bg-primary bg-opacity-80 absolute bottom-0 w-full md:text-center md:h-[20%] h-[30%]">
                    <a
                      className="absolute z-20 bg-transparent w-full bottom-0 mb-0 md:pb-8 pb-4 px-4 pt-4 md:text-xl text-md md:font-bold font-normal text-color-primary line-clamp-2"
                      href={news?.link}
                    >
                      {news?.title}
                    </a>
                  </div>
                </div>
              </SwiperSlide>
            ) : null
          )}
      </Swiper>
    </div>
  );
};

export default Carousel;
