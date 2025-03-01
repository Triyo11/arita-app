const ContentHeader = ({ title }) => {
  return (
    <header className="px-20 sticky top-14 z-10 bg-secondary">
      <div className="md:px-8 md:py-2 p-4">
        <h2 className="flex justify-center font-bold md:text-3xl sm:text-2xl text-md text-color-secondary">
          {title}
        </h2>
      </div>
    </header>
  )
}

export default ContentHeader;
