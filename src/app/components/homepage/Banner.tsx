import Image from "next/image";
import bannerImg from "@/app/assets/banner.png";

const Banner = () => {
  return (
    <section className="container mx-auto px-1 py-8 md:py-12">
      <div className="relative overflow-hidden rounded-2xl bg-[#15171D] shadow-lg">
        <div className="grid grid-cols-1 items-center gap-8 px-6 py-10 sm:px-10 md:grid-cols-2 md:px-12 lg:px-16 lg:py-14">
          {/* Content */}
          <div className="order-2 space-y-5 text-center md:order-1 md:text-left">
            <span className="inline-block rounded-full bg-secondary/10 px-4 py-1.5 text-sm font-semibold text-primary">
              WORKOUT LIBRARY
            </span>

            <h1 className="text-3xl font-extrabold leading-tight text-white sm:text-4xl lg:text-5xl">
              TRAIN WITH INTENT. LOG EVERY SET.
            </h1>

            <p className="mx-auto max-w-lg text-sm leading-6 text-slate-200 sm:text-base md:mx-0">
              FitLog is a dark, no-nonsense gym companion: pick a lift, lock it
              into todays plan, and watch the weeks work add up.
            </p>

            <div className="flex flex-col justify-center gap-3 sm:flex-row md:justify-start">
              <button className="btn text-black font-semibold bg-primary rounded-xl px-7 shadow-md transition-all duration-300 hover:scale-105 hover:shadow-lg">
                Brouse Workouts
              </button>
            </div>
          </div>

          {/* Image */}
          <div className="order-1 flex justify-center md:order-2">
            <div className=" w-full max-w-md">
              {/* <div className="absolute -inset-4 rounded-3xl blur-2xl" /> */}

              <div className="overflow-hidden rounded-2xl">
                <Image
                  src={bannerImg}
                  alt="banner image"
                  className="h-auto w-full object-cover transition-transform duration-500 hover:scale-105"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
