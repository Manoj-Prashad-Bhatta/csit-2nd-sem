// 🌈 Create Floating Hot Air Balloons Dynamically
const balloonContainer = document.createElement('div');
balloonContainer.className = 'balloons-container';
document.body.appendChild(balloonContainer);

for (let i = 0; i < 15; i++) {
  const balloon = document.createElement('div');
  balloon.className = 'balloon';
  balloon.style.left = `${Math.random() * 100}%`;
  balloon.style.animationDuration = `${15 + Math.random() * 20}s`;
  balloon.style.transform = `scale(${0.5 + Math.random()})`;
  balloonContainer.appendChild(balloon);
}

// 🎈 Balloon Float Recycle
setInterval(() => {
  const balloons = document.querySelectorAll('.balloon');
  balloons.forEach(b => {
    if (parseFloat(b.style.top) < -100) {
      b.style.top = '100vh';
    }
  });
}, 10000);

// 🖱️ Ripple Effect on All Buttons
document.querySelectorAll('a').forEach(button => {
  button.addEventListener('click', function (e) {
    const ripple = document.createElement('span');
    ripple.className = 'ripple';
    ripple.style.left = `${e.offsetX}px`;
    ripple.style.top = `${e.offsetY}px`;
    this.appendChild(ripple);
    setTimeout(() => ripple.remove(), 600);
  });
});

// ✨ Add Ripple Style (Dynamically inject)
const style = document.createElement('style');
style.innerHTML = `
  .ripple {
    position: absolute;
    background: rgba(255, 255, 255, 0.6);
    border-radius: 50%;
    pointer-events: none;
    width: 100px;
    height: 100px;
    transform: scale(0);
    animation: rippleEffect 0.6s linear;
  }

  @keyframes rippleEffect {
    to {
      transform: scale(4);
      opacity: 0;
    }
  }

  a {
    position: relative;
    overflow: hidden;
  }
`;
document.head.appendChild(style);

// 🎥 Animate Subject Cards on Scroll
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.transform = 'scale(1)';
      entry.target.style.opacity = '1';
    }
  });
}, {
  threshold: 0.2
});

document.querySelectorAll('.subject-card').forEach(card => {
  card.style.transform = 'scale(0.9)';
  card.style.opacity = '0';
  observer.observe(card);
});

// 📱 Detect Orientation (extend later)
function detectOrientation() {
  const isPortrait = window.matchMedia("(orientation: portrait)").matches;
  console.log(isPortrait ? "Portrait mode" : "Landscape mode");
}

window.addEventListener("resize", detectOrientation);
detectOrientation();
