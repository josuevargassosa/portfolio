export default function ProjectsLoading() {
  return (
    <div className="animate-pulse pt-24 pb-20 px-6 lg:px-52">
      <div className="h-4 w-32 bg-muted rounded mb-2" />
      <div className="h-10 w-64 bg-muted rounded mb-12" />
      <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
        {Array.from({length: 6}).map((_, i) => (
          <div key={i} className="rounded-xl overflow-hidden">
            <div className="aspect-video bg-muted" />
            <div className="p-5 space-y-3">
              <div className="h-3 w-16 bg-muted rounded" />
              <div className="h-5 w-3/4 bg-muted rounded" />
              <div className="h-4 w-full bg-muted rounded" />
              <div className="flex gap-2">
                <div className="h-6 w-16 bg-muted rounded" />
                <div className="h-6 w-16 bg-muted rounded" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
