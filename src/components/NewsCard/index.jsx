import Image from "next/image";
import "animate.css";
import Link from "next/link";

const NewsCard = ({ news }) => {
  return (
    <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 items-center p-4 gap-8">
      {news.map((item) => {
        let pubDate = new Date(item?.pubDate);
        pubDate = pubDate.toLocaleString("en-GB");
        return (
          <div
            key={item?.link}
            className="w-full h-full flex flex-col items-start justify-start animate__animated animate__zoomIn"
          >
            <Image
              src={item?.thumbnail}
              alt="gambar error"
              height={350}
              width={350}
              className="rounded-md w-full max-h-max"
            />
            <div className="py-4">
              <p>{pubDate}</p>
              <Link
                target="_blank"
                href={item?.link}
                className="lg:text-lg md:text-base text-sm font-semibold hover:text-primary-content transition-all duration-300 ease-in-out"
              >
                {item?.title}
              </Link>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default NewsCard;
