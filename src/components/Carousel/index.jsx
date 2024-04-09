"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "animate.css";

import { getLatestNews } from "@/services/api-services";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

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
      navigation={true}
      modules={[Autoplay, Pagination, Navigation]}
      id="mySwiper"
    >
      {latestNewsData &&
        latestNewsData.map((news) =>
          news?.thumbnail.length > 0 ? (
            <SwiperSlide key={JSON.stringify(news?.title)}>
              <div className="relative text-justify bg-color-accent2 flex justify-center animate__animated animate__zoomIn">
                <img
                  onError={(e) =>
                    (e.currentTarget.src =
                      "https://via.placeholder.com/350x150")
                  }
                  src={news?.thumbnail}
                  alt={news?.title}
                  className="md:w-[90%] w-full md:h-96 h-60 md:object-contain object-cover"
                />
                <div className="bg-color-secondary bg-opacity-70 absolute bottom-0 w-full md:text-center md:h-[20%] h-[30%]">
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
  );
};

export default Carousel;
