"use client";

export default function Error({ error, reset }: { error: Error; reset: () => void }) {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen gap-4">
      <p className="text-red-400 text-lg">Něco se pokazilo, zkus to znovu. Chyba: {error.message}</p>
      <button
        onClick={reset}
        className="px-4 py-2 bg-gray-700/60 hover:bg-gray-600/60 rounded-lg cursor-pointer text-sm"
      >
        Try again
      </button>
    </div>
  );
}
