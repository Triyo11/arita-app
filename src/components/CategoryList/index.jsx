"use client";

import Link from "next/link";
import "animate.css";

const Category = ({ options, source }) => {
  return (
    <div className="flex flex-wrap justify-center md:pt-0 pt-4 px-4 pb-5 gap-5">
      {options?.map((item, index) => {
        return (
          <Link
            key={index}
            href={`/catalog/${source}/${item.name}`}
            className="animate__animated animate__flipInX p-4 text-color-primary border-2 border-dashed border-color-primary rounded-lg hover:border-solid hover:border-color-accent2 hover:shadow-md hover:shadow-color-accent2 hover:bg-color-accent2 hover:text-color-secondary hover:-translate-y-2 focus:-translate-y-0 transition-all duration-300 ease-in-out"
          >
            <p className="text-center md:text-xl text-sm font-bold">
              {item.name.toUpperCase()}
            </p>
          </Link>
        );
      })}
    </div>
  );
};

export default Category;
