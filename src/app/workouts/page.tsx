import { IWorkout } from "@/app/types/type";
import WorkoutCard from "../components/homepage/WorkoutCard";


const getWorkoutData = async (): Promise<IWorkout[]> => {
  try {
    const res = await fetch(" https://api.abcz.workers.dev/api/fitlog");
    const data = await res.json();
    return data;
  } 
  catch (error) {
    console.log("Failed to fetch workout data", error);
    return[]
  }
};
const Workout = async () => {
  const workouts = await getWorkoutData();
  //   console.log(workouts, "workout is loaded successfully");
  return (
    <div className="container mx-auto my-8 px-1 md:px-0">
      <h2 className="text-xl md:text-3xl font-bold text-center md:text-left">THE LIBRARY</h2>
      <p className="text-slate-200 mb-2 md:mb-4 text-center md:text-left">
        Twelve lifts covering every major muscle group.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        {workouts.map((workout) => (
          <WorkoutCard key={workout.id} workout={workout} />
        ))}
      </div>
    </div>
  );
};

export default Workout;
