'use client';

import { useEffect, useRef } from 'react';

export function CodeBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouseRef = useRef({ x: -1000, y: -1000 });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const gap = 40;
    const dotRadius = 1;
    const interactionRadius = 150;
    let rafId: number;

    function resize() {
      if (!canvas) return;
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    }

    function draw() {
      if (!canvas || !ctx) return;

      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const isDark = document.documentElement.classList.contains('dark');
      const mx = mouseRef.current.x;
      const my = mouseRef.current.y;

      for (let x = gap; x < canvas.width; x += gap) {
        for (let y = gap; y < canvas.height; y += gap) {
          const dx = mx - x;
          const dy = my - y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          let opacity = isDark ? 0.08 : 0.06;
          let radius = dotRadius;
          let color = isDark ? '255,255,255' : '0,0,0';

          if (dist < interactionRadius) {
            const proximity = 1 - dist / interactionRadius;
            opacity = isDark ? 0.08 + proximity * 0.5 : 0.06 + proximity * 0.35;
            radius = dotRadius + proximity * 2.5;
            // Add purple tint near cursor
            const purple = Math.round(proximity * 180);
            color = isDark
              ? `${130 + purple},${100 + Math.round(proximity * 80)},255`
              : `${80 + purple},${60 + Math.round(proximity * 60)},220`;
          }

          ctx.beginPath();
          ctx.arc(x, y, radius, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(${color},${opacity})`;
          ctx.fill();
        }
      }

      rafId = requestAnimationFrame(draw);
    }

    function onMouseMove(e: MouseEvent) {
      mouseRef.current = { x: e.clientX, y: e.clientY };
    }

    function onMouseLeave() {
      mouseRef.current = { x: -1000, y: -1000 };
    }

    resize();
    draw();

    window.addEventListener('resize', resize);
    window.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseleave', onMouseLeave);

    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener('resize', resize);
      window.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseleave', onMouseLeave);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 z-0 pointer-events-none"
      aria-hidden="true"
    />
  );
}
