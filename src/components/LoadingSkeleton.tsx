
export default function LoadingSkeleton() {
  return (
    <div
      className="w-full max-w-lg rounded-2xl bg-white p-6 shadow-xl"
      role="status"                        //  Screen reader support
      aria-label="Loading weather data..."
    >
      {/* ─── City & Icon Row ─── */}
      <div className="flex items-start justify-between">
        <div className="space-y-2">
          <div className="h-8 w-40 animate-pulse rounded-lg bg-gray-200" />
          <div className="h-4 w-16 animate-pulse rounded-lg bg-gray-200" />
        </div>
        <div className="h-16 w-16 animate-pulse rounded-full bg-gray-200" />
      </div>

      {/* ─── Temperature ─── */}
      <div className="mt-4 space-y-2">
        <div className="h-16 w-32 animate-pulse rounded-lg bg-gray-200" />
        <div className="h-5 w-24 animate-pulse rounded-lg bg-gray-200" />
      </div>

      {/* ─── Stats Row ─── */}
      <div className="mt-6 flex gap-8 border-t border-gray-100 pt-4">
        <div className="space-y-2">
          <div className="h-3 w-16 animate-pulse rounded bg-gray-200" />
          <div className="h-7 w-12 animate-pulse rounded bg-gray-200" />
        </div>
        <div className="space-y-2">
          <div className="h-3 w-20 animate-pulse rounded bg-gray-200" />
          <div className="h-7 w-16 animate-pulse rounded bg-gray-200" />
        </div>
        <div className="space-y-2">
          <div className="h-3 w-16 animate-pulse rounded bg-gray-200" />
          <div className="h-7 w-14 animate-pulse rounded bg-gray-200" />
        </div>
      </div>
    </div>
  );
}