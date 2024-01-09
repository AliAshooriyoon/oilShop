const allProducts = [
  { name: "Karottenöl", img: "../media/Entity_50-removebg-preview.png", id: 1 },
  { name: "Mandelöl", img: "../media/Entity_82-removebg-preview.png", id: 2 },
  { name: "Schwarzöl", img: "../media/Entity_115-removebg-preview.png", id: 3 },
  { name: "Sesamöl", img: "../media/Entity_121-removebg-preview.png", id: 4 },
  {
    name: "Kokosnussöl",
    img: "../media/Entity_50-removebg-preview%20(1).png",
    id: 5,
  },
  {
    name: "Haselnussöl",
    img: "../media/Entity_82-removebg-preview.png",
    id: 6,
  },
  {
    name: "Haselnussöl",
    img: "../media/Entity_50-removebg-preview.png",
    id: 7,
  },
  {
    name: "Kokosnussöl",
    img: "../media/Entity_82-removebg-preview.png",
    id: 8,
  },
  { name: "Sesamöl", img: "../media/Entity_115-removebg-preview.png", id: 9 },
  {
    name: "Schwarzöl",
    img: "../media/Entity_121-removebg-preview.png",
    id: 10,
  },
  {
    name: "Karottenöl",
    img: "../media/Entity_50-removebg-preview%20(1).png",
    id: 11,
  },
  { name: "Mandelöl", img: "../media/Entity_82-removebg-preview.png", id: 12 },
  {
    name: "Haselnussöl",
    img: "../media/Entity_50-removebg-preview.png",
    id: 13,
  },
  {
    name: "Kokosnussöl",
    img: "../media/Entity_50-removebg-preview%20(1).png",
    id: 14,
  },
  {
    name: "Haselnussöl",
    img: "../media/Entity_121-removebg-preview.png",
    id: 15,
  },
  {
    name: "Karottenöl",
    img: "../media/Entity_82-removebg-preview.png",
    id: 16,
  },
  { name: "Sesamöl", img: "../media/Entity_50-removebg-preview.png", id: 17 },
  {
    name: "Mandelöl",
    img: "../media/Entity_50-removebg-preview%20(1).png",
    id: 18,
  },
];
const pageBox = document.querySelector(".pagesBox");
const productsBox = document.querySelector(".productsBox");
let currentPage = 1;
let rowContent = 6;
let num = 1;
function showProducts(allProducts, row, currenP, productsElm) {
  productsElm.innerHTML = "";
  let endIndex = row * currenP;
  let startIndex = endIndex - row;
  let productsShow = allProducts.slice(startIndex, endIndex);
  console.log(productsShow);
  productsShow.forEach((productInfo) => {
    let product = document.createElement("div");
    product.classList.add("product");
    let productPhoto = document.createElement("img");
    productPhoto.classList.add("productPhoto");
    productPhoto.src = productInfo.img;
    product.append(productPhoto);
    let productTitle = document.createElement("p");
    productTitle.innerHTML = productInfo.name;
    productTitle.classList.add("productTitle");
    product.append(productTitle);
    productsElm.append(product);
    num++;
  });
  // for (let i = 0; i < endIndex; i++) {
  //
  // }
}
function showPages(allProducts, pageElm, row) {
  pageElm.innerHTML = "";
  let pagesNum = Math.ceil(allProducts.length / row);
  for (let i = 1; i <= pagesNum; i++) {
    let btn = generatePage(allProducts, i);
    pageElm.append(btn);
  }
}

function generatePage(allProducts, pageNum) {
  let page = document.createElement("div");
  page.classList.add("page");
  page.innerHTML = pageNum;
  if (currentPage === pageNum) {
    page.classList.add("selectedPage");
  }
  page.addEventListener("click", () => {
    currentPage = pageNum;
    showProducts(allProducts, rowContent, currentPage, productsBox);
    let oldPage = document.querySelector(".selectedPage");
    oldPage.classList.remove("selectedPage");
    page.classList.add("selectedPage");
  });
  return page;
}

showProducts(allProducts, rowContent, currentPage, productsBox);
showPages(allProducts, pageBox, rowContent, currentPage);
