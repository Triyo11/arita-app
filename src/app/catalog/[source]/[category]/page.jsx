"use client";

import NewsCard from "@/components/NewsCard";
import HeaderNewsCard from "@/components/NewsCard/Header";
import Pagination from "@/components/Pagination";
import NotFound from "@/app/not-found";
import { paginate } from "@/helpers/paginate";
import { getNewsResponse } from "@/services/api-services";
import { useEffect, useState } from "react";
import Loading from "@/app/loading";

const Page = ({ params: { source, category } }) => {
  const [newsData, setNewsData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const unconditionalContent = isLoading ? (
    <Loading />
  ) : (
    <NotFound source={source} />
  );

  const fetchData = async () => {
    try {
      const news = await getNewsResponse(`${source}/${category}`);
      const result = news.data ? news.data.posts.map((item) => item) : [];
      setNewsData(result);
      setIsLoading(false);
    } catch (err) {
      console.log(err);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      {newsData.length > 0 ? (
        <div className="bg-color-primary">
          <HeaderNewsCard
            headerTitle={`${source} | ${category}`}
            source={source}
          />
          <NewsCard news={newsData} />
        </div>
      ) : (
        unconditionalContent
      )}
    </>
  );
};

export default Page;
