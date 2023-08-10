function defineCanvas(width: number, height: number) {
  const canvas = document.querySelector("canvas")!;

  canvas!.width = width;
  canvas!.height = height;

  return canvas!;
}

export function initAnimation(width: number, height: number) {
  const canvas = defineCanvas(width, height);

  // get all ascii printable
  const letters: string[] = [];
  for (let i: number = 32; i < 127; i++) {
    letters.push(String.fromCharCode(i));
  }

  const size: number = 20;
  const columns: number = canvas!.width / size; // calculate columns if canvas is not null

  let drops: number[] = [];
  for (let i: number = 0; i < columns; i++) {
    // initialize the starting position for each column
    const offset = 100;
    const random: number = Math.floor(Math.random() * offset);
    drops[i] = random - offset;
  }

  setInterval(() => {
    draw(letters, drops, canvas, size);
  }, 50);
}

function draw(letters: string[], drops: number[], canvas: any, size: number) {
  const ctx = canvas.getContext("2d");
  ctx.fillStyle = "rgba(0, 0, 0, 0.15)";
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  for (let i: number = 0; i < drops.length; i++) {
    const text: string = letters[Math.floor(Math.random() * letters.length)]; // display random character from letters
    ctx.fillStyle = "#00ff00";
    // ctx.font = "20px sans-serif";
    ctx.fillText(text, i * size, drops[i] * size);
    drops[i]++;
    if (drops[i] * size > canvas.height && Math.random() > 0.95) {
      drops[i] = 0;
    }
  }
}

/**
 * Reference: https://codepen.io/yaclive/pen/EayLYO?editors=1111
 */
