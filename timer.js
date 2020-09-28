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
      console.log("bitmiştir");
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
  endTime.textContent = `Tahmini varış saati ${hour > 12 ? hour - 12 : hour}:${
    minutes < 10 ? "0 " : " "
  }${minutes}`;
}
function startTimer() {
  cup.classList.remove("cupFlow");
  //   console.log(this.id);
  const seconds = parseInt(this.dataset.time);
  setTimeout(() => {
    timer(seconds);
    cup.classList.add("cupFlow");
    cup.style.animationDuration = seconds + "s";
  }, 500);
}

buttons.forEach((button) => button.addEventListener("click", startTimer));

document.customForm.addEventListener("submit", function (e) {
  cup.classList.remove("cupFlow");
  e.preventDefault();
  const mins = this.minutes.value;
  const hours = this.hours.value;
  setTimeout(() => {
    timer(hours * 3600 + mins * 60);
    let total = hours * 3600 + mins * 60;
    this.reset();

    cup.classList.add("cupFlow");
    cup.style.animationDuration = total + "s";
  }, 500);
});
