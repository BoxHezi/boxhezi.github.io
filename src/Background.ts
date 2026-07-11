export function initAnimation(canvas: HTMLCanvasElement, interval = 50) {
  const ctx = canvas.getContext("2d")!;
  let animationId: number;
  let resizeTimeout: ReturnType<typeof setTimeout>;
  let lastDrawTime = 0;

  const letters: string[] = [];
  for (let i = 32; i < 127; i++) {
    letters.push(String.fromCharCode(i));
  }

  const size = 14;
  let columns = 0;
  let drops: number[] = [];

  function resetDrops() {
    columns = Math.floor(canvas.width / size);
    drops = [];
    const offset = 100;
    for (let i = 0; i < columns; i++) {
      drops[i] = Math.floor(Math.random() * offset) - offset;
    }
  }

  function resize() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    resetDrops();
  }

  function draw(now: number) {
    animationId = requestAnimationFrame(draw);
    if (now - lastDrawTime < interval) return;
    lastDrawTime = now;

    ctx.font = `${size}px monospace`;
    ctx.fillStyle = "rgba(0, 0, 0, 0.15)";
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    ctx.fillStyle = "#00ff00";
    for (let i = 0; i < drops.length; i++) {
      const text = letters[Math.floor(Math.random() * letters.length)];
      ctx.fillText(text, i * size, drops[i] * size);
      drops[i]++;
      if (drops[i] * size > canvas.height && Math.random() > 0.95) {
        drops[i] = 0;
      }
    }
  }

  resize();
  requestAnimationFrame(draw);

  function onResize() {
    clearTimeout(resizeTimeout);
    resizeTimeout = setTimeout(resize, 100);
  }
  window.addEventListener("resize", onResize);

  return function stop() {
    cancelAnimationFrame(animationId);
    clearTimeout(resizeTimeout);
    window.removeEventListener("resize", onResize);
  };
}

/**
 * Reference: https://codepen.io/yaclive/pen/EayLYO?editors=1111
 */
