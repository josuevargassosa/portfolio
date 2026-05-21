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

interface Ripple {
  x: number;
  y: number;
  radius: number;
  maxRadius: number;
  life: number;
}

const WARP_RADIUS = 180;
const WARP_RADIUS_SQ = WARP_RADIUS * WARP_RADIUS;
const MAX_DUST = 50;
const SPRITE_SIZE = 64;

function makeGlowSprite(color: string, size = SPRITE_SIZE): HTMLCanvasElement {
  const c = document.createElement('canvas');
  c.width = c.height = size;
  const cx = c.getContext('2d')!;
  const r = size / 2;
  const grad = cx.createRadialGradient(r, r, 0, r, r, r);
  grad.addColorStop(0, color);
  grad.addColorStop(1, 'transparent');
  cx.fillStyle = grad;
  cx.fillRect(0, 0, size, size);
  return c;
}

export function CodeBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouseRef = useRef({ x: -1000, y: -1000 });
  const prevMouseRef = useRef({ x: -1000, y: -1000 });
  const starsRef = useRef<Star[]>([]);
  const dustRef = useRef<DustParticle[]>([]);
  const ripplesRef = useRef<Ripple[]>([]);
  const rafRef = useRef<number>(0);
  const isDarkRef = useRef(false);
  const visibleRef = useRef(true);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d', { alpha: true });
    if (!ctx) return;

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    const isMobile = window.innerWidth < 768;
    const starCount = isMobile ? 180 : 600;

    const readTheme = () => {
      isDarkRef.current = document.documentElement.classList.contains('dark');
    };
    readTheme();
    const themeObserver = new MutationObserver(readTheme);
    themeObserver.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['class'],
    });

    const warpGlowSprite = makeGlowSprite('rgba(120,160,255,1)');
    const dustGlowSprite = makeGlowSprite('rgba(140,170,255,1)');
    const cursorGlowSprite = makeGlowSprite('rgba(70,105,210,1)', 128);

    function createStars() {
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
      const dpr = isMobile ? 1 : Math.min(window.devicePixelRatio || 1, 2);
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
      if (dust.length >= MAX_DUST) return;
      const count = 1 + Math.floor(Math.random() * 2);
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

    const warpedBuf: { dx: number; dy: number; size: number; alpha: number; glow: number }[] = [];

    function draw() {
      if (!canvas || !ctx) return;

      if (!visibleRef.current) {
        rafRef.current = requestAnimationFrame(draw);
        return;
      }

      const w = window.innerWidth;
      const h = window.innerHeight;
      const isDark = isDarkRef.current;

      ctx.clearRect(0, 0, w, h);
      time += 0.01;

      const mx = mouseRef.current.x;
      const my = mouseRef.current.y;
      const mouseActive = mx > -500;

      if (mouseActive) {
        const dxm = mx - prevMouseRef.current.x;
        const dym = my - prevMouseRef.current.y;
        dustSpawnTimer++;
        if (dxm * dxm + dym * dym > 9 && dustSpawnTimer % 3 === 0) {
          spawnDust(mx, my);
        }
      }
      prevMouseRef.current.x = mx;
      prevMouseRef.current.y = my;

      const mxMin = mx - WARP_RADIUS;
      const mxMax = mx + WARP_RADIUS;
      const myMin = my - WARP_RADIUS;
      const myMax = my + WARP_RADIUS;

      const stars = starsRef.current;
      const ripples = ripplesRef.current;
      const rippleCount = ripples.length;
      const baseColor = isDark ? '255,255,255' : '0,0,0';
      const mobileBoost = isMobile ? 1.3 : 1;
      const baseAlphaMul = isDark ? 0.4 * mobileBoost : 0.18 * mobileBoost;
      const warpAlphaMul = isDark ? 0.6 : 0.35;

      warpedBuf.length = 0;

      for (let i = 0; i < stars.length; i++) {
        const star = stars[i];
        star.y -= 0.08 * (0.5 + star.z * 0.5);
        if (star.y < -5) {
          star.y = h + 5;
          star.x = Math.random() * w;
        }

        const twinkle = 0.6 + 0.4 * Math.sin(time * star.twinkleSpeed + star.twinklePhase);

        let drawX = star.x;
        let drawY = star.y;
        let warpBoost = 0;

        if (
          mouseActive &&
          star.x > mxMin && star.x < mxMax &&
          star.y > myMin && star.y < myMax
        ) {
          const dx = star.x - mx;
          const dy = star.y - my;
          const distSq = dx * dx + dy * dy;
          if (distSq < WARP_RADIUS_SQ && distSq > 0) {
            const dist = Math.sqrt(distSq);
            const ratio = 1 - dist / WARP_RADIUS;
            const force = ratio * ratio;
            const push = force * 40 * (0.5 + star.z);
            const inv = 1 / dist;
            drawX += dx * inv * push;
            drawY += dy * inv * push;
            warpBoost = force;
          }
        }

        for (let r = 0; r < rippleCount; r++) {
          const rip = ripples[r];
          const rdx = star.x - rip.x;
          const rdy = star.y - rip.y;
          if (rdx > rip.radius || rdx < -rip.radius) continue;
          if (rdy > rip.radius || rdy < -rip.radius) continue;
          const rdistSq = rdx * rdx + rdy * rdy;
          const rRadSq = rip.radius * rip.radius;
          if (rdistSq < rRadSq && rdistSq > 0) {
            const rdist = Math.sqrt(rdistSq);
            const proximity = 1 - rdist / rip.radius;
            const rf = proximity * rip.life * 8;
            const inv = 1 / rdist;
            drawX += rdx * inv * rf;
            drawY += rdy * inv * rf;
            const rb = proximity * rip.life * 0.3;
            if (rb > warpBoost) warpBoost = rb;
          }
        }

        const size = star.baseSize * (0.4 + star.z * 0.6) + warpBoost * 2;
        const baseAlpha = star.brightness * baseAlphaMul * twinkle;
        const alpha = baseAlpha + warpBoost * warpAlphaMul;

        if (warpBoost > 0.05) {
          warpedBuf.push({ dx: drawX, dy: drawY, size, alpha, glow: warpBoost });
        } else {
          ctx.fillStyle = `rgba(${baseColor},${alpha})`;
          ctx.beginPath();
          ctx.arc(drawX, drawY, size, 0, Math.PI * 2);
          ctx.fill();
        }
      }

      const haloAlphaMul = isDark ? 0.15 : 0.08;
      for (let i = 0; i < warpedBuf.length; i++) {
        const s = warpedBuf[i];
        const haloSize = s.size * 10;
        ctx.globalAlpha = s.glow * haloAlphaMul;
        ctx.drawImage(
          warpGlowSprite,
          s.dx - haloSize * 0.5,
          s.dy - haloSize * 0.5,
          haloSize,
          haloSize
        );
        ctx.globalAlpha = 1;
        ctx.fillStyle = isDark
          ? `rgba(220,225,255,${s.alpha})`
          : `rgba(40,60,170,${s.alpha})`;
        ctx.beginPath();
        ctx.arc(s.dx, s.dy, s.size, 0, Math.PI * 2);
        ctx.fill();
      }

      const dust = dustRef.current;
      const dustCoreAlphaMul = isDark ? 0.5 : 0.25;
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
        const fadeAlpha = p.life * dustCoreAlphaMul;
        const fadeSize = p.size * (0.5 + p.life * 0.5);
        const glowSize = fadeSize * 8;
        ctx.globalAlpha = fadeAlpha * 0.3;
        ctx.drawImage(
          dustGlowSprite,
          p.x - glowSize * 0.5,
          p.y - glowSize * 0.5,
          glowSize,
          glowSize
        );
        ctx.globalAlpha = 1;
        ctx.fillStyle = isDark
          ? `rgba(180,200,255,${fadeAlpha})`
          : `rgba(60,80,180,${fadeAlpha})`;
        ctx.beginPath();
        ctx.arc(p.x, p.y, fadeSize, 0, Math.PI * 2);
        ctx.fill();
      }

      for (let i = ripples.length - 1; i >= 0; i--) {
        const rip = ripples[i];
        rip.radius += 2.5;
        rip.life -= 0.01;
        if (rip.life <= 0 || rip.radius > rip.maxRadius) {
          ripples.splice(i, 1);
        }
      }

      if (mouseActive) {
        const cs = WARP_RADIUS * 2;
        ctx.globalAlpha = isDark ? 0.04 : 0.025;
        ctx.drawImage(cursorGlowSprite, mx - cs * 0.5, my - cs * 0.5, cs, cs);
        ctx.globalAlpha = 1;
      }

      rafRef.current = requestAnimationFrame(draw);
    }

    function onMouseMove(e: MouseEvent) {
      mouseRef.current.x = e.clientX;
      mouseRef.current.y = e.clientY;
    }
    function onTouchMove(e: TouchEvent) {
      const t = e.touches[0];
      if (t) {
        mouseRef.current.x = t.clientX;
        mouseRef.current.y = t.clientY;
      }
    }
    function onTouchStart(e: TouchEvent) {
      const t = e.touches[0];
      if (t) {
        mouseRef.current.x = t.clientX;
        mouseRef.current.y = t.clientY;
        ripplesRef.current.push({
          x: t.clientX,
          y: t.clientY,
          radius: 0,
          maxRadius: 400,
          life: 1,
        });
      }
    }
    function onTouchEnd() {
      mouseRef.current.x = -1000;
      mouseRef.current.y = -1000;
    }
    function onMouseLeave() {
      mouseRef.current.x = -1000;
      mouseRef.current.y = -1000;
    }
    function onVisibility() {
      visibleRef.current = !document.hidden;
    }

    resize();
    draw();

    window.addEventListener('resize', resize);
    window.addEventListener('mousemove', onMouseMove, { passive: true });
    window.addEventListener('touchstart', onTouchStart, { passive: true });
    window.addEventListener('touchmove', onTouchMove, { passive: true });
    window.addEventListener('touchend', onTouchEnd);
    document.addEventListener('mouseleave', onMouseLeave);
    document.addEventListener('visibilitychange', onVisibility);

    return () => {
      cancelAnimationFrame(rafRef.current);
      themeObserver.disconnect();
      window.removeEventListener('resize', resize);
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('touchstart', onTouchStart);
      window.removeEventListener('touchmove', onTouchMove);
      window.removeEventListener('touchend', onTouchEnd);
      document.removeEventListener('mouseleave', onMouseLeave);
      document.removeEventListener('visibilitychange', onVisibility);
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
