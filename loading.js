var count = 5;
var redirect = "./Portfolio_English/index.html";
const skipVideo=()=>{
  let video = document.getElementById("video");
  video.style.visibility = "hidden";
  clearTimeout(videoTimer)
  let text = document.getElementsByTagName("p");
 for (line of text){
   line.classList.add("cancelVideo")
 }
 setTimeout(() => {
  window.location.href = redirect;
}, 5000);
}
const videoTimer = () => {
  let video = document.getElementById("video");
  video.style.visibility = "hidden";
  setTimeout(() => {
    window.location.href = redirect;
  }, 7000);
}
setTimeout(videoTimer, 18000);