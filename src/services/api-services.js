export const getNewsResponse = async (resource) => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/${resource}`
  );
  const rawData = await response.json();
  console.log(rawData);
  return rawData;
};

export const getLatestNews = async (link) => {
  const response = await fetch(link);
  const jsonData = await response.json();
  return jsonData.data?.posts[0];
  // const currentNews = jsonData.data?.posts[0];
  // const choosenNews = currentNews.map(
  //   (item) =>
  //     item.name === "cnbc" ||
  //     item.name === "cnn" ||
  //     item.name === "antara" ||
  //     item.name === "cnbc" ||
  //     item.name === "merdeka"
  // );
  // return choosenNews;
};
