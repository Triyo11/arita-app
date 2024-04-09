"use client";

import BackButton from "../micro/BackButton";

const HeaderCategoryList = ({ name }) => {
  return (
    <div className="md:py-8 py-4 md:px-32 px-6">
      <BackButton />
      <div className="text-center font-semibold md:text-3xl text-lg flex md:flex-row md:gap-2` flex-col justify-center text-color-primary">
        <div>Kategori Berita</div>
        <div>"{name.toUpperCase()}"</div>
      </div>
    </div>
  );
};

export default HeaderCategoryList;
