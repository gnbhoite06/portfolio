import { useEffect, useRef } from "react";

type Orb = {
  baseX: number;
  baseY: number;
  radius: number;
  speedX: number;
  speedY: number;
  phase: number;
  color: string;
};

export default function AnimatedBg() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    let width = 0;
    let height = 0;

    const resize = () => {
      const rect = canvas.getBoundingClientRect();
      width = rect.width;
      height = rect.height;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };
    resize();
    window.addEventListener("resize", resize);

    const isDark = () =>
      document.documentElement.getAttribute("data-theme") === "dark" ||
      (!document.documentElement.hasAttribute("data-theme") &&
        window.matchMedia("(prefers-color-scheme: dark)").matches);

    const orbs: Orb[] = [
      { baseX: 0.78, baseY: 0.18, radius: 0.34, speedX: 0.00011, speedY: 0.00014, phase: 0, color: "76,175,130" },
      { baseX: 0.18, baseY: 0.32, radius: 0.24, speedX: 0.00016, speedY: 0.00009, phase: 2.1, color: "76,175,130" },
      { baseX: 0.55, baseY: 0.65, radius: 0.28, speedX: 0.00012, speedY: 0.00017, phase: 4.2, color: "31,92,63" },
    ];

    let rafId = 0;

    const draw = (t: number) => {
      ctx.clearRect(0, 0, width, height);
      const dark = isDark();
      const alpha = dark ? 0.22 : 0.16;

      orbs.forEach((orb) => {
        const dx = Math.sin(t * orb.speedX + orb.phase) * 0.06;
        const dy = Math.cos(t * orb.speedY + orb.phase) * 0.06;
        const cx = (orb.baseX + dx) * width;
        const cy = (orb.baseY + dy) * height;
        const r = orb.radius * Math.max(width, height);

        const gradient = ctx.createRadialGradient(cx, cy, 0, cx, cy, r);
        gradient.addColorStop(0, `rgba(${orb.color},${alpha})`);
        gradient.addColorStop(1, `rgba(${orb.color},0)`);

        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(cx, cy, r, 0, Math.PI * 2);
        ctx.fill();
      });

      if (!prefersReduced) {
        rafId = requestAnimationFrame(draw);
      }
    };

    rafId = requestAnimationFrame(draw);

    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 h-full w-full"
      style={{ filter: "blur(40px)" }}
    />
  );
}
