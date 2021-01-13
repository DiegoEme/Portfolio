const navToggle = document.querySelector(".nav-toggle");
const navLinks = document.querySelectorAll(".nav__link");

navToggle.addEventListener("click", () => {
  document.body.classList.toggle("nav-open");
});

navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    document.body.classList.remove("nav-open");
  });
});

const cards = document.querySelectorAll(".flip-card");

const grid = document.getElementById("grid");
grid.addEventListener("click", cartas);

function cartas(e) {
  let carta = e.target;

  if (!carta.matches("img")) {
    return;
  }

  if (carta.classList.contains("imagen")) {
    imagenes.push(carta.alt);
    console.log("carta", imagenes);
  }
}

cards.forEach((card) => card.addEventListener("click", flipCard));

function flipCard() {
  if (this.classList.contains("flip")) {
    this.classList.remove("flip");
  } else {
    this.classList.add("flip");
  }
}