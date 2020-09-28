function createBubble() {
  const section = document.querySelector("section");
  const createElement = document.createElement("span");
  var size = Math.random() * 10;
  var innerWidth = Math.random() * 100;

  createElement.style.width = 1 + size + "px";
  createElement.style.height = 1 + size + "px";
  createElement.style.left = 1 + size + Math.random() * innerWidth + "px";
  section.appendChild(createElement);
  setTimeout(() => {
    createElement.remove();
  }, 2500);
}

setInterval(createBubble, 1000);
