import Category from "@/components/CategoryList";
import HeaderCategoryList from "@/components/CategoryList/Header";
import { getNewsResponse } from "@/services/api-services";

const Page = async ({ params: { name } }) => {
  const rawData = await getNewsResponse("");
  let category = rawData.endpoints
    .filter((item) => item.name === name)
    .map((item) => item.paths)[0];

  return (
    <>
      <div className="px-12 bg-color-secondary h-[calc(100vh-56px)]">
        <HeaderCategoryList name={name} />
        <Category options={category} source={name} />
      </div>
    </>
  );
};

export default Page;
