"use client";

import { WorkoutContext } from "@/app/context/WorkContext";
import { IWorkout } from "@/app/types/type";
import { useContext } from "react";
import { FaCheck } from "react-icons/fa";
import { toast } from "react-toastify";

interface IAddPlanBtnProps {
  workout: IWorkout;
}

const AddPlanBtn = ({ workout }: IAddPlanBtnProps) => {
  const { addPlan, setAddPlan } = useContext(WorkoutContext);

  const handleAddToPlan = () => {
    const AlreadyAdded = addPlan.find((item) => item.id === workout.id);

    if (AlreadyAdded) {
      toast.error("This plan is already added, don't try again");
      return;
    }
    if (addPlan.length >= 5) {
      toast.error(`Today's plan is full!`);
      return;
    }

    // console.log("plan btn is triggered");

    setAddPlan([...addPlan, workout]);
    toast.success("Workout added to today's plan!");
  };
  return (
    <div>
      <button
        disabled={addPlan.length >= 5}
        onClick={() => handleAddToPlan()}
        className={`flex items-center gap-1.5 rounded-md px-3 py-2 text-[9px] font-bold transition ${
          addPlan.length >= 5
            ? "cursor-not-allowed bg-gray-600 text-gray-400"
            : "bg-[#b7ff00] text-black hover:bg-[#d0ff52]"
        }`}
      >
        <span>
          <FaCheck />
        </span>
        Add to todays plan
      </button>
    </div>
  );
};

export default AddPlanBtn;
