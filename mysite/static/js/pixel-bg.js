// pixel-bg.js: Animated pixel art starry night background
(function() {
  const canvas = document.getElementById('pixel-bg');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  let width = window.innerWidth;
  let height = window.innerHeight;
  canvas.width = width;
  canvas.height = height;

  // Star properties
  const STAR_COUNT = 120;
  const stars = [];
  for (let i = 0; i < STAR_COUNT; i++) {
    stars.push({
      x: Math.random() * width,
      y: Math.random() * height,
      r: Math.random() * 1.5 + 0.5,
      alpha: Math.random(),
      dAlpha: (Math.random() * 0.02 + 0.01) * (Math.random() < 0.5 ? 1 : -1)
    });
  }

  function draw() {
    ctx.clearRect(0, 0, width, height);
    ctx.fillStyle = '#181c2b'; // Night sky color
    ctx.fillRect(0, 0, width, height);
    for (const star of stars) {
      ctx.globalAlpha = Math.abs(star.alpha);
      ctx.fillStyle = '#fff';
      ctx.fillRect(Math.round(star.x), Math.round(star.y), star.r, star.r);
      star.alpha += star.dAlpha;
      if (star.alpha <= 0 || star.alpha >= 1) star.dAlpha *= -1;
    }
    ctx.globalAlpha = 1;
    requestAnimationFrame(draw);
  }

  window.addEventListener('resize', () => {
    width = window.innerWidth;
    height = window.innerHeight;
    canvas.width = width;
    canvas.height = height;
  });

  draw();
})();
