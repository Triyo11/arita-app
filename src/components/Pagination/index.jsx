const Pagination = ({ items, currentPage, pageSize, setCurrentPage }) => {
  const pagesCount = Math.ceil(items / pageSize);
  const pages = Array.from({ length: pagesCount }, (_, i) => i + 1);

  return (
    <div className="flex justify-center items-center md:pl-0 pl-4 pt-8 pb-4">
      <h2 className="font-bold text-lg">Page: </h2>
      <ul className="flex md:justify-center justify-start items-center gap-4 p-4 list-none overflow-x-auto">
        {pages.map((page, index) => {
          return (
            <li key={index} className={
              page === currentPage ? 
                "flex justify-center items-center md:p-3 p-2 md:h-10 h-8 rounded-full cursor-pointer bg-color-secondary text-color-accent2 font-bold"
                :
                "flex justify-center items-center md:p-3 p-2 md:h-10 h-8 rounded cursor-pointer border border-dashed border-color-secondary text-color-secondary"
            }>
              <a className="cursor-pointer md:text-lg text-md p-2" onClick={() => {
                scrollTo({
                  behavior: "smooth",
                  top: 0
                })
                setCurrentPage(page)
              }}>
                {page}
              </a>
            </li>
          )
        })}
      </ul>
    </div>
  );
};

export default Pagination;
