const canvas = document.getElementById('matrix');
const ctx = canvas.getContext('2d');

// Make canvas full screen
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const letters = 'アァカサタナハマヤャラワガザダバパイィキシチニヒミリヰギジヂビピウゥクスツヌフムユュルグズヅブプエェケセテネヘメレヱゲゼデベペオォコソトノホモヨョロヲゴゾドボポヴッン0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ';

// Split letters into array
const lettersArray = letters.split('');

const fontSize = 16;
const columns = canvas.width / fontSize;

// An array of drops - one per column
const drops = new Array(Math.floor(columns)).fill(1);

function draw() {
  // Black background with slight opacity for trail effect
  ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  ctx.fillStyle = '#0F0'; // Green text

  // Use 8-bit pixel font here (font must be loaded separately)
  ctx.font = fontSize + 'px "Press Start 2P", monospace';

  for (let i = 0; i < drops.length; i++) {
    // Pick a random letter
    const text = lettersArray[Math.floor(Math.random() * lettersArray.length)];
    // x = i * fontSize, y = drops[i] * fontSize
    ctx.fillText(text, i * fontSize, drops[i] * fontSize);

    // Reset drop to top randomly after it goes off screen
    if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
      drops[i] = 0;
    }

    // Increment y coordinate
    drops[i]++;
  }
}

setInterval(draw, 33);

// Adjust canvas size on window resize
window.addEventListener('resize', () => {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
});
