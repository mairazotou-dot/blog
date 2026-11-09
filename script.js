const audio = document.getElementById('audio');
  const btn = document.getElementById('btn');
  const seek = document.getElementById('seek');

  btn.onclick = () => audio.paused ? audio.play() : audio.pause();
  audio.onplay = () => btn.textContent = 'Pause';
  audio.onpause = () => btn.textContent = 'Play';
  audio.onloadedmetadata = () => seek.max = audio.duration;
  audio.ontimeupdate = () => seek.value = audio.currentTime;
  seek.oninput = () => audio.currentTime = seek.value;



  //BOUNCING IMAGE
const SPEED = 100;
const img = document.getElementById("bouncer");

if (img) {
  let x = 50, y = 50, dirX = 1, dirY = 1, lastTime = null;

  function move(now) {
    if (lastTime === null) lastTime = now;
    const dt = Math.min((now - lastTime) / 1000, 0.05);
    lastTime = now;

    const maxX = window.innerWidth - img.offsetWidth;
    const maxY = window.innerHeight - img.offsetHeight;

    x += dirX * SPEED * dt;
    y += dirY * SPEED * dt;

    if (x <= 0)    { x = 0;    dirX = 1; }
    if (x >= maxX) { x = maxX; dirX = -1; }
    if (y <= 0)    { y = 0;    dirY = 1; }
    if (y >= maxY) { y = maxY; dirY = -1; }

    img.style.transform = `translate(${x}px, ${y}px)`;
    requestAnimationFrame(move);
  }

  if (img.complete) requestAnimationFrame(move);
  else img.addEventListener("load", () => requestAnimationFrame(move));
}




//TABS
function openCity(evt, cityName) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  document.getElementById(cityName).style.display = "block";
  evt.currentTarget.className += " active";
}


