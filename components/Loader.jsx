'use client';

export default function Loader({ progress }) {
  return (
    <div className="flex flex-col items-center justify-center">
      {/* Spinning Circle with Pulsing Effect */}
      <div className="relative w-12 h-12">
        <div
          className="absolute inset-0 border-4 border-t-[var(--primary)] border-r-[var(--primary)] border-b-gray-300 border-l-gray-300 rounded-full animate-spin"
        ></div>
        <div
          className="absolute inset-0 rounded-full bg-[var(--primary)]/20 animate-pulse"
        ></div>
      </div>
      {/* Percentage Display */}
      <p className="mt-2 text-sm font-semibold text-gray-900 dark:text-[var(--secondary)]">
        Sending... {Math.round(progress)}%
      </p>
    </div>
  );
}