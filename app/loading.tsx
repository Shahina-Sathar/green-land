export default function Loading() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-surface">
      <div className="flex flex-col items-center gap-4">
        <div className="w-12 h-12 rounded-full border-4 border-brand-200 border-t-brand-700 animate-spin" />
        <p className="text-sm text-neutral-500 animate-pulse">Loading...</p>
      </div>
    </div>
  );
}
