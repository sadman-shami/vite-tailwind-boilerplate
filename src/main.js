window.addEventListener("load", () => {
  const countButton = document.getElementById("count"),
    countText = document.getElementById("count-number");
  let current = 0;
  countButton.addEventListener("click", () => {
    current++;
    countText.textContent = current;
  });
});
