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
let products;
let pages;
let num = 1;
//Responsiv Design
if (row < 9) {
  document.querySelector("body").classList.remove("h-[135vh]");
  document.querySelector("body").classList.add("h-[85vh]");
}
let pagesNumber = Math.ceil(allProducts.length / row);
//***************************** Loops ******************************
for (let i = 1; i <= pagesNumber; i++) {
  pageBox.innerHTML += `<div itemid="${i}" id="pageNumber${i}" class="pageNumber w-20 h-20 bg-[#B6C4B6]">${i}</div>`;
  if (i === currentPage) {
    let pageNumber = document.getElementById(`pageNumber${i}`);
    pageNumber.classList.remove("bg-[#B6C4B6]");
    pageNumber.classList.add("bg-[#438941]");
  }
}
for (num = 1; num <= row; num++) {
  products = document.querySelectorAll(".product");
  pages = document.querySelectorAll(".pageNumber");
  // console.log(p);
  // console.log(allProducts[p].name);
  productBox.innerHTML += `
    <div class="product w-64 h-64 text-center">
          <img draggable="false"
            src="../media/Entity_50-removebg-preview.png"
            alt=""
            class="productPhoto size-52 mx-auto"
          />
            <p class="productTitle text-3xl">
                ${allProducts[num].name}
            </p>
        </div>
  `;
  if (num !== 0 && num % 3 === 0) {
    productBox.innerHTML += "" + "<div class='break'></div>";
  }
}

pages.forEach(function (page) {
  console.log(page.getAttribute("itemid"));
  page.addEventListener("click", managePages);

  function managePages(p) {
    productBox.innerHTML = "";
    console.log(p.target.getAttribute("itemid"));
    let pageId = p.target.getAttribute("itemid");
    for (num; num <= row * pageId; num++) {
      p.target.classList.remove("bg-[#B6C4B6]");
      p.target.classList.add("bg-[#438941]");
      console.log(allProducts[num]);
      productBox.innerHTML += `
    <div class="product w-64 h-64 text-center">
          <img draggable="false"
            src="../media/Entity_50-removebg-preview.png"
            alt=""
            class="productPhoto size-52 mx-auto"
          />
            <p class="productTitle text-3xl">
                ${allProducts[num].name}
            </p>
        </div>
  `;
      if (num !== 0 && num % 3 === 0) {
        productBox.innerHTML += "" + "<div class='break'></div>";
      }
    }
  }
});
