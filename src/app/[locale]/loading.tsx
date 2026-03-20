import Image from 'next/image';

export default function HomeLoading() {
  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-background">
      <div className="flex flex-col items-center gap-6 animate-fade-in">
        <div className="relative w-16 h-16 animate-logo-pulse">
          <Image
            src="/images/skills/josueLogo.png"
            alt="Loading"
            fill
            sizes="64px"
            className="object-contain dark:invert"
            priority
          />
        </div>
        <div className="w-12 h-0.5 rounded-full bg-foreground/10 overflow-hidden">
          <div className="h-full w-full bg-foreground/40 rounded-full animate-loading-bar" />
        </div>
      </div>
    </div>
  );
}
