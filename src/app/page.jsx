"use client";

import { useState, useEffect, useRef, useCallback } from "react";

import Carousel from "@/components/Carousel";
import NewsCard from "@/components/NewsCard";
import { getNewsResponse } from "@/services/api-services";
import { getAllNewsLink } from "@/services/api-services";
import { HydrationProvider, Client } from "react-hydration-provider";
import "animate.css";

import "@/app/globals.css";
import Loading from "./loading";

const Page = () => {
  const [allNewsData, setAllNewsData] = useState([]);
  const [choosenNews, setChoosenNews] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [displayedNews, setDisplayedNews] = useState([]);

  const observer = useRef();
  const arrChoosenNews = ["antara", "cnn", "cnbc", "tempo", "jpnn"];

  const fetchNewsData = async () => {
    const resources = await getNewsResponse("");
    const filteredNews = resources.endpoints.filter((item) =>
      arrChoosenNews.includes(item.name)
    );
    setChoosenNews(filteredNews);
  };

  const fetchAllNewsData = async () => {
    setIsLoading(true);
    const data = await getAllNewsLink();
    const allNewsData = await Promise.all(
      data?.map(async (item) => {
        const response = await fetch(item);
        const jsonData = await response.json();
        return jsonData.data?.posts;
      })
    );
    const flattenedData = allNewsData.flat();
    setAllNewsData(flattenedData);
    setDisplayedNews(flattenedData.slice(0, 20)); // Gunakan slice
    setIsLoading(false);
  };

  useEffect(() => {
    fetchNewsData();
    fetchAllNewsData();
  }, []);

  const lastElementRef = useCallback(
    (node) => {
      if (isLoading) return;
      if (observer.current) observer.current.disconnect();

      observer.current = new IntersectionObserver((entries) => {
        if (
          entries[0].isIntersecting &&
          allNewsData.length > displayedNews.length
        ) {
          setIsLoading(true);
          setDisplayedNews((prev) => [
            ...prev,
            ...allNewsData.slice(prev.length, prev.length + 20),
          ]);
          setTimeout(() => {
            setIsLoading(false);
          }, 1000);
        }
      });

      if (node) observer.current.observe(node);
    },
    [isLoading, allNewsData, displayedNews.length]
  );

  console.log(displayedNews);

  return (
    <div>
      <section>
        {/* <div className="bg-secondary">
          <HydrationProvider>
            <Client>
              <Carousel latestNews={choosenNews} />
            </Client>
          </HydrationProvider>
        </div> */}
        <NewsCard news={displayedNews} />
        <div ref={lastElementRef} className="p-4 text-center">
          {isLoading && <Loading />}
        </div>
      </section>
    </div>
  );
};

export default Page;
