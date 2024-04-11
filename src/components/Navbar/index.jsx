import { List, Sun, Moon } from "@phosphor-icons/react/dist/ssr";
import { getNewsResponse } from "@/services/api-services";
import "animate.css";

const Navbar = async ({ children }) => {
  const resources = await getNewsResponse("");

  return (
    <div className="drawer z-30 sticky top-0">
      <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col">
        {/* <!-- Navbar --> */}
        <div className="w-full navbar flex justify-between pl-2 pr-4 bg-color-accent1">
          <div className="flex-none">
            <label
              htmlFor="my-drawer-3"
              aria-label="open sidebar"
              className="btn btn-square btn-ghost"
            >
              <List size={32} weight="bold" />
            </label>
          </div>
          <p className="font-extrabold text-color-accent2 text-4xl">Arita</p>
          <label className="swap swap-rotate">
            <input type="checkbox" />
            <Sun
              size={32}
              weight="fill"
              className="swap-on fill-current w-7 h-7"
            />
            <Moon
              size={32}
              weight="fill"
              className="swap-off fill-current w-7 h-7"
            />
          </label>
        </div>
        {children}
      </div>
      <div className="drawer-side">
        <label
          htmlFor="my-drawer-3"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>
        <ul className="menu md:menu-lg menu-md p-4 md:w-80 w-52 min-h-full bg-color-accent1">
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <details open>
              <summary>Channels</summary>
              <ul className="flex flex-col">
                {resources?.endpoints.map((item) => (
                  <li key={item.name}>
                    <a href={`/channel/${item.name}`}>
                      {item.name.charAt(0).toUpperCase() + item.name.slice(1)}
                    </a>
                  </li>
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
