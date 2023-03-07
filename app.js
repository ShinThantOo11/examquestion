
// alert countdown 
var deadline = new Date("Mar 7, 2023 15:37:25").getTime();
var x = setInterval(function () {
  var now = new Date().getTime();
  var t = deadline - now;
  var days = Math.floor(t / (1000 * 60 * 60 * 24));
  var hours = Math.floor((t % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((t % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((t % (1000 * 60)) / 1000);
  document.querySelector("#displayDiv").innerText =
    days + "d " + hours + "h " + minutes + "m " + seconds + "s ";
  if (t < 0) {
    clearInterval(x);
    document.querySelector("#displayDiv").innerText = "EXPIRED";
  }
}, 1000);

// let noti;
// function audioPlay () {
//   noti = document.querySelector('.notification-sound');
//   noti.play();
// }


document.querySelector('#ok_btn').addEventListener('click',() => document.querySelector(".modalBox").classList.add('d-none'))
setTimeout(
  () => {
    document.querySelector("#displayDiv").classList.remove("hidden");
    document.querySelector(".modalBox").classList.remove("d-none");
  },
  5000
);

// question No 
let questionBoxLength = document.getElementsByClassName("question").length;
let questionNo = document.querySelector(".question-no");
let okBtn = document.querySelector("#ok_btn");
questionNo.innerText = `${questionBoxLength} Questions`;

