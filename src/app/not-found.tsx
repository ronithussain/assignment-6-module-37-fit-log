import Link from "next/link";
import { LuMoveLeft } from "react-icons/lu";

const NotFound = () => {
  return (
    <main className="min-h-screen bg-[#0b0f14] px-6 text-white">
      <div className="mx-auto flex min-h-screen max-w-4xl items-center justify-center">
        <div className="relative w-full overflow-hidden rounded-3xl border border-[#252c37] bg-[#11151d] px-6 py-16 text-center shadow-2xl md:px-12">
          {/* Background Glow */}
          <div className="pointer-events-none absolute left-1/2 top-1/2 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#b7ff00]/10 blur-3xl" />

          <div className="relative z-10">
            <p className="mb-3 text-sm font-bold tracking-[0.4em] text-[#b7ff00]">
              FITLOG
            </p>

            <h1 className="text-8xl font-black tracking-tight text-white md:text-[150px]">
              404
            </h1>

            <h2 className="mt-2 text-2xl font-bold md:text-3xl">
              WORKOUT NOT FOUND
            </h2>

            <p className="mx-auto mt-4 max-w-md text-sm leading-6 text-gray-400 md:text-base">
              Looks like this page skipped leg day. The workout or page you are
              looking for doesnt exist.
            </p>

            <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
              <Link
                href="/"
                className="rounded-full bg-[#b7ff00] px-6 py-3 text-sm font-bold text-black transition hover:bg-[#d0ff52] hover:scale-105"
              >
                <span className="flex items-center justify-center gap-2">
                  <LuMoveLeft /> Back to Workouts
                </span>
              </Link>

              <Link
                href="/my-plan"
                className="rounded-full border border-[#39414d] px-6 py-3 text-sm font-semibold text-gray-300 transition hover:border-gray-500 hover:bg-[#191e27]"
              >
                View My Plan
              </Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default NotFound;
