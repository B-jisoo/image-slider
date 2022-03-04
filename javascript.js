const slidePrev = document.querySelector("#js_left");
const slideNext = document.querySelector("#js_right");

let slidelist_li = document.querySelectorAll(".slidelist2 li");

let currentIdx = 1;
let slideCount = slidelist_li.length;

slidePrev.addEventListener("click", function () {
  if (1 < currentIdx) {
    document.querySelector(".slidelist2").style.transform += "translateX(100%)";
    currentIdx--;
  } else if (currentIdx === 1) {
    document.querySelector(".slidelist2").style.transform = "translateX(-400%)";
    currentIdx = slideCount;
  }
});

slideNext.addEventListener("click", function () {
  if (currentIdx < slideCount) {
    document.querySelector(".slidelist2").style.transform +=
      "translateX(-100%)";
    currentIdx++;
  } else if (currentIdx === slideCount) {
    document.querySelector(".slidelist2").style.transform = "translateX(0%)";
    currentIdx = 1;
  }
});
