'use client';

import { useEffect, useRef } from 'react';

interface Star {
  x: number;
  y: number;
  z: number;
  baseSize: number;
  twinkleSpeed: number;
  twinklePhase: number;
  brightness: number;
}

export function CodeBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouseRef = useRef({ x: -1000, y: -1000 });
  const starsRef = useRef<Star[]>([]);
  const rafRef = useRef<number>(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    const starCount = 600;
    const warpRadius = 180;

    function createStars() {
      if (!canvas) return;
      const w = window.innerWidth;
      const h = window.innerHeight;
      const stars: Star[] = [];
      for (let i = 0; i < starCount; i++) {
        stars.push({
          x: Math.random() * w,
          y: Math.random() * h,
          z: Math.random(), // 0 = far, 1 = near
          baseSize: 0.3 + Math.random() * 1.5,
          twinkleSpeed: 0.5 + Math.random() * 2,
          twinklePhase: Math.random() * Math.PI * 2,
          brightness: 0.3 + Math.random() * 0.7,
        });
      }
      starsRef.current = stars;
    }

    function resize() {
      if (!canvas) return;
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = window.innerWidth * dpr;
      canvas.height = window.innerHeight * dpr;
      canvas.style.width = window.innerWidth + 'px';
      canvas.style.height = window.innerHeight + 'px';
      ctx!.setTransform(dpr, 0, 0, dpr, 0, 0);
      createStars();
    }

    let time = 0;

    function draw() {
      if (!canvas || !ctx) return;
      const w = window.innerWidth;
      const h = window.innerHeight;

      ctx.clearRect(0, 0, w, h);
      time += 0.01;

      const isDark = document.documentElement.classList.contains('dark');
      const mx = mouseRef.current.x;
      const my = mouseRef.current.y;
      const mouseActive = mx > -500;

      for (const star of starsRef.current) {
        // Slow drift upward (space movement)
        star.y -= 0.08 * (0.5 + star.z * 0.5);
        if (star.y < -5) {
          star.y = h + 5;
          star.x = Math.random() * w;
        }

        // Twinkle
        const twinkle = 0.6 + 0.4 * Math.sin(time * star.twinkleSpeed + star.twinklePhase);

        // Warp effect around mouse
        let drawX = star.x;
        let drawY = star.y;
        let warpBoost = 0;

        if (mouseActive) {
          const dx = star.x - mx;
          const dy = star.y - my;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < warpRadius && dist > 0) {
            const force = Math.pow(1 - dist / warpRadius, 2);
            // Push outward from cursor
            const pushStrength = force * 40 * (0.5 + star.z);
            drawX += (dx / dist) * pushStrength;
            drawY += (dy / dist) * pushStrength;
            warpBoost = force;
          }
        }

        // Size based on depth + warp boost
        const size = star.baseSize * (0.4 + star.z * 0.6) + warpBoost * 2;

        // Opacity
        const baseAlpha = isDark
          ? star.brightness * 0.25 * twinkle
          : star.brightness * 0.12 * twinkle;
        const alpha = baseAlpha + warpBoost * (isDark ? 0.6 : 0.3);

        // Color — neutral by default, blue shift near cursor
        if (warpBoost > 0.05) {
          // Blue-white glow near cursor
          const glow = warpBoost;

          // Halo
          const gradient = ctx.createRadialGradient(
            drawX, drawY, 0,
            drawX, drawY, size * 5
          );
          gradient.addColorStop(0, `rgba(120,160,255,${glow * (isDark ? 0.12 : 0.06)})`);
          gradient.addColorStop(1, 'transparent');
          ctx.beginPath();
          ctx.arc(drawX, drawY, size * 5, 0, Math.PI * 2);
          ctx.fillStyle = gradient;
          ctx.fill();

          // Star core with blue shift
          const b = Math.round(200 + glow * 55);
          const g = Math.round(180 + glow * 40);
          ctx.beginPath();
          ctx.arc(drawX, drawY, size, 0, Math.PI * 2);
          ctx.fillStyle = isDark
            ? `rgba(${g},${g + 20},${b},${alpha})`
            : `rgba(${Math.round(30 + glow * 40)},${Math.round(50 + glow * 30)},${Math.round(150 + glow * 80)},${alpha})`;
          ctx.fill();
        } else {
          // Normal star
          ctx.beginPath();
          ctx.arc(drawX, drawY, size, 0, Math.PI * 2);
          ctx.fillStyle = isDark
            ? `rgba(255,255,255,${alpha})`
            : `rgba(0,0,0,${alpha})`;
          ctx.fill();
        }
      }

      // Subtle radial glow at cursor position
      if (mouseActive) {
        const gradient = ctx.createRadialGradient(mx, my, 0, mx, my, warpRadius);
        gradient.addColorStop(0, isDark ? 'rgba(80,120,220,0.03)' : 'rgba(60,90,200,0.02)');
        gradient.addColorStop(1, 'transparent');
        ctx.beginPath();
        ctx.arc(mx, my, warpRadius, 0, Math.PI * 2);
        ctx.fillStyle = gradient;
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
