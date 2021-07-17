export function defineCanvas() {
  const canvas = document.querySelector("canvas");
  canvas!.width = window.innerWidth;
  canvas!.height = window.innerHeight;

  return canvas;
}

export function initAnimation(canvas: any) {
  let letter = "ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890-/\\[]*";
  let letters = letter.split("");

  let size = 10;
  let columns = canvas.width / size;

  let drops: number[] = [];
  for (let i = 0; i < columns; i++) {
    drops[i] = 1;
  }

  setInterval(() => {
    draw(letters, drops, canvas);
  }, 50);
}

function draw(letters: any, drops: any, canvas: any) {
  const ctx = canvas.getContext("2d");
  ctx.fillStyle = "rgba(0, 0, 0, 0.1)";
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  for (let i = 0; i < drops.length; i++) {
    let text = letters[Math.floor(Math.random() * letters.length)];
    ctx.fillStyle = "#00ff00";
    ctx.fillText(text, i * 10, drops[i] * 10);
    drops[i]++;
    if (drops[i] * 10 > canvas.height && Math.random() > 0.95) {
      drops[i] = 0;
    }
  }
}
/**
 * Reference: https://codepen.io/yaclive/pen/EayLYO?editors=1111
 */
