import Link from "next/link";

const Navbar = () => {
  return (
    <>
      <div className="sticky top-0 z-10 bg-color-accent1 py-2 px-4 flex md:flex-row flex-col justify-center items-center gap-4">
        <Link
          href={"/"}
          className="font-extrabold text-color-accent2 text-4xl"
        >
          Arita
        </Link>
      </div>
    </>
  );
};

export default Navbar;
