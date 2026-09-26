import { IWorkout } from "@/app/types/type";
import Image from "next/image";
import Link from "next/link";
interface MyPlanCardProps {
    workout:IWorkout,
    onRemove:(id:number)=> void,
}

const MyPlanCard = ({ workout, onRemove }:MyPlanCardProps) => {
  return (
    <div>
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

            <p className="mt-0.5 text-sm text-gray-500">{workout.equipment}</p>

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
            <Link href={`/workouts/${workout.id}`}>
              <button
                type="button"
                className="rounded-full border border-[#39414d] px-4 py-2 text-xs text-gray-300 transition hover:border-gray-500 hover:bg-[#191e27]"
              >
                View Details
              </button>
            </Link>

            <button
              type="button"
              className="rounded-full bg-[#b7ff00] px-4 py-2 text-xs font-bold text-black transition hover:bg-[#d0ff52]"
            >
              ✓ Mark as Done
            </button>

            <button
              onClick={() => onRemove(workout.id)}
              type="button"
              className="px-2 text-xl text-gray-500 transition hover:text-white"
              // aria-label={`Remove ${workout.name}`}
            >
              ×
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyPlanCard;
