import Carousel from "@/components/Carousel";
import { getNewsResponse } from "@/services/api-services";
import "animate.css";

import "@/app/globals.css";

const Page = async () => {
  const arrChoosenNews = ["antara", "cnn", "cnbc", "tempo", "jpnn"];
  const resources = await getNewsResponse("");
  const choosenNews = resources.endpoints.filter((item) =>
    arrChoosenNews.includes(item.name)
  );

  return (
    <div>
      <section>
        <div className="bg-color-secondary min-h-[calc(100vh-56px)]">
          <Carousel latestNews={choosenNews} />
          {/* <h2 className="pl-4 py-8 font-semibold text-center md:text-3xl text-2xl text-color-primary animate__animated animate__fadeInDown">
            Channel Berita
          </h2>
          <NewsSourceList sourceName={resources.endpoints} /> */}
        </div>
      </section>
    </div>
  );
};

export default Page;
