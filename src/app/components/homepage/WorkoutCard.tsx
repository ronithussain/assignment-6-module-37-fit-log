import { IWorkout } from "@/app/types/type";
import { Clock3, Flame, Star } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

interface IWorkoutProps {
  workout: IWorkout;
}

const WorkoutCard = ({ workout }: IWorkoutProps) => {
  return (
    <Link href={`/workouts/${workout.id}`}>
      <div className="w-full overflow-hidden rounded-2xl border border-white/10 bg-[#15171d] shadow-lg">
        {/* Image */}
        <div className="h-48 w-full overflow-hidden">
          <Image
            src={workout.image}
            alt={workout.name}
            width={600}
            height={400}
            className=" object-cover"
          />
        </div>

        {/* Card Content */}
        <div className="p-6">
          {/* Muscle Groups */}
          <div className="mb-4 flex flex-wrap gap-2">
            {workout.muscleGroups.map((muscle) => (
              <span
                key={muscle}
                className="rounded-full bg-[#C2F800] px-3 py-1 text-xs font-bold uppercase text-black"
              >
                {muscle}
              </span>
            ))}
          </div>

          {/* Workout Name */}
          <h2 className="text-xl font-extrabold uppercase text-white">
            {workout.name}
          </h2>

          {/* Equipment */}
          <p className="mt-1 text-sm text-gray-400">{workout.equipment}</p>

          {/* Bottom Information */}
          <div className="mt-5 flex items-center gap-5 border-t border-white/10 pt-4 text-sm text-gray-400">
            {/* Duration */}
            <div className="flex items-center gap-1.5">
              <Clock3 size={16} />
              <span>{workout.duration} min</span>
            </div>

            {/* Calories */}
            <div className="flex items-center gap-1.5">
              <Flame size={16} />
              <span>{workout.caloriesBurned} kcal</span>
            </div>

            {/* Rating */}
            <div className="flex items-center gap-1.5">
              <Star size={16} />
              <span>{workout.rating}</span>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default WorkoutCard;
