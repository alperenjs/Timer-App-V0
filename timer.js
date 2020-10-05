function openNav() {
  document.getElementById("mySidepanel").style.width = "320px";
  document.getElementById("mySidepanel").classList.add("borderAnimation");
}

function closeNav() {
  document.getElementById("mySidepanel").style.width = "0";
  document.getElementById("mySidepanel").classList.remove("borderAnimation");
}

function openNav2() {
  document.getElementById("mySidepanel2").style.width = "320px";
  document.getElementById("mySidepanel2").classList.add("borderAnimation2");
}

function closeNav2() {
  document.getElementById("mySidepanel2").style.width = "0";
  document.getElementById("mySidepanel2").classList.remove("borderAnimation2");
}

function openNav3() {
  document.getElementById("mySidepanel3").style.marginTop = "20px";
}
function closeNav3() {
  document.getElementById("mySidepanel3").style.marginTop = "-50px";
}

//timer
const cup = document.getElementById("cup");
let countdown;
const timerDisplay = document.querySelector(".displayTimeLeft");
const endTime = document.querySelector(".displayEndTime");
//
const buttons = document.querySelectorAll("[data-time]");

function timer(seconds) {
  //clear last one
  clearInterval(countdown);
  const now = Date.now();
  const then = now + seconds * 1000;
  displayTimeLeft(seconds);
  displayEndTime(then);

  countdown = setInterval(() => {
    const secondsLeft = Math.round((then - Date.now()) / 1000);
    //check if done
    if (secondsLeft < 0) {
      clearInterval(countdown);
      cup.classList.remove("cupFlow");
      return;
    }

    displayTimeLeft(secondsLeft);
  }, 1000);
}

function displayTimeLeft(seconds) {
  const minutes = Math.floor(seconds / 60);
  if (minutes > 59) {
    var hours = Math.floor(minutes / 60) + " :";
  } else {
    var hours = "";
  }
  const remainderSeconds = seconds % 60;
  const display = `${hours} 
  ${
    minutes > 59
      ? minutes % 60 < 10
        ? "0" + (minutes % 60)
        : minutes % 60
      : minutes
  } :
  ${remainderSeconds < 10 ? "0" : ""}${remainderSeconds}`;

  document.title = display;
  timerDisplay.textContent = display;
  //   console.log(seconds);
}

function displayEndTime(timeStamp) {
  const end = new Date(timeStamp);
  const hour = end.getHours();
  const minutes = end.getMinutes();
  endTime.textContent = `Kahve bitme saati ${hour > 12 ? hour - 12 : hour}:${
    minutes < 10 ? "0 " : " "
  }${minutes}`;
}
function startTimer() {
  let type = this.dataset.type;
  cup.classList.remove("cupFlow");
  cup.style.background = "url('" + type + ".png" + "')";

  //   console.log(this.id);

  const seconds = parseInt(this.dataset.time);
  setTimeout(() => {
    timer(seconds);
    cup.classList.add("cupFlow");
    cup.style.animationDuration = seconds + "s";
  }, 500);
}

cup.addEventListener("animationend", function () {
  cup.style.background = "none";
});

buttons.forEach((button) => button.addEventListener("click", startTimer));

// document.customForm.addEventListener("submit", function (e) {
//   cup.classList.remove("cupFlow");
//   e.preventDefault();
//   const mins = this.minutes.value;
//   const hours = this.hours.value;
//   setTimeout(() => {
//     timer(hours * 3600 + mins * 60);
//     let total = hours * 3600 + mins * 60;
//     this.reset();

//     cup.classList.add("cupFlow");
//     cup.style.animationDuration = total + "s";
//   }, 500);
// });

//DARK MODE
var darkMain = document.querySelectorAll(".darkMain");
var darkBtn = document.querySelectorAll(".darkBtn");
var sidePanel = document.querySelectorAll(".sidepanel");
var timerBtn = document.querySelectorAll(".timerButton");
var closebtn = document.querySelectorAll(".closebtn");
var plusbtn = document.querySelectorAll(".todo-button");
var todolist = document.querySelectorAll(".todo");
var todo = document.querySelectorAll(".todo-input");
var darkCup = document.getElementById("cup");
var darkSpan = document.getElementById("darkSpan");

function darkMode() {
  for (var i = 0; i < darkMain.length; i++) {
    darkMain[i].style.background = "black";
    darkMain[i].style.color = "white";
  }
  for (var i = 0; i < darkMain.length; i++) {
    darkMain[i].style.background = "black";
    darkMain[i].style.color = "white";
  }
  for (var i = 0; i < plusbtn.length; i++) {
    plusbtn[i].style.color = "white";
  }
  for (var i = 0; i < todo.length; i++) {
    todo[i].style.background = "transparent";
    todo[i].style.color = "white";
  }
  for (var i = 0; i < timerBtn.length; i++) {
    timerBtn[i].style.color = "white";
    timerBtn[i].style.border = "2px solid white";
  }
  for (var i = 0; i < closebtn.length; i++) {
    closebtn[i].style.color = "white";
  }

  for (var i = 0; i < darkBtn.length; i++) {
    darkBtn[i].style.background = "black";
    darkBtn[i].style.color = "white";
    darkBtn[i].style.border = "1px solid white";
  }

  for (var i = 0; i < sidePanel.length; i++) {
    sidePanel[i].style.background = "black";
    sidePanel[i].style.border = "1px solid lightgray";
  }

  darkCup.style.border = "6px solid white";
  darkSpan.style.color = "white";
}

var elem = document.documentElement;
function openFullscreen() {
  if (elem.requestFullscreen) {
    elem.requestFullscreen();
  } else if (elem.mozRequestFullScreen) {
    /* Firefox */
    elem.mozRequestFullScreen();
  } else if (elem.webkitRequestFullscreen) {
    /* Chrome, Safari & Opera */
    elem.webkitRequestFullscreen();
  } else if (elem.msRequestFullscreen) {
    /* IE/Edge */
    elem.msRequestFullscreen();
  }
}

function closeFullscreen() {
  if (document.exitFullscreen) {
    document.exitFullscreen();
  } else if (document.mozCancelFullScreen) {
    document.mozCancelFullScreen();
  } else if (document.webkitExitFullscreen) {
    document.webkitExitFullscreen();
  } else if (document.msExitFullscreen) {
    document.msExitFullscreen();
  }
}
