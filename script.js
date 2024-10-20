const arrows = document.querySelectorAll(".arrow");
const movielists = document.querySelectorAll(".movie-list");

arrows.forEach((arrow, i) => {
  const widthRatio = Math.floor(window.innerWidth / 300);
  console.log(Math.floor(window.innerWidth / 300));
  let clickCounter = 0;
  const imageItem = movielists[i].querySelectorAll("img").length;
  arrow.addEventListener("click", function () {
    clickCounter++;
    if (imageItem - (5 + clickCounter) >= 0) {
      movielists[i].style.transform = `translateX(${
        movielists[i].computedStyleMap().get("transform")[0].x.value - 300
      }px)`;
    } else {
      movielists[i].style.transform = "translateX(0)";
      clickCounter = 0;
    }
  });
});

/* dark mode */

const ball = document.querySelector(".toggle-ball");
const items = document.querySelectorAll(
  ".container,.navbar,.sidebar,.sidebar i,.toggle,.toggle-ball,.movie-list-filterselect,.movie-list-title"
);
ball.addEventListener("click", function () {
  items.forEach((item) => item.classList.toggle("active"));
});
