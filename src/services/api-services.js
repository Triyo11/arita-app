export const getNewsResponse = async (resource) => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/${resource}`
  );
  const rawData = await response.json();
  return rawData;
};

export const getAllNewsLink = async () => {
  const responseGetNewsResponse = await getNewsResponse("");
  const arrayOfEndpoints = responseGetNewsResponse.endpoints
    .filter(
      (item) =>
        item.name !== "jpnn" &&
        item.name !== "tempo" &&
        item.name !== "republika" &&
        item.name !== "suara" &&
        item.name !== "tribun" &&
        item.name !== "sindonews" &&
        item.name !== "okezone"
    )
    .map((item) => item.paths)
    .flatMap((item) => item)
    .flatMap((item) => item.path);
  return arrayOfEndpoints;
};

export const getAllNewsData = async () => {
  const arrayOfEndpoints = await getAllNewsLink();
  const arrayOfNewsData = arrayOfEndpoints.map(async (item) => {
    try {
      const response = await fetch(item);
      const jsonData = await response.json();
      return jsonData.data?.posts;
    } catch (error) {
      console.error(`Error fetching data from ${item}:`, error);
      return null;
    }
  });
  return arrayOfNewsData;
};

export const getLatestNews = async (link) => {
  const response = await fetch(link);
  const jsonData = await response.json();
  return jsonData.data?.posts[0];
};
