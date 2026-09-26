"use client";

import { useContext, useState } from "react";
import { WorkoutContext } from "../context/WorkContext";
import Link from "next/link";
import MyPlanCard from "../components/share/MyPlanCard";
import { IWorkout } from "../types/type";

const MyPlanPage = () => {
  const [sortBy, setSortBy] = useState<'rating' | 'duration' | 'calories'>('duration')
  const [activeTab, setActiveTab] = useState<"plan" | "save">("plan");
  const { addPlan, setAddPlan, savePlan, setSavePlan } =
    useContext(WorkoutContext);

  // console.log(addPlan, "my plan page");
  console.log(savePlan, "my save plan page");

  const handleRemovePlan = (id: number) => {
    const remainingPlan = addPlan.filter((workout) => workout.id !== id);
    setAddPlan(remainingPlan);
  };
  const handleRemoveSavePlan = (id: number) => {
    const remainingSavePlan = savePlan.filter((save) => save.id !== id);
    setSavePlan(remainingSavePlan);
  };

  const currentPlan = activeTab === "plan" ? addPlan : savePlan;
  const totalExercise = currentPlan.length;

  const totalMinutes = currentPlan.reduce(
    (total, workout) => total + workout.duration,
    0,
  );
  const totalCalories = currentPlan.reduce(
    (total, workout) => total + workout.caloriesBurned,
    0,
  );

  const sortedWorkoutAndSavePlan = (workoutAndSavePlan:IWorkout[]) =>{
    const sortedWorkAndSave = [...workoutAndSavePlan]
    if(sortBy === 'rating'){
      sortedWorkAndSave.sort((a,b) => b.rating - a.rating)
    }else if(sortBy === 'duration'){
      sortedWorkAndSave.sort((a, b) => b.duration - a.duration)
    }else if(sortBy === 'calories'){
      sortedWorkAndSave.sort((a, b) => b.caloriesBurned - a.caloriesBurned)
    }
    return sortedWorkAndSave
  }

  const sortedWorkout = sortedWorkoutAndSavePlan(addPlan);
  const sortedSavePlan = sortedWorkoutAndSavePlan(savePlan);
  // console.log(sortedWorkout, 'and', sortedSavePlan, 'sorted data is...');
  return (
    <div className="container mx-auto my-8 px-4">
      <h2 className="text-xl md:text-3xl font-bold text-center md:text-left">
        MY PLAN
      </h2>
      <p className="text-slate-200 mb-2 md:mb-4 text-center md:text-left">
        Cap of five lifts for today. Finish them, then load more.
      </p>

      {/* ___MY PLAN STATE____ */}
      <div className="grid grid-cols-3 px-5 py-6 md:py-8 bg-slate-800 backdrop-blur-2xl rounded-xl">
        <div className="flex flex-col justify-center items-center">
          <h4>Exercise</h4>
          <p>{totalExercise}</p>
        </div>
        <div className="flex flex-col justify-center items-center">
          <h4>Minutes</h4>
          <p>{totalMinutes}</p>
        </div>
        <div className="flex flex-col justify-center items-center">
          <h4>Calories</h4>
          <p>{totalCalories}</p>
        </div>
      </div>

      {/*==========Tabs and Sort Button=============== */}
      <div className=" relative my-8 gap-4">
        {/* tabs button*/}
        <div className="tabs tabs-lift w-full">
          <input
            type="radio"
            name="my_tabs_3"
            className="tab"
            aria-label="Todays Plan"
            checked={activeTab === "plan"}
            onChange={() => setActiveTab("plan")}
          />
          {/* tab-1 */}
          <div className="tab-content bg-base-100 border-base-300 p-6">
            {/* ================= EMPTY STATE ================= */}
            {addPlan.length === 0 ? (
              <div className="flex min-h-[300px] flex-col items-center justify-center rounded-2xl border border-[#252c37] bg-[#11151d] px-5 text-center">
                <div className="mb-4 text-5xl">🏋️</div>

                <h2 className="text-xl font-bold text-white">
                  No workouts added yet
                </h2>

                <p className="mt-2 max-w-md text-sm text-gray-500">
                  You havent added any workouts to todays plan. Go to the
                  workout section and add some exercises.
                </p>
                <Link href="/">
                  <button className="btn mt-2 rounded-3xl bg-[#C2F800] text-black font-semibold hover:text-white hover:bg-black transition-all duration-300 hover:scale-105">
                    Go to workouts
                  </button>
                </Link>
              </div>
            ) : (
              /* ================= WORKOUT LIST ================= */
              <div className="space-y-3">
                {sortedWorkout.map((workout) => (
                  <MyPlanCard
                    key={workout.id}
                    workout={workout}
                    onRemove={handleRemovePlan}
                  />
                ))}
              </div>
            )}
          </div>

          <input
            type="radio"
            name="my_tabs_3"
            className="tab"
            aria-label="Saved"
            checked={activeTab === "save"}
            onChange={() => setActiveTab("save")}
          />
          {/* tab-2 */}
          <div className="tab-content bg-base-100 border-base-300 p-6">
            {savePlan.length > 0 ? (
              sortedSavePlan.map((save) => (
                <MyPlanCard
                  key={save.id}
                  workout={save}
                  onRemove={handleRemoveSavePlan}
                />
              ))
            ) : (
              <div className="flex min-h-[300px] flex-col items-center justify-center rounded-2xl border border-[#252c37] bg-[#11151d] px-5 text-center">
                <div className="mb-4 text-5xl">🏋️</div>

                <h2 className="text-xl font-bold text-white">
                  No save plan added yet
                </h2>

                <p className="mt-2 max-w-md text-sm text-gray-500">
                  You havent added any workouts to todays plan. Go to the
                  workout section and add some exercises.
                </p>
                <Link href="/">
                  <button className="btn mt-2 rounded-3xl bg-[#C2F800] text-black font-semibold hover:text-white hover:bg-black transition-all duration-300 hover:scale-105">
                    Go to workouts
                  </button>
                </Link>
              </div>
            )}
          </div>
        </div>
        {/* sorting button */}

        <select
          // defaultValue="Pick a Framework"
          value={sortBy}
          onChange={(e)=> setSortBy(e.target.value as 'rating' | 'duration' | 'calories')}
          className="absolute right-0 w-30 md:w-50 top-0 select select-info bg-slate-800 backdrop-blur-2xl border-none outline-0"
        >
          <option disabled={true}>Sort</option>
          <option value={'duration'}>Duration</option>
          <option value={'calories'}>Calories</option>
          <option value={'rating'}>Rating</option>
        </select>
      </div>
    </div>
  );
};

export default MyPlanPage;
