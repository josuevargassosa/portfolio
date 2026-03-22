'use client';

import { useEffect, useRef } from 'react';

interface Dot {
  baseX: number;
  baseY: number;
  x: number;
  y: number;
  offsetX: number;
  offsetY: number;
  speed: number;
  phase: number;
  radius: number;
  glow: number;
}

export function CodeBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouseRef = useRef({ x: -1000, y: -1000 });
  const dotsRef = useRef<Dot[]>([]);
  const rafRef = useRef<number>(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const gap = 45;
    const interactionRadius = 160;

    function createDots() {
      if (!canvas) return;
      const dots: Dot[] = [];
      for (let x = gap / 2; x < canvas.width; x += gap) {
        for (let y = gap / 2; y < canvas.height; y += gap) {
          dots.push({
            baseX: x,
            baseY: y,
            x,
            y,
            offsetX: 0,
            offsetY: 0,
            speed: 0.3 + Math.random() * 0.7,
            phase: Math.random() * Math.PI * 2,
            radius: 0.8 + Math.random() * 0.4,
            glow: 0,
          });
        }
      }
      dotsRef.current = dots;
    }

    function resize() {
      if (!canvas) return;
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = window.innerWidth * dpr;
      canvas.height = window.innerHeight * dpr;
      canvas.style.width = window.innerWidth + 'px';
      canvas.style.height = window.innerHeight + 'px';
      ctx!.scale(dpr, dpr);
      createDots();
    }

    let time = 0;

    function draw() {
      if (!canvas || !ctx) return;
      const w = canvas.width / (Math.min(window.devicePixelRatio || 1, 2));
      const h = canvas.height / (Math.min(window.devicePixelRatio || 1, 2));

      ctx.clearRect(0, 0, w, h);
      time += 0.008;

      const isDark = document.documentElement.classList.contains('dark');
      const mx = mouseRef.current.x;
      const my = mouseRef.current.y;

      for (const dot of dotsRef.current) {
        // Floating micro-movement
        dot.offsetX = Math.sin(time * dot.speed + dot.phase) * 3;
        dot.offsetY = Math.cos(time * dot.speed * 0.8 + dot.phase + 1) * 3;
        dot.x = dot.baseX + dot.offsetX;
        dot.y = dot.baseY + dot.offsetY;

        // Mouse interaction
        const dx = mx - dot.x;
        const dy = my - dot.y;
        const dist = Math.sqrt(dx * dx + dy * dy);

        // Target glow based on distance
        const targetGlow = dist < interactionRadius
          ? Math.pow(1 - dist / interactionRadius, 1.5)
          : 0;

        // Smooth trail fade (glow decays slowly)
        dot.glow += (targetGlow - dot.glow) * 0.08;

        // Parallax push away from mouse
        if (dist < interactionRadius && dist > 0) {
          const pushStrength = (1 - dist / interactionRadius) * 8;
          dot.x -= (dx / dist) * pushStrength;
          dot.y -= (dy / dist) * pushStrength;
        }

        // Draw
        const baseOpacity = isDark ? 0.12 : 0.08;
        const glowOpacity = dot.glow * (isDark ? 0.9 : 0.6);
        const opacity = baseOpacity + glowOpacity;
        const radius = dot.radius + dot.glow * 2.5;

        if (dot.glow > 0.01) {
          // Glow halo
          const gradient = ctx.createRadialGradient(
            dot.x, dot.y, 0,
            dot.x, dot.y, radius * 4
          );
          const glowColor = isDark
            ? `rgba(99,133,255,${dot.glow * 0.15})`
            : `rgba(59,82,246,${dot.glow * 0.08})`;
          gradient.addColorStop(0, glowColor);
          gradient.addColorStop(1, 'transparent');
          ctx.beginPath();
          ctx.arc(dot.x, dot.y, radius * 4, 0, Math.PI * 2);
          ctx.fillStyle = gradient;
          ctx.fill();
        }

        // Dot core
        ctx.beginPath();
        ctx.arc(dot.x, dot.y, radius, 0, Math.PI * 2);

        if (dot.glow > 0.05) {
          // Interpolate from neutral to navy blue
          const r = isDark ? Math.round(180 + dot.glow * 75) : Math.round(40 + dot.glow * 50);
          const g = isDark ? Math.round(190 + dot.glow * 50) : Math.round(60 + dot.glow * 30);
          const b = isDark ? 255 : Math.round(180 + dot.glow * 60);
          ctx.fillStyle = `rgba(${r},${g},${b},${opacity})`;
        } else {
          const c = isDark ? '255,255,255' : '0,0,0';
          ctx.fillStyle = `rgba(${c},${opacity})`;
        }
        ctx.fill();
      }

      rafRef.current = requestAnimationFrame(draw);
    }

    function onMouseMove(e: MouseEvent) {
      mouseRef.current = { x: e.clientX, y: e.clientY };
    }

    function onMouseLeave() {
      mouseRef.current = { x: -1000, y: -1000 };
    }

    // Check reduced motion preference
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    resize();
    draw();

    window.addEventListener('resize', resize);
    window.addEventListener('mousemove', onMouseMove, { passive: true });
    document.addEventListener('mouseleave', onMouseLeave);

    return () => {
      cancelAnimationFrame(rafRef.current);
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
