export default function HomeLoading() {
  return (
    <div className="min-h-screen animate-pulse">
      {/* Header skeleton */}
      <div className="fixed top-0 w-full z-50 bg-background/80 border-b border-border px-6 lg:px-52 py-4">
        <div className="flex items-center justify-between">
          <div className="h-7 w-36 bg-muted rounded" />
          <div className="hidden lg:flex gap-6">
            {Array.from({length: 6}).map((_, i) => (
              <div key={i} className="h-4 w-16 bg-muted rounded" />
            ))}
          </div>
        </div>
      </div>

      {/* Hero skeleton */}
      <div className="pt-32 px-6 lg:px-52">
        <div className="h-16 w-3/4 bg-muted rounded mb-6" />
        <div className="h-6 w-1/2 bg-muted rounded" />
      </div>

      {/* Skills skeleton */}
      <div className="mt-32 px-6 lg:px-52">
        <div className="h-4 w-40 bg-muted rounded mb-2" />
        <div className="h-10 w-56 bg-muted rounded mb-12" />
        <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6">
          {Array.from({length: 8}).map((_, i) => (
            <div key={i} className="h-20 bg-muted rounded-xl" />
          ))}
        </div>
      </div>
    </div>
  );
}
