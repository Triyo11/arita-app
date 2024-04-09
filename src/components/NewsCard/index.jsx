import Image from "next/image";
import "animate.css";

const NewsCard = ({ news }) => {
  return (
    <div className="flex flex-wrap justify-evenly p-4 gap-8">
      {news.map((item, index) => {
        let pubDate = new Date(item.pubDate);
        pubDate = pubDate.toLocaleString("en-GB");
        return (
          <div
            key={item.link}
            className="md:w-80 w-40 relative animate__animated animate__zoomIn"
          >
            <Image
              src={item.thumbnail}
              alt="gambar error"
              width={350}
              height={350}
              className="rounded-md"
            />
            <div className="flex flex-col justify-start items-start py-4">
              <p>{pubDate}</p>
              <a
                href={item.link}
                className="text-lg font-semibold focus:text-color-accent2"
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
