const sizes = document.querySelectorAll(".size");

for (let size of sizes) {
  size.addEventListener("click", function () {
    size.style.backgroundColor = "blue";
    size.style.color = "white";
  });
}
