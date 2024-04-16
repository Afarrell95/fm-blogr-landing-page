let menuToggle = document.querySelector(".menu");
let links = document.querySelector(".links");
let openList = document.querySelector(".open-list");
let hamburger = document.querySelector(".hamburger");
let closeX = document.querySelector(".close");

let product = document.getElementById("product");
let company = document.getElementById("company");
let contact = document.getElementById("connect");

let listOne = document.querySelector(".list-one");
let listTwo = document.querySelector(".list-two");
let listThree = document.querySelector(".list-three");

menuToggle.addEventListener("click", function () {
  links.classList.toggle("active");
  openList.classList.toggle("fa-times");
});

hamburger.addEventListener("click", () => {
  hamburger.style.display = "none";
  closeX.style.display = "block";
});

closeX.addEventListener("click", () => {
  hamburger.style.display = "block";
  closeX.style.display = "none";
});

const show = (element, arrowUp) => {
  element.classList.toggle("active-list");
  arrowUp.firstElementChild.classList.toggle("up");
};

product.addEventListener("click", () => show(listOne, product));
company.addEventListener("click", () => show(listTwo, company));
contact.addEventListener("click", () => show(listThree, contact));
