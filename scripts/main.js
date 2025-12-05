import { newCounterInc } from "./utils.js";

const buttonEls = document.querySelectorAll(".button");
const block = document.querySelector(".block");
const containerButtons = document.querySelector(".containerButtons");

const mouseActions = {
  counter: newCounterInc(6),

  toggleMouseHover() {
    block.classList.toggle("mouseHover");
  },

  addButton() {
    const html = `<input type="button" value="Button" class="button" />`;

    if (this.counter(1) !== -1) {
      containerButtons.insertAdjacentHTML("afterbegin", html);
    }
  },
};

document.addEventListener("mousemove", function (e) {
  setTimeout(() => {
    block.style.left = e.clientX - 20 + "px";
    block.style.top = e.clientY - 20 + "px";
  }, 50);
});

for (let btn of buttonEls) {
  btn.addEventListener("mouseover", function () {
    mouseActions.toggleMouseHover();
  });

  btn.addEventListener("mouseout", function () {
    mouseActions.toggleMouseHover();
  });
}

mouseActions.addButton();
