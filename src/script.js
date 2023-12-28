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
const pageNumber1 = document.querySelector("#pageNumber1");
const pageNumber2 = document.querySelector("#pageNumber2");
const pageNumber3 = document.querySelector("#pageNumber3");
const pageNumber4 = document.querySelector("#pageNumber4");
const products = document.querySelectorAll(".product");
const productBox = document.querySelector(".productBox");
let currentPage = 1;
let row = 9;
let pagesNumber = Math.ceil(allProducts.length / row);
//***************************** Loops ******************************
for (let i = 1; i <= pagesNumber; i++) {
  pageBox.innerHTML += `<div id="pageNumber${i}" class="pageNumber w-20 h-20 bg-[#B6C4B6]">${i}</div>`;
  if (i === currentPage) {
    let pageNumber = document.getElementById(`pageNumber${i}`);
    pageNumber.classList.remove("bg-[#B6C4B6]");
    pageNumber.classList.add("bg-[#438941]");
  }
}
for (let p = 1; p <= row; p++) {
  console.log(p);
  console.log(allProducts[p].name);
  productBox.innerHTML += `
    <div class="product w-64 h-64 text-center">
          <img draggable="false"
            src="../media/Entity_50-removebg-preview.png"
            alt=""
            class="productPhoto size-52 mx-auto"
          />
            <p class="productTitle text-3xl">
                ${allProducts[p].name}
            </p>
        </div>
  `;
  if (p !== 0 && p % 3 === 0) {
    console.log("true" + p);
    productBox.innerHTML += "" + "<div class='break'></div>";
  }
}
