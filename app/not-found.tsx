import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex min-h-[80vh] items-center justify-center px-4 pt-[var(--header-h)]">
      <div className="text-center">
        <p className="font-display text-8xl font-semibold text-brand-200">404</p>
        <h1 className="mt-4 font-display text-2xl font-semibold">Page not found</h1>
        <p className="mx-auto mt-2 max-w-md text-slate-600">
          Sorry, that page does not exist or has moved.
        </p>
        <Link href="/" className="btn-primary mt-8">
          Back to home
        </Link>
      </div>
    </div>
  );
}
