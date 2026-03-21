'use client';

export function CodeBackground() {
  return (
    <div
      className="fixed inset-0 z-0 overflow-hidden pointer-events-none select-none"
      aria-hidden="true"
    >
      {/* Gradient orbs */}
      <div className="absolute -top-[30%] -left-[10%] w-[60%] h-[60%] rounded-full bg-purple-500/15 dark:bg-purple-500/20 blur-[120px] animate-mesh-1" />
      <div className="absolute -top-[10%] -right-[10%] w-[50%] h-[50%] rounded-full bg-blue-500/10 dark:bg-blue-500/15 blur-[120px] animate-mesh-2" />
      <div className="absolute top-[50%] -left-[5%] w-[40%] h-[40%] rounded-full bg-cyan-500/10 dark:bg-cyan-500/12 blur-[100px] animate-mesh-3" />
      <div className="absolute bottom-[5%] right-[5%] w-[35%] h-[35%] rounded-full bg-indigo-500/10 dark:bg-indigo-500/15 blur-[100px] animate-mesh-4" />
    </div>
  );
}
