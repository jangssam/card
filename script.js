(function () {
  'use strict';

  const card = document.querySelector('.card');
  const inner = document.querySelector('.card-inner');

  if (!card || !inner) return;

  card.addEventListener('mousemove', function (e) {
    const rect = card.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width;
    const y = (e.clientY - rect.top) / rect.height;
    const tiltX = (y - 0.5) * 8;
    const tiltY = (x - 0.5) * -8;
    inner.style.transform = "perspective(1000px) translateY(-6px) rotateX(" + tiltX + "deg) rotateY(" + tiltY + "deg) translateZ(10px)";
  });

  card.addEventListener('mouseleave', function () {
    inner.style.transform = "perspective(1000px) rotateX(0) rotateY(0) translateZ(0)";
  });
})();
