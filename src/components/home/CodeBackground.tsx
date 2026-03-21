'use client';

export function CodeBackground() {
  return (
    <div
      className="fixed inset-0 z-0 overflow-hidden pointer-events-none select-none"
      aria-hidden="true"
    >
      {/* Gradient orbs */}
      <div className="absolute -top-[40%] -left-[20%] w-[60%] h-[60%] rounded-full bg-purple-500/[0.04] dark:bg-purple-500/[0.07] blur-[120px] animate-mesh-1" />
      <div className="absolute -top-[20%] -right-[20%] w-[50%] h-[50%] rounded-full bg-blue-500/[0.04] dark:bg-blue-500/[0.07] blur-[120px] animate-mesh-2" />
      <div className="absolute top-[40%] -left-[10%] w-[40%] h-[40%] rounded-full bg-cyan-500/[0.03] dark:bg-cyan-500/[0.05] blur-[100px] animate-mesh-3" />
      <div className="absolute bottom-[10%] right-[10%] w-[35%] h-[35%] rounded-full bg-indigo-500/[0.03] dark:bg-indigo-500/[0.06] blur-[100px] animate-mesh-4" />
    </div>
  );
}
