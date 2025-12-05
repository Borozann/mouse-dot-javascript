import { newCounterInc } from "./utils.js";

const buttonEls = document.querySelectorAll(".button");
const block = document.querySelector(".block");
const containerButtons = document.querySelector(".containerButtons");

const mouseActions = {
  btnCounter: newCounterInc(6),

  toggleMouseHover() {
    block.classList.toggle("mouseHover");
  },

  addButton() {
    const html = `<input type="button" value="Button" class="button" />`;

    if (this.btnCounter(1) !== -1) {
      containerButtons.insertAdjacentHTML("afterbegin", html);
    }

    const newBtn = containerButtons.querySelector(".button");

    newBtn.addEventListener("mouseover", function () {
      mouseActions.toggleMouseHover();
    });

    newBtn.addEventListener("mouseout", function () {
      mouseActions.toggleMouseHover();
    });
  },
};

document.addEventListener("mousemove", function (e) {
  setTimeout(() => {
    block.style.left = e.clientX - 20 + "px";
    block.style.top = e.clientY - 20 + "px";
  }, 50);
});

mouseActions.addButton();
mouseActions.addButton();
