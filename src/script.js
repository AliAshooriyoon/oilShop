const allProducts = [
  { name: "Karottenöl", id: 1 },
  { name: "Mandelöl", id: 2 },
  { name: "Schwarzöl", id: 3 },
  { name: "Sesamöl", id: 4 },
  { name: "Kokosnussöl", id: 5 },
  { name: "Haselnussöl", id: 6 },
  { name: "Haselnussöl", id: 7 },
  { name: "Kokosnussöl", id: 8 },
  { name: "Sesamöl", id: 9 },
  { name: "Schwarzöl", id: 10 },
  { name: "Karottenöl", id: 11 },
  { name: "Mandelöl", id: 12 },
  { name: "Haselnussöl", id: 13 },
  { name: "Kokosnussöl", id: 14 },
  { name: "Haselnussöl", id: 15 },
  { name: "Karottenöl", id: 16 },
  { name: "Sesamöl", id: 17 },
  { name: "Mandelöl", id: 18 },
];
const pageBox = document.querySelector(".pagesBox");
const productBox = document.querySelector(".productBox");
let currentPage = 1;
let row = 6;
//Responsiv Design
