"use client";

import React from "react";
import { CaretLeft, CaretRight } from "@phosphor-icons/react/dist/ssr";
import "animate.css";

import { getLatestNews } from "@/services/api-services";
import { useState, useEffect } from "react";
import { formatDate } from "@/utils/formatDate";

const Carousel = ({ latestNews }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [latestNewsData, setLatestNewsData] = useState([]);

  useEffect(() => {
    const fetchLatestNewsData = async () => {
      const getLinkLatestNews = latestNews.map((item) => item.paths[0].path);
      const getLatestNewsData = getLinkLatestNews.map(async (item) => {
        const data = await getLatestNews(item);
        return data;
      });

      const newsData = await Promise.all(getLatestNewsData);
      setLatestNewsData(newsData);
    };

    fetchLatestNewsData();
  }, [latestNews]);

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? latestNewsData.length - 1 : prevIndex - 1
    );
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === latestNewsData.length - 1 ? 0 : prevIndex + 1
    );
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);

    return () => clearInterval(interval);
  }, [latestNewsData]);

  return (
    <div className="relative flex justify-between w-full h-96 overflow-hidden">
      <button
        onClick={prevSlide}
        className="absolute z-10 left-10 top-1/2 transform -translate-y-1/2 p-2 max-h-max text-primary-content hidden lg:block"
      >
        <CaretLeft weight="bold" size={42} />
      </button>
      <div
        className="flex transition-transform duration-500 ease-in-out"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {latestNewsData.map((news) => (
          <div
            key={news?.id}
            className="relative w-full flex justify-center flex-shrink-0"
          >
            <img
              src={news?.thumbnail}
              alt={news?.title}
              className="w-full lg:w-1/2 h-96 object-cover"
            />
            <div className="absolute bottom-0 p-4 bg-white bg-opacity-90 w-full text-center">
              <a
                target="_blank"
                href={news?.link}
                className="flex flex-col justify-center items-center text-sm hover:text-primary-content transition-all duration-300 ease-in-out w-full"
              >
                <span className="font-bold">{news?.title}</span>
                <span className="font-normal">{formatDate(news?.pubDate)}</span>
              </a>
            </div>
          </div>
        ))}
      </div>
      <button
        onClick={nextSlide}
        className="absolute z-10 right-10 top-1/2 transform -translate-y-1/2 p-2 max-h-max bg-transparent hover:bg-gray-200 rounded-full text-primary-content hidden lg:block"
      >
        <CaretRight weight="bold" size={42} />
      </button>
    </div>
  );
};

export default Carousel;
