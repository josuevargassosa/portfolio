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

interface DustParticle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  life: number;
  maxLife: number;
  size: number;
}

export function CodeBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouseRef = useRef({ x: -1000, y: -1000 });
  const prevMouseRef = useRef({ x: -1000, y: -1000 });
  const starsRef = useRef<Star[]>([]);
  const dustRef = useRef<DustParticle[]>([]);
  const rafRef = useRef<number>(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    const starCount = 1500;
    const warpRadius = 180;
    const maxDust = 80;

    function createStars() {
      if (!canvas) return;
      const w = window.innerWidth;
      const h = window.innerHeight;
      const stars: Star[] = [];
      for (let i = 0; i < starCount; i++) {
        stars.push({
          x: Math.random() * w,
          y: Math.random() * h,
          z: Math.random(),
          baseSize: 0.3 + Math.random() * 1.8,
          twinkleSpeed: 0.5 + Math.random() * 2,
          twinklePhase: Math.random() * Math.PI * 2,
          brightness: 0.4 + Math.random() * 0.6,
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
    let dustSpawnTimer = 0;

    function spawnDust(mx: number, my: number) {
      const dust = dustRef.current;
      if (dust.length >= maxDust) return;

      const count = 2 + Math.floor(Math.random() * 2);
      for (let i = 0; i < count; i++) {
        const angle = Math.random() * Math.PI * 2;
        const speed = 0.3 + Math.random() * 1.2;
        dust.push({
          x: mx + (Math.random() - 0.5) * 10,
          y: my + (Math.random() - 0.5) * 10,
          vx: Math.cos(angle) * speed,
          vy: Math.sin(angle) * speed,
          life: 1,
          maxLife: 40 + Math.random() * 60,
          size: 0.5 + Math.random() * 1.5,
        });
      }
    }

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

      // Spawn dust trail when mouse moves
      if (mouseActive) {
        const pmx = prevMouseRef.current.x;
        const pmy = prevMouseRef.current.y;
        const moveDist = Math.sqrt((mx - pmx) ** 2 + (my - pmy) ** 2);
        dustSpawnTimer++;
        if (moveDist > 3 && dustSpawnTimer % 2 === 0) {
          spawnDust(mx, my);
        }
      }
      prevMouseRef.current = { x: mx, y: my };

      // --- Draw stars ---
      for (const star of starsRef.current) {
        star.y -= 0.08 * (0.5 + star.z * 0.5);
        if (star.y < -5) {
          star.y = h + 5;
          star.x = Math.random() * w;
        }

        const twinkle = 0.6 + 0.4 * Math.sin(time * star.twinkleSpeed + star.twinklePhase);

        let drawX = star.x;
        let drawY = star.y;
        let warpBoost = 0;

        if (mouseActive) {
          const dx = star.x - mx;
          const dy = star.y - my;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < warpRadius && dist > 0) {
            const force = Math.pow(1 - dist / warpRadius, 2);
            const pushStrength = force * 40 * (0.5 + star.z);
            drawX += (dx / dist) * pushStrength;
            drawY += (dy / dist) * pushStrength;
            warpBoost = force;
          }
        }

        const size = star.baseSize * (0.4 + star.z * 0.6) + warpBoost * 2;

        // Higher base opacity for more visible stars
        const baseAlpha = isDark
          ? star.brightness * 0.4 * twinkle
          : star.brightness * 0.18 * twinkle;
        const alpha = baseAlpha + warpBoost * (isDark ? 0.6 : 0.35);

        if (warpBoost > 0.05) {
          const glow = warpBoost;

          // Halo
          const gradient = ctx.createRadialGradient(
            drawX, drawY, 0,
            drawX, drawY, size * 5
          );
          gradient.addColorStop(0, `rgba(120,160,255,${glow * (isDark ? 0.15 : 0.08)})`);
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
          ctx.beginPath();
          ctx.arc(drawX, drawY, size, 0, Math.PI * 2);
          ctx.fillStyle = isDark
            ? `rgba(255,255,255,${alpha})`
            : `rgba(0,0,0,${alpha})`;
          ctx.fill();
        }
      }

      // --- Draw dust trail particles ---
      const dust = dustRef.current;
      for (let i = dust.length - 1; i >= 0; i--) {
        const p = dust[i];
        p.x += p.vx;
        p.y += p.vy;
        p.vx *= 0.98;
        p.vy *= 0.98;
        p.life -= 1 / p.maxLife;

        if (p.life <= 0) {
          dust.splice(i, 1);
          continue;
        }

        const fadeAlpha = p.life * (isDark ? 0.5 : 0.25);
        const fadeSize = p.size * (0.5 + p.life * 0.5);

        // Dust glow
        const dustGradient = ctx.createRadialGradient(
          p.x, p.y, 0,
          p.x, p.y, fadeSize * 4
        );
        dustGradient.addColorStop(0, `rgba(140,170,255,${fadeAlpha * 0.3})`);
        dustGradient.addColorStop(1, 'transparent');
        ctx.beginPath();
        ctx.arc(p.x, p.y, fadeSize * 4, 0, Math.PI * 2);
        ctx.fillStyle = dustGradient;
        ctx.fill();

        // Dust core
        ctx.beginPath();
        ctx.arc(p.x, p.y, fadeSize, 0, Math.PI * 2);
        ctx.fillStyle = isDark
          ? `rgba(180,200,255,${fadeAlpha})`
          : `rgba(60,80,180,${fadeAlpha})`;
        ctx.fill();
      }

      // Cursor glow
      if (mouseActive) {
        const gradient = ctx.createRadialGradient(mx, my, 0, mx, my, warpRadius);
        gradient.addColorStop(0, isDark ? 'rgba(80,120,220,0.04)' : 'rgba(60,90,200,0.025)');
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
