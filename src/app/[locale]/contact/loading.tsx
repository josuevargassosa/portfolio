export default function ContactLoading() {
  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-background">
      <div className="flex flex-col items-center gap-6 animate-fade-in">
        <div className="relative w-16 h-16 animate-logo-pulse">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/skills/josueLogo.png"
            alt="Loading"
            width={64}
            height={64}
            className="w-full h-full object-contain dark:invert"
          />
        </div>
        <div className="w-12 h-0.5 rounded-full bg-foreground/10 overflow-hidden">
          <div className="h-full w-full bg-foreground/40 rounded-full animate-loading-bar" />
        </div>
      </div>
    </div>
  );
}
