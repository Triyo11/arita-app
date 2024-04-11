import Image from "next/image";
import "animate.css";

const NewsCard = ({ news }) => {
  return (
    <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 items-center p-4 gap-8">
      {news.map((item, index) => {
        let pubDate = new Date(item.pubDate);
        pubDate = pubDate.toLocaleString("en-GB");
        return (
          <div
            key={item.link}
            className="w-full h-full flex flex-col items-start justify-start animate__animated animate__zoomIn"
          >
            <Image
              src={item.thumbnail}
              alt="gambar error"
              height={350}
              width={350}
              className="rounded-md w-full max-h-max"
            />
            <div className="py-4">
              <p>{pubDate}</p>
              <a
                href={item.link}
                className="lg:text-lg md:text-base text-sm font-semibold focus:text-color-accent2"
              >
                {item.title}
              </a>
            </div>
            {/* <a href={item.link} className="text-color-secondary absolute bottom-0 right-0 font-semibold hover:text-color-accent1">Baca berita</a> */}
          </div>
        );
      })}
    </div>
  );
};

export default NewsCard;
