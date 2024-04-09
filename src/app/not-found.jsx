import { FileSearch } from "@phosphor-icons/react/dist/ssr";
import Link from "next/link";

const NotFound = ({ source }) => {
  return (
    <div className="flex justify-center items-center min-h-[85vh]">
      <div className="flex flex-col justify-center items-center gap-2">
        <FileSearch
          size={72}
          className="bg-color-secondary text-color-primary p-2 rounded-xl"
        />
        <h2 className="font-bold text-2xl text-color-secondary">NOT FOUND</h2>
        <div className="flex justify-center gap-4">
          {/* <Link
            href={"/"}
            className="text-xl text-color-primary border rounded-md bg-color-dark hover:text-color-accent transition-all p-2"
          >
            beranda
          </Link> */}
          {source ? (
            <Link
            href={`/channel/${source}`}
            className="text-xl text-color-primary border rounded-md bg-color-dark hover:text-color-accent transition-all p-2"
          >
            kembali ke {source}
          </Link>
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default NotFound;
