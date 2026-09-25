'use client';

import { WorkoutContext } from "@/app/context/WorkContext";
import { IWorkout } from "@/app/types/type";
import { useContext } from "react";
import { toast } from "react-toastify";

interface IAddPlanBtnProps {
    workout:IWorkout
}

const AddPlanBtn = ({workout}:IAddPlanBtnProps) => {
    const {addPlan, setAddPlan} = useContext(WorkoutContext);
    
    const handleAddToPlan = ()=> {
        const AlreadyAdded = addPlan.find(item => item.id === workout.id )

        if(AlreadyAdded){
            toast.error("This plan is already added, don't try again")
            return
        }

        console.log('plan btn is triggered');
        
        setAddPlan([...addPlan, workout])
        toast.success("today's plan added successfully!")
    }
  return (
    <div>
      <button 
      onClick={()=> handleAddToPlan()}
      className="flex items-center gap-1.5 rounded-md bg-[#b7ff00] px-3 py-2 text-[9px] font-bold text-black transition hover:bg-[#d0ff52]">
        <span>▣</span>
        Add to todays plan
      </button>
    </div>
  );
};

export default AddPlanBtn;
