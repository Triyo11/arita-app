"use client";

import { useState, useEffect, useRef, useCallback } from "react";

import Carousel from "@/components/Carousel";
import NewsCard from "@/components/NewsCard";
import { getNewsResponse } from "@/services/api-services";
import { getAllNewsLink } from "@/services/api-services";
import "animate.css";
import { supabase } from "@/lib/supabase";

import "@/app/globals.css";
import Loading from "./loading";

const Page = () => {
  const [allNewsData, setAllNewsData] = useState([]);
  const [choosenNews, setChoosenNews] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [displayedNews, setDisplayedNews] = useState([]);

  const observer = useRef();
  const isFetched = useRef(false);
  const arrChoosenNews = ["cnn", "cnbc", "kumparan"];

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
    // filter if in flattenedData there are duplicate title
    const uniqueData = flattenedData.filter(
      (item, index, self) =>
        index ===
        self.findIndex((t) => t?.title === item?.title && t?.link === item?.link)
    );
    setAllNewsData(uniqueData);
    setDisplayedNews(uniqueData.slice(0, 20)); // Gunakan slice
    setIsLoading(false);
    uploadSupabase(uniqueData);
  };

  const uploadSupabase = async (dataNewsUpload) => {
    const { data, error } = await supabase.from("arita-news-data").insert(
      dataNewsUpload.map((item) => {
        return {
          title: item?.title,
          thumbnail: item?.thumbnail,
          pub_date: item?.pubDate,
          link: item?.link,
          description: item?.description,
        };
      })
    );
    if (error) {
      console.error("Error inserting data to supabase:", error);
    } else {
      console.log("Success inserting data to supabase:", data);
    }
  };

  useEffect(() => {
    // to make sure
    // fetching runned once
    if (!isFetched.current) {
      fetchNewsData();
      fetchAllNewsData();
      isFetched.current = true;
    }
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

  return (
    <div>
      <section>
        <Carousel latestNews={choosenNews} />
        <NewsCard news={displayedNews} />
        <div ref={lastElementRef} className="p-4 text-center">
          {isLoading && <Loading />}
        </div>
      </section>
    </div>
  );
};

export default Page;
