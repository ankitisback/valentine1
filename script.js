const music = document.getElementById("bgMusic");
const app = document.getElementById("app");
const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");

let musicStarted = false;

/* 🎵 START MUSIC – browser safe */
function startMusic() {
  if (musicStarted) return;

  music.volume = 0.7;
  music.play()
    .then(() => {
      musicStarted = true;
      console.log("Music playing");
    })
    .catch(err => {
      console.log("Music blocked until interaction", err);
    });
}

/* User interaction */
document.addEventListener("click", startMusic);
document.addEventListener("touchstart", startMusic);

/* 😈 Move NO button */
function moveNo() {
  const x = Math.random() * 200 - 100;
  const y = Math.random() * 200 - 100;
  noBtn.style.transform = `translate(${x}px, ${y}px)`;
}
noBtn.addEventListener("mouseover", moveNo);
noBtn.addEventListener("touchstart", moveNo);

/* 💖 YES FLOW */
yesBtn.addEventListener("click", () => {
  startMusic(); // force music on YES

  app.innerHTML = `
    <h2 style="color:#ff5fa2;">Processing your YES 💖</h2>
    <p>Please wait… 🥹</p>

    <div style="
      width:220px;
      height:14px;
      border-radius:10px;
      background:#ffd6e8;
      overflow:hidden;
    ">
      <div id="loader" style="
        width:0%;
        height:100%;
        background:#ff5fa2;
        transition:width 3s;
      "></div>
    </div>
  `;

  setTimeout(() => {
    document.getElementById("loader").style.width = "100%";
  }, 100);

  setTimeout(() => {
    app.innerHTML = `
      <img src="photo.jpg" class="her-photo">
      <h1 style="color:#ff5fa2;">💖 YAYYYYY 💖</h1>

      <div class="special-message">
        From the moment you came into my life,<br>
        everything felt brighter.<br><br>
        I don’t just want today —<br>
        I want every day with you 💕
      </div>
    `;
  }, 3500);
});
