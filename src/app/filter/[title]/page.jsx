"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";
import Loading from "@/app/loading";
import NewsCard from "@/components/NewsCard";

const Page = ({ params: { title } }) => {
  const [filteredNews, setFilteredNews] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const unconditionalContent = isLoading ? (
    <Loading />
  ) : (
    <h2>Not found</h2>
  );

  useEffect(() => {
    const fetchFilteredNews = async () => {
      const { data, error } = await supabase
        .from("arita-news-data")
        .select("*")
        .ilike("title", `%${title}%`)
        .order("pub_date", { ascending: false });
      if (error) {
        console.log(error);
        setIsLoading(false);
        return;
      }
      console.log(data);
      setFilteredNews(data);
      setIsLoading(false);
    };
    fetchFilteredNews();
  }, [title]);

  return (
    <>
      {/* {filteredNews.length > 0 ? (
        <div>
          <h2>Filter result for: <span>{title}</span></h2>
        </div>
      ) : (
        unconditionalContent
      )} */}
      <h2>
        Filter result for: <span>{title}</span>
      </h2>
      {filteredNews.length > 0 ? (
        <NewsCard news={filteredNews} />
      ) : (
        unconditionalContent
      )}
    </>
  );
};

export default Page;
