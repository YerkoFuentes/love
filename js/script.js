const audio = document.getElementById('bgAudio');
const playBtn = document.getElementById('playBtn');
const pauseBtn = document.getElementById('pauseBtn');
const loopCheckbox = document.getElementById('loop');

audio.preload = "auto";
audio.src = 'assets/laodiseapt4.mp3';

// 🎶 FADE IN
function fadeIn(audio, duration = 5000) { // más duración
  audio.volume = 0;

  const steps = 50; // más pasos = más suave
  const stepTime = duration / steps;
  const volumeStep = 1 / steps;

  let currentStep = 0;

  const fade = setInterval(() => {
    currentStep++;

    audio.volume = Math.min(currentStep * volumeStep, 1);

    if (currentStep >= steps) {
      clearInterval(fade);
    }
  }, stepTime);
}

// 🎶 FADE OUT
function fadeOut(audio, duration = 1000) {
  let step = 0.05;
  let interval = duration / (1 / step);

  const fade = setInterval(() => {
    if (audio.volume > 0) {
      audio.volume = Math.max(audio.volume - step, 0);
    } else {
      audio.pause();
      clearInterval(fade);
    }
  }, interval);
}

// ▶️ PLAY
playBtn.addEventListener('click', async () => {
  try {
    audio.loop = loopCheckbox.checked;
    await audio.play();
    fadeIn(audio);

    playBtn.disabled = true;
    pauseBtn.disabled = false;
  } catch (err) {
    console.log(err);
    alert('Haz click nuevamente para reproducir 💖');
  }
});

// ⏸️ PAUSE
pauseBtn.addEventListener('click', () => {
  fadeOut(audio);
  playBtn.disabled = false;
  pauseBtn.disabled = true;
});

loopCheckbox.addEventListener('change', () => {
  audio.loop = loopCheckbox.checked;
});

pauseBtn.disabled = true;

// 🖼️ SLIDESHOW
const images = document.querySelectorAll('.img');
let index = 0;

// activa la primera
images[0].classList.add('active');

setInterval(() => {
  images[index].classList.remove('active');

  index = (index + 1) % images.length;

  images[index].classList.add('active');

}, 3000);

// 💌 MENSAJE OCULTO
const secretBtn = document.getElementById('secretBtn');
const secretMsg = document.getElementById('secretMsg');

secretBtn.addEventListener('click', () => {
  secretMsg.classList.toggle('show');
});

document.addEventListener("DOMContentLoaded", () => {

  setInterval(() => {
    const heart = document.createElement('div');
    heart.className = 'heart';
    heart.innerText = '💖';

    heart.style.left = Math.random() * 100 + 'vw';

    document.body.appendChild(heart);

    setTimeout(() => heart.remove(), 6000);

  }, 500);

});