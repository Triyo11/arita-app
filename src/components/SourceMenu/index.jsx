import SourceMenuButton from "../micro/SourceMenuButton";

const NewsSourceList = ({ sourceName }) => {
  return (
    <div className="grid md:grid-cols-6 grid-cols-2 px-4 pb-5 gap-5">
      {sourceName?.map((item) => {
        return <SourceMenuButton key={item.name} source={item.name} />;
      })}
    </div>
  );
};

export default NewsSourceList;
