"use client";
import { WorkoutContext } from "@/app/context/WorkContext";
import Image from "next/image";
import logo from "@/app/assets/logo.png";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useContext } from "react";
import { Button, Spinner } from "@heroui/react";
import { signOut, useSession } from "@/lib/auth-client";

const Navbar = () => {
  const pathname = usePathname();
  // const { addPlan, savePlan } = useContext(WorkoutContext);

  const { data: session, isPending } = useSession();
  const router = useRouter(); // sign out korar por redirect korar jonno next/navigation er userROuter use kora holo:

  if (isPending) {
    return (
      <div className="flex flex-col items-center gap-2">
        <Spinner color="warning" />
        <span className="text-xs text-muted">Loading...</span>
      </div>
    );
  }
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
  const authLinks = (
    <>
      {session?.user ? (
        <>
          Welcome, {session.user?.name}
          <Button
            onClick={async () => {
              await signOut({
                fetchOptions: {
                  onSuccess: () => {
                    router.push("/sign-in");
                  },
                },
              });
            }}
          >
            Sing Out
          </Button>
        </>
      ) : (
        <>
          <Link href="/sign-up">
            <Button>Sign Up</Button>
          </Link>
          <Link href="/sign-in">
            <Button>Login</Button>
          </Link>
        </>
      )}
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
              <Image src={logo} alt="logo" width={20} height={50} />
              FITLOG
            </Link>
          </div>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{navlinks}</ul>
        </div>
        {/* <div className="navbar-end gap-1.5">
          <Link href="/my-plan">
            <div className="flex items-center gap-1.5 rounded-full bg-[#ccff00] px-3 py-1 text-black">
              <span>Plan</span>
              <span className="font-bold">{addPlan.length}</span>
            </div>
          </Link>

          <Link href="/my-plan">
            <div className="flex items-center gap-1 rounded-full border border-[#ccff00] px-3 py-1 text-[#ccff00]">
              <span>Saved</span>
              <span className="font-bold">{savePlan.length}</span>
            </div>
          </Link>
        </div> */}
        <div className="flex gap-2 ml-1 navbar-end">{authLinks}</div>
      </div>
    </nav>
  );
};

export default Navbar;
