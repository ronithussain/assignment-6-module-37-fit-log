"use client";
import { createContext, ReactNode, useState } from "react";
import { IWorkout } from "../types/type";

interface IWorkContext {
  addPlan: IWorkout[];
  setAddPlan: React.Dispatch<React.SetStateAction<IWorkout[]>>;
  savePlan: IWorkout[];
  setSavePlan: React.Dispatch<React.SetStateAction<IWorkout[]>>;
}
export const WorkoutContext = createContext<IWorkContext>({
  addPlan: [],
  setAddPlan: () => {},
  savePlan: [],
  setSavePlan: () => {},
});

const WorkProvider = ({ children }: { children: ReactNode }) => {
  const [addPlan, setAddPlan] = useState<IWorkout[]>([]);
  const [savePlan, setSavePlan] = useState<IWorkout[]>([]);

  const shareData = {
    addPlan,
    setAddPlan,
    savePlan,
    setSavePlan,
  };
  return (
    <WorkoutContext.Provider value={shareData}>
      {children}
    </WorkoutContext.Provider>
  );
};

export default WorkProvider;
