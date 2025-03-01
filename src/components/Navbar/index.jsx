import { getNewsResponse } from "@/services/api-services";
import { List } from "@phosphor-icons/react/dist/ssr";
import LocalModeSwapper from "../micro/LocalModeSwapper";
import Filter from "../micro/Filter";
import Link from "next/link";

const Navbar = async ({ children }) => {
  const resources = await getNewsResponse("");

  return (
    <div className="drawer z-30 sticky top-0">
      <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col">
        {/* <!-- Navbar --> */}
        <div className="w-full navbar flex justify-between items-center pl-2 pr-4 bg-primary">
          <div className="flex-none">
            <label
              htmlFor="my-drawer-3"
              aria-label="open sidebar"
              className="btn btn-square btn-ghost"
            >
              <List size={32} weight="bold" />
            </label>
          </div>
          <p className="font-extrabold text-primary-content text-4xl absolute left-1/2 transform -translate-x-1/2">
            Arita
          </p>
          <div className="flex gap-2">
            <Filter />
            <LocalModeSwapper />
          </div>
        </div>
        {children}
      </div>
      <div className="drawer-side">
        <label
          htmlFor="my-drawer-3"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>
        <ul className="menu md:menu-lg menu-md p-4 md:w-80 w-52 min-h-full bg-primary">
          <li>
            <a href="/" className="font-bold text-primary-content">
              Home
            </a>
          </li>
          <li>
            <details open>
              <summary className="font-bold text-primary-content">
                Channels
              </summary>
              <ul className="flex flex-col">
                {resources?.endpoints.map((item) => (
                  <li key={item.name}>
                    <a href={`/channel/${item.name}`}>
                      {item.name.charAt(0).toUpperCase() + item.name.slice(1)}
                    </a>
                  </li>
                  // <Link
                  //   key={item.name}
                  //   href={`/channel/${item.name}`}
                  //   className="text-lg py-2 pl-2 hover:bg-gray-200 rounded-md"
                  // >
                  //   {item.name.charAt(0).toUpperCase() + item.name.slice(1)}
                  // </Link>
                ))}
              </ul>
            </details>
          </li>
        </ul>
      </div>
      {/* <div className="sticky top-0 z-10 bg-color-accent1 py-2 px-4 flex md:flex-row flex-col justify-center items-center gap-4">
        <Link
          href={"/"}
          className="font-extrabold text-color-accent2 text-4xl"
        >
          Arita
        </Link>
      </div> */}
    </div>
  );
};

export default Navbar;
