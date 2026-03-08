'use client';
interface ErrorMessageProps {
  message: string;
  onRetry?: () => void;
}

export default function ErrorMessage({ message, onRetry }: ErrorMessageProps) {
  return (
    <div
      role="alert"
      aria-live="polite"
      className="w-full max-w-lg rounded-2xl border border-red-200 
                 bg-red-50 p-6 text-center shadow-sm"
    >
      {/* ─── Icon ─── */}
      <div className="text-4xl">⚠️</div>

      {/* ─── Message ─── */}
      <p className="mt-3 text-red-700 font-medium">{message}</p>

      {/* ─── Retry Button (optional) ─── */}
      {onRetry && (
        <button
          onClick={onRetry}
          type="button"
          className="mt-4 rounded-xl bg-red-600 px-6 py-2 text-sm 
                     font-semibold text-white hover:bg-red-700 
                     transition-all"
        >
          Try Again
        </button>
      )}
    </div>
  );
}