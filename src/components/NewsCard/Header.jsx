import BackButton from "../micro/BackButton";

const HeaderNewsCard = ({ headerTitle, source }) => {
  return (
    <header className="px-20 sticky top-14 z-10 bg-color-primary">
      <div className="md:px-8 md:py-2 p-4">
        <BackButton />
        <h2 className="flex justify-center font-bold md:text-3xl sm:text-2xl text-md text-color-secondary">
          {headerTitle}
        </h2>
      </div>
    </header>
  );
};

export default HeaderNewsCard;
