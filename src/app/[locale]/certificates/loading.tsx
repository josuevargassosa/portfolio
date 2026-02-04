export default function CertificatesLoading() {
  return (
    <div className="animate-pulse pt-24 pb-20 px-6 lg:px-52">
      <div className="h-4 w-28 bg-muted rounded mb-2" />
      <div className="h-10 w-64 bg-muted rounded mb-12" />
      <div className="grid md:grid-cols-2 gap-4">
        {Array.from({length: 4}).map((_, i) => (
          <div key={i} className="flex items-start gap-4 bg-secondary rounded-xl p-5">
            <div className="w-10 h-10 bg-muted rounded-lg shrink-0" />
            <div className="space-y-2 flex-1">
              <div className="h-4 w-3/4 bg-muted rounded" />
              <div className="h-3 w-1/2 bg-muted rounded" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
