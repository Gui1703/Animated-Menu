const container = document.querySelector(".container");
const assLi = document.querySelectorAll("li");

assLi.forEach((li, index) => {
  li.addEventListener("click", (e) => {
    container.querySelector(".activeList").classList.remove("activeList");
    li.classList.add("activeList");

    const indicator = document.querySelector(".indicator");
    indicator.style.transform = `translateX(calc(${index * 90}px))`;
  });
});