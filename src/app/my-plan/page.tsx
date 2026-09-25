"use client";

import { useContext } from "react";
import { WorkoutContext } from "../context/WorkContext";
import Image from "next/image";

const MyPlanPage = () => {
  const { addPlan } = useContext(WorkoutContext);

  console.log(addPlan, "my plan page");

  return (
    <div className="container mx-auto my-8 px-4">

      {/* ================= EMPTY STATE ================= */}
      {addPlan.length === 0 ? (
        <div className="flex min-h-[300px] flex-col items-center justify-center rounded-2xl border border-[#252c37] bg-[#11151d] px-5 text-center">
          
          <div className="mb-4 text-5xl">
            🏋️
          </div>

          <h2 className="text-xl font-bold text-white">
            No workouts added yet
          </h2>

          <p className="mt-2 max-w-md text-sm text-gray-500">
            You havent added any workouts to todays plan.
            Go to the workout section and add some exercises.
          </p>

        </div>
      ) : (
        /* ================= WORKOUT LIST ================= */
        <div className="space-y-3">
          {addPlan.map((workout) => (
            <div
              key={workout.id}
              className="w-full rounded-2xl border border-[#252c37] bg-[#11151d] p-3 sm:p-4"
            >
              <div className="flex flex-col gap-4 sm:flex-row sm:items-center">

                {/* IMAGE */}
                <div className="relative h-44 w-full shrink-0 overflow-hidden rounded-xl sm:h-[80px] sm:w-[145px]">
                  <Image
                    src={workout.image}
                    alt={workout.name}
                    fill
                    className="object-cover"
                    sizes="(max-width: 640px) 100vw, 145px"
                  />
                </div>

                {/* WORKOUT INFO */}
                <div className="min-w-0 flex-1">

                  <h2 className="truncate text-lg font-extrabold uppercase text-white sm:text-base">
                    {workout.name}
                  </h2>

                  <p className="mt-0.5 text-sm text-gray-500">
                    {workout.equipment}
                  </p>

                  <div className="mt-3 flex flex-wrap items-center gap-x-4 gap-y-2 text-xs text-gray-300">

                    <div className="flex items-center gap-1.5">
                      <span className="text-[#b7ff00]">◷</span>
                      <span>{workout.duration} min</span>
                    </div>

                    <div className="flex items-center gap-1.5">
                      <span className="text-[#b7ff00]">♨</span>
                      <span>{workout.caloriesBurned} kcal</span>
                    </div>

                    <div className="flex items-center gap-1.5">
                      <span className="text-[#b7ff00]">☆</span>
                      <span>{workout.rating}</span>
                    </div>

                  </div>
                </div>

                {/* BUTTONS */}
                <div className="flex shrink-0 items-center gap-2 sm:ml-auto">

                  <button
                    type="button"
                    className="rounded-full border border-[#39414d] px-4 py-2 text-xs text-gray-300 transition hover:border-gray-500 hover:bg-[#191e27]"
                  >
                    View Details
                  </button>

                  <button
                    type="button"
                    className="rounded-full bg-[#b7ff00] px-4 py-2 text-xs font-bold text-black transition hover:bg-[#d0ff52]"
                  >
                    ✓ Mark as Done
                  </button>

                  <button
                    type="button"
                    className="px-2 text-xl text-gray-500 transition hover:text-white"
                    aria-label={`Remove ${workout.name}`}
                  >
                    ×
                  </button>

                </div>

              </div>
            </div>
          ))}
        </div>
      )}

    </div>
  );
};

export default MyPlanPage;