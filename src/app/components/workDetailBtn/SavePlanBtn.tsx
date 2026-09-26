"use client";

import { WorkoutContext } from "@/app/context/WorkContext";
import { IWorkout } from "@/app/types/type";
import { useContext } from "react";
import { toast } from "react-toastify";

interface ISavePlanBtn {
  workout: IWorkout;
}
const SavePlanBtn = ({ workout }: ISavePlanBtn) => {
  const { savePlan, setSavePlan } = useContext(WorkoutContext);

  const handleSaveToPlan = () => {
    const alreadySaved = savePlan.find((save) => save.id === workout.id);
    if (alreadySaved) {
      toast.error("The workout plan is already saved!");
      return;
    }

    // console.log("save button is triggered");

    setSavePlan([...savePlan, workout]);
    toast.success("The plan is saved successfully!");
  };
  return (
    <div>
      <button
        onClick={() => handleSaveToPlan()}
        className="flex items-center gap-1.5 rounded-md border border-[#303945] bg-[#111720] px-3 py-2 text-[9px] text-gray-300 transition hover:bg-[#181f29]"
      >
        <span>♡</span>
        Save
      </button>
    </div>
  );
};

export default SavePlanBtn;
