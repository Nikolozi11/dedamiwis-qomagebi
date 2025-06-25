const burger1 = document.getElementById('burger');
const navLinks = document.getElementById('navLinks');

burger1.addEventListener('click', () => {
  navLinks.classList.toggle('show');
});


//ვიდეო

  const video = document.getElementById("ecoVideo");
  const playBtn = document.getElementById("playVideoBtn");
  const muteBtn = document.getElementById("muteBtn");
  const content = document.getElementById("ecoContent");

  playBtn.addEventListener("click", () => {
    video.muted = false;
    video.play();
    content.style.opacity = "0";
    setTimeout(() => {
      content.style.display = "none";
      muteBtn.style.display = "inline-block";
    }, 500);
  });

  muteBtn.addEventListener("click", () => {
    video.muted = !video.muted;
    muteBtn.textContent = video.muted ? "🔊 ჩართე ხმა" : "🔇 გამორთე ხმა";
  });
  
