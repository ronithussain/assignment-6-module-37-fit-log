import AddPlanBtn from "@/app/components/workDetailBtn/AddPlanBtn";
import SavePlanBtn from "@/app/components/workDetailBtn/SavePlanBtn";
import { IWorkout } from "@/app/types/type";
import Image from "next/image";

interface IWorkoutParams {
  params: Promise<{ workId: string }>;
}

const WorkoutDetailPage = async ({ params }: IWorkoutParams) => {
  const { workId } = await params;

  const res = await fetch(`https://api.abcz.workers.dev/api/fitlog/${workId}`);
  const workout:IWorkout = await res.json();

  console.log(Array.isArray(workout), "detail page data loaded successfully");

  return (
    <main className="min-h-screen bg-[#090d13] px-4 py-8 text-white">
      <div className="mx-auto max-w-[1050px]">
        {/* Main Card */}
        <div className="overflow-hidden rounded-xl border border-[#26303d] bg-[#0d121a]">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            {/* ================= IMAGE ================= */}
            <div className="relative min-h-[420px] bg-[#10161f] lg:min-h-[500px]">
              <Image
                src={workout.image}
                alt={workout.name}
                fill
                priority
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>

            {/* ================= DETAILS ================= */}
            <div className="p-6 lg:p-7">
              {/* Title */}
              <h1 className="text-2xl font-extrabold uppercase tracking-tight">
                {workout.name}
              </h1>

              {/* Description */}
              <p className="mt-2 text-[12px] leading-5 text-gray-400">
                {workout.description}
              </p>

              {/* Muscle Groups */}
              <div className="mt-3 flex gap-2">
                {workout.muscleGroups?.map((muscle) => (
                  <span
                    key={muscle}
                    className="rounded-full bg-[#b7ff00] px-3 py-1 text-[10px] font-bold text-black"
                  >
                    {muscle}
                  </span>
                ))}
              </div>

              {/* Information Box */}
              <div className="mt-4 overflow-hidden rounded-lg border border-[#202834] bg-[#111720]">
                <InfoRow label="EQUIPMENT" value={workout.equipment} />

                <InfoRow label="DIFFICULTY" value={workout.difficulty} />

                <InfoRow label="SETS" value={workout.sets.toString()} />

                <InfoRow label="REPS" value={workout.reps} />

                <InfoRow label="DURATION" value={`${workout.duration} min`} />

                <InfoRow
                  label="CALORIES"
                  value={`${workout.caloriesBurned} kcal`}
                />

                <InfoRow
                  label="RATING"
                  value={workout.rating.toString()}
                  last
                />
              </div>

              {/* Instructions */}
              <div className="mt-5">
                <h2 className="text-[12px] font-extrabold uppercase tracking-wide">
                  Instructions
                </h2>

                <ol className="mt-2 space-y-2">
                  {workout.instructions.map((instruction:string, index:number) => (
                    <li
                      key={instruction}
                      className="flex gap-2 text-[10px] leading-4 text-gray-400"
                    >
                      <span className="shrink-0 text-gray-500">
                        {index + 1}.
                      </span>

                      <span>{instruction}</span>
                    </li>
                  ))}
                </ol>
              </div>

              {/* Buttons */}
              <div className="mt-5 flex gap-2">
                <AddPlanBtn workout={workout}/>

                <SavePlanBtn workout={workout} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

/* ================= INFO ROW ================= */

type InfoRowProps = {
  label: string;
  value: string;
  last?: boolean;
};

const InfoRow = ({ label, value, last = false }: InfoRowProps) => {
  return (
    <div
      className={`flex items-center justify-between px-4 py-3 ${
        !last ? "border-b border-[#202834]" : ""
      }`}
    >
      <span className="text-[8px] font-bold uppercase tracking-wider text-gray-500">
        {label}
      </span>

      <span className="text-[9px] text-gray-300">{value}</span>
    </div>
  );
};

export default WorkoutDetailPage;
