var count = 5;
var redirect = "./Portfolio_English/index.html";
setTimeout(() => {
  let video = document.getElementById("video");
  video.style.visibility = "hidden";
  setTimeout(() => {
    window.location.href = redirect;
  }, 7000);
}, 18000);
