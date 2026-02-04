export default function ContactLoading() {
  return (
    <div className="animate-pulse pt-24 pb-20 px-6 lg:px-52">
      <div className="h-4 w-24 bg-muted rounded mb-2" />
      <div className="h-10 w-40 bg-muted rounded mb-12" />
      <div className="grid lg:grid-cols-2 gap-12">
        <div className="space-y-5">
          {Array.from({length: 3}).map((_, i) => (
            <div key={i}>
              <div className="h-4 w-20 bg-muted rounded mb-1.5" />
              <div className="h-10 w-full bg-muted rounded-lg" />
            </div>
          ))}
          <div className="h-10 w-40 bg-muted rounded-lg" />
        </div>
        <div className="space-y-4">
          {Array.from({length: 3}).map((_, i) => (
            <div key={i} className="flex gap-3">
              <div className="w-9 h-9 bg-muted rounded-lg shrink-0" />
              <div className="space-y-1">
                <div className="h-4 w-24 bg-muted rounded" />
                <div className="h-3 w-40 bg-muted rounded" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
