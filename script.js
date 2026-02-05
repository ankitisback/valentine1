const music = document.getElementById("music");
const app = document.getElementById("app");
const yes = document.getElementById("yes");
const no = document.getElementById("no");

let started = false;

/* 🎵 MUSIC – browser safe */
function startMusic() {
  if (started) return;
  music.volume = 0.7;
  music.play().then(() => {
    started = true;
  });
}

document.addEventListener("click", startMusic);
document.addEventListener("touchstart", startMusic);

/* 😈 NO button runs */
no.addEventListener("mouseover", () => {
  const x = Math.random() * 200 - 100;
  const y = Math.random() * 200 - 100;
  no.style.transform = `translate(${x}px, ${y}px)`;
});

/* 🎉 Confetti blast */
function confettiBlast() {
  const emojis = ["💖", "🎉", "✨", "😍", "❤️"];
  for (let i = 0; i < 60; i++) {
    const c = document.createElement("div");
    c.className = "confetti";
    c.innerText = emojis[Math.floor(Math.random() * emojis.length)];
    c.style.left = Math.random() * 100 + "vw";
    c.style.animationDuration = 2 + Math.random() * 2 + "s";
    document.body.appendChild(c);
    setTimeout(() => c.remove(), 4000);
  }
}

/* ⌨️ Typewriter */
function typeWriter(el, text, speed = 40) {
  let i = 0;
  el.innerHTML = "";
  const interval = setInterval(() => {
    el.innerHTML += text.charAt(i);
    i++;
    if (i >= text.length) clearInterval(interval);
  }, speed);
}

/* ❤️ YES CLICK FLOW */
yes.addEventListener("click", () => {
  startMusic();

  app.innerHTML = `
    <h2 style="color:#ff4f9a;">Processing your YES 💖</h2>
    <p>Thoda sa wait… 🥹</p>

    <div style="
      width:220px;
      height:14px;
      background:#ffd6e8;
      border-radius:10px;
      overflow:hidden;
    ">
      <div id="bar" style="
        width:0%;
        height:100%;
        background:#ff4f9a;
        transition:width 3s;
      "></div>
    </div>
  `;

  setTimeout(() => {
    document.getElementById("bar").style.width = "100%";
  }, 100);

  setTimeout(() => {
    app.innerHTML = `
      <img src="her.jpg" class="photo heartbeat">
      <h1>💖 Bhoomi 💖</h1>
      <div class="message" id="loveMsg"></div>
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

    typeWriter(document.getElementById("loveMsg"), message);
    confettiBlast();
  }, 3500);
});
