function defineCanvas(width: number, height: number) {
  const canvas = document.querySelector("canvas");

  canvas!.width = width;
  canvas!.height = height;

  return canvas;
}

export function initAnimation(width: number, height: number) {
  const canvas = defineCanvas(width, height);

  // get all ascii printable
  let letters: string[] = [];
  for (let i = 32; i < 127; i++) {
    letters.push(String.fromCharCode(i));
  }

  let size: number = 20;
  let columns = canvas!.width / size; // calculate columns if canvas is not null

  let drops: number[] = [];
  for (let i = 0; i < columns; i++) {
    // initialize the starting position for each column
    const random = Math.floor(Math.random() * height);
    drops[i] = random + size;
  }

  setInterval(() => {
    draw(letters, drops, canvas, size);
  }, 50);
}

function draw(letters: string[], drops: number[], canvas: any, size: number) {
  const ctx = canvas.getContext("2d");
  ctx.fillStyle = "rgba(0, 0, 0, 0.15)";
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  for (let i = 0; i < drops.length; i++) {
    let text = letters[Math.floor(Math.random() * letters.length)]; // display random character from letters
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
