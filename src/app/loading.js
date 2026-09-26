"use client";

const LoadingSpinner = () => {
  return (
    <div className="fixed inset-0 z-50 flex min-h-screen items-center justify-center bg-[#0b0f14]">
      <div className="flex flex-col items-center gap-5">
        {/* Spinner */}
        <div className="relative h-16 w-16">
          <div className="absolute inset-0 rounded-full border-4 border-[#252c37]" />

          <div className="absolute inset-0 animate-spin rounded-full border-4 border-transparent border-t-[#ccff00] border-r-[#ccff00]" />

          <div className="absolute inset-2 flex items-center justify-center rounded-full bg-[#0b0f14]">
            <span className="text-sm font-bold text-[#ccff00]">F</span>
          </div>
        </div>

        {/* Text */}
        <div className="text-center">
          <p className="text-sm font-bold tracking-[0.25em] text-white">
            FITLOG
          </p>

          <p className="mt-1 text-xs text-gray-500">
            Loading workouts...
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoadingSpinner;