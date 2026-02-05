const music = document.getElementById("bgMusic");
const app = document.getElementById("app");
const yesBtn = document.getElementById("yes");
const noBtn = document.getElementById("no");

let musicStarted = false;

/* 🎵 music start on first user interaction */
function startMusic() {
  if (musicStarted) return;
  music.volume = 0.7;
  music.play().then(() => {
    musicStarted = true;
  });
}

document.addEventListener("click", startMusic);
document.addEventListener("touchstart", startMusic);

/* 😈 NO button runs */
noBtn.addEventListener("mouseover", () => {
  const x = Math.random() * 200 - 100;
  const y = Math.random() * 200 - 100;
  noBtn.style.transform = `translate(${x}px, ${y}px)`;
});

/* 🎉 confetti */
function confettiBlast() {
  const emojis = ["💖","🎉","✨","😍","❤️"];
  for (let i = 0; i < 50; i++) {
    const el = document.createElement("div");
    el.className = "confetti";
    el.innerText = emojis[Math.floor(Math.random() * emojis.length)];
    el.style.left = Math.random() * 100 + "vw";
    el.style.animationDuration = 2 + Math.random() * 2 + "s";
    document.body.appendChild(el);
    setTimeout(() => el.remove(), 4000);
  }
}

/* ⌨️ typewriter */
function typeText(el, text, speed = 40) {
  let i = 0;
  el.innerHTML = "";
  const t = setInterval(() => {
    el.innerHTML += text.charAt(i);
    i++;
    if (i >= text.length) clearInterval(t);
  }, speed);
}

/* ❤️ YES click */
yesBtn.addEventListener("click", () => {
  startMusic();

  app.innerHTML = `
    <h2 style="color:#ff4f9a;">Processing your YES 💖</h2>
    <p>Just a moment…</p>
  `;

  setTimeout(() => {
    app.innerHTML = `
      <img src="photo.jpg" class="photo heartbeat">
      <h2>💖 Bhoomi 💖</h2>
      <div class="message" id="msg"></div>
    `;

    const message = `Bhoomi,

Tumhari ek “YES” ne sirf mera din nahi,
meri poori duniya roshan kar di ❤️

Tumhari muskurahat,
tumhari baatein,
aur tumhara saath —
sab kuch mere liye bahut khaas hai.

Main sirf aaj ke liye nahi,
har kal, har pal,
tumhare saath rehna chahta hoon ✨

I love you 💕`;

    typeText(document.getElementById("msg"), message);
    confettiBlast();
  }, 2000);
});
