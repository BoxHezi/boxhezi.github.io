function defineCanvas(width: number, height: number) {
  const canvas = document.querySelector("canvas");
  // canvas!.width = window.innerWidth; // assign innderWidth to canvas if canvas is not null
  // // canvas!.height = window.innerHeight; // assign innerHeight to canvas if canvas is not null

  // // get html height instead of window height
  // const html = document.querySelector("html");
  // const height =
  //   Math.max(html!.scrollHeight, html!.clientHeight, html!.offsetHeight) + 20;
  // // console.log(height);
  // canvas!.height = height;
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

  let size = 20;
  let columns = canvas!.width / size; // calculate columns if canvas is not null

  let drops: number[] = [];
  for (let i = 0; i < columns; i++) {
    drops[i] = 1;
  }

  setInterval(() => {
    draw(letters, drops, canvas, size);
  }, 50);
}

function draw(letters: any, drops: any, canvas: any, size: number) {
  const ctx = canvas.getContext("2d");
  ctx.fillStyle = "rgba(0, 0, 0, 0.1)";
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  for (let i = 0; i < drops.length; i++) {
    let text = letters[Math.floor(Math.random() * letters.length)];
    ctx.fillStyle = "#00ff00";
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
