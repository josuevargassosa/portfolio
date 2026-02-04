export default function ResumeLoading() {
  return (
    <div className="animate-pulse pt-24 pb-20 px-6 lg:px-52">
      <div className="h-4 w-28 bg-muted rounded mb-2" />
      <div className="h-10 w-72 bg-muted rounded mb-12" />
      <div className="max-w-2xl space-y-8">
        {Array.from({length: 3}).map((_, i) => (
          <div key={i} className="pl-8 border-l-2 border-border">
            <div className="h-3 w-24 bg-muted rounded mb-2" />
            <div className="h-5 w-48 bg-muted rounded mb-1" />
            <div className="h-4 w-32 bg-muted rounded mb-3" />
            <div className="h-4 w-full bg-muted rounded" />
          </div>
        ))}
      </div>
    </div>
  );
}
