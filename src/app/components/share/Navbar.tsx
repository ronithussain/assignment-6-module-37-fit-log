"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const pathname = usePathname();
  const navlinks = (
    <>
      <li>
        <Link
          href={"/workouts"}
          className={
            pathname === "/workouts"
              ? "bg-[#8b8b70a6] text-[#C2F800] rounded-2xl"
              : "text-white"
          }
        >
          Workout
        </Link>
      </li>

      <li>
        <Link
          href={"/my-plan"}
          className={
            pathname === "/my-plan"
              ? "bg-[#8b8b70a6] text-[#C2F800] rounded-2xl"
              : "text-white"
          }
        >
          My-Plan
        </Link>
      </li>
    </>
  );

  return (
    <nav className="bg-base-100  shadow-sm sticky top-0 z-100">
      <div className="container mx-auto navbar ">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                aria-label="Menu"
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex={-1}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              {navlinks}
            </ul>
          </div>
          <div className="flex gap-2 items-center">
            {/* <Image src={logo} alt="web page logo" /> */}
            <Link href={"/"} className="btn btn-ghost text-xl">
              <Image
                src="/logo.png"
                alt="Fit Log Logo"
                width={20}
                height={50}
              />
              FITLOG
            </Link>
          </div>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{navlinks}</ul>
        </div>
        <div className="navbar-end gap-1.5">
          <div className="flex items-center gap-1.5 rounded-full bg-[#ccff00] px-3 py-1 text-black">
            <span>Plan</span>
            <span className="font-bold">0</span>
          </div>

          <div className="flex items-center gap-1 rounded-full border border-[#ccff00] px-3 py-1 text-[#ccff00]">
            <span>Saved</span>
            <span className="font-bold">0</span>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
