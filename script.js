const block = document.querySelector(".block");

document.addEventListener("mousemove", function (e) {
  setTimeout(() => {
    block.style.left = e.clientX - 20 + "px";
    block.style.top = e.clientY - 20 + "px";
  }, 50);
});
