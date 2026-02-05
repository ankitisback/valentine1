const music = document.getElementById("bgMusic");
const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");

let musicStarted = false;

/* 🎵 Start music ONLY after real user interaction */
function startMusic() {
  if (musicStarted) return;

  music.volume = 0.7;

  music.play()
    .then(() => {
      musicStarted = true;
      console.log("Music started");
    })
    .catch(err => {
      console.log("Music blocked:", err);
    });
}

/* attach to all valid user actions */
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

/* 💖 YES → loading → special message */
yesBtn.addEventListener("click", () => {
  startMusic(); // force music again on YES click

  document.body.innerHTML = `
    <div style="
      height:100vh;
      display:flex;
      flex-direction:column;
      justify-content:center;
      align-items:center;
      background:#fff0f5;
      text-align:center;
      font-family:Arial;
      padding:20px;
    ">
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
    </div>
  `;

  setTimeout(() => {
    document.getElementById("loader").style.width = "100%";
  }, 100);

  setTimeout(() => {
    document.body.innerHTML = `
      <div style="
        height:100vh;
        display:flex;
        flex-direction:column;
        justify-content:center;
        align-items:center;
        background:#fff0f5;
        text-align:center;
        font-family:Arial;
        padding:20px;
      ">
        <img src="photo.jpg" style="
          width:170px;
          height:170px;
          border-radius:50%;
          border:5px solid #ff5fa2;
          margin-bottom:15px;
        ">

        <h1 style="color:#ff5fa2;">💖 YAYYYYY 💖</h1>

        <div class="special-message">
          From the moment you came into my life,<br>
          everything felt brighter.<br><br>
          I don’t just want today —<br>
          I want every day with you 💕
        </div>
      </div>
    `;
  }, 3500);
});
