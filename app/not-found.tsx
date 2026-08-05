import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-[80vh] flex items-center justify-center px-4">
      <div className="text-center">
        <p className="text-8xl font-extrabold text-brand-200 mb-4">404</p>
        <h1 className="text-2xl font-bold text-neutral-900 mb-2">
          Page Not Found
        </h1>
        <p className="text-neutral-500 mb-8 max-w-md mx-auto">
          Sorry, the page you&apos;re looking for doesn&apos;t exist or has been
          moved.
        </p>
        <Link
          href="/"
          className="inline-flex items-center justify-center gap-2 rounded-xl bg-brand-700 text-white px-6 py-3 text-sm font-medium hover:bg-brand-800 transition-colors"
        >
          Back to Home
        </Link>
      </div>
    </div>
  );
}
