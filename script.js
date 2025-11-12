const block = document.querySelector(".block");

const normalSize = function () {
  block.style.height = 30 + "px";
  block.style.width = 30 + "px";
};

const bigSize = function () {
  block.style.height = 40 + "px";
  block.style.width = 40 + "px";
};

document.addEventListener("mousemove", function (e) {
  setTimeout(() => {
    block.style.left = e.clientX - 20 + "px";
    block.style.top = e.clientY - 20 + "px";
  }, 50);
});
