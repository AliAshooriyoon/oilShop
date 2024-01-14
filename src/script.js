const allProducts = [
  {
    name: "Karottenöl",
    img: "../media/Entity_50-removebg-preview.png",
    id: 1,
    price: 4.99,
  },
  {
    name: "Mandelöl",
    img: "../media/Entity_82-removebg-preview.png",
    id: 2,
    price: 3.99,
  },
  {
    name: "Schwarzöl",
    img: "../media/Entity_115-removebg-preview.png",
    id: 3,
    price: 4.99,
  },
  {
    name: "Sesamöl",
    img: "../media/Entity_121-removebg-preview.png",
    id: 4,
    price: 3.99,
  },
  {
    name: "Kokosnussöl",
    img: "../media/Entity_50-removebg-preview%20(1).png",
    id: 5,
    price: 2.99,
  },
  {
    name: "Haselnussöl",
    img: "../media/Entity_82-removebg-preview.png",
    id: 6,
    price: 1.99,
  },
  {
    name: "Haselnussöl",
    img: "../media/Entity_50-removebg-preview.png",
    id: 7,
    price: 6.99,
  },
  {
    name: "Kokosnussöl",
    img: "../media/Entity_82-removebg-preview.png",
    id: 8,
    price: 7.99,
  },
  {
    name: "Sesamöl",
    img: "../media/Entity_115-removebg-preview.png",
    id: 9,
    price: 2.99,
  },
  {
    name: "Schwarzöl",
    img: "../media/Entity_121-removebg-preview.png",
    id: 10,
    price: 3.99,
  },
  {
    name: "Karottenöl",
    img: "../media/Entity_50-removebg-preview%20(1).png",
    id: 11,
    price: 4.99,
  },
  {
    name: "Mandelöl",
    img: "../media/Entity_82-removebg-preview.png",
    id: 12,
    price: 1.99,
  },
  {
    name: "Haselnussöl",
    img: "../media/Entity_50-removebg-preview.png",
    id: 13,
    price: 4.99,
  },
  {
    name: "Kokosnussöl",
    img: "../media/Entity_50-removebg-preview%20(1).png",
    id: 14,
    price: 1.99,
  },
  {
    name: "Haselnussöl",
    img: "../media/Entity_121-removebg-preview.png",
    id: 15,
    price: 3.99,
  },
  {
    name: "Karottenöl",
    img: "../media/Entity_82-removebg-preview.png",
    id: 16,
    price: 6.99,
  },
  {
    name: "Sesamöl",
    img: "../media/Entity_50-removebg-preview.png",
    id: 17,
    price: 4.99,
  },
  {
    name: "Mandelöl",
    img: "../media/Entity_50-removebg-preview%20(1).png",
    id: 18,
    price: 3.99,
  },
];
const pageBox = document.querySelector(".pagesBox");
const productsBox = document.querySelector(".productsBox");
// let shoppingBox = document.querySelector(".shoppingBox");
let productsNameList = document.querySelector(".productsNameListShow");
let pricesList = document.querySelector(".pricesLIstShow");
let optionsProductList = document.querySelector(".optionsProductListShow");
let currentPage = 1;
let rowContent = 6;
let num = 1;
allPricesElm = document.querySelector(".allPrice");
let allPrices = 0;
let deleted = false;
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
    product.addEventListener("click", () => {
      addProductToCart(
        productsNameList,
        pricesList,
        optionsProductList,
        allPricesElm,
        productInfo,
      );
    });
    num++;
  });
}
function addProductToCart(
  productNameElm,
  productPriceElm,
  ProductOptionsElm,
  allPricesElm,
  product,
) {
  deleted = false;
  let productPhoto = document.createElement("img");
  productPhoto.draggable = false;
  productPhoto.src = product.img;
  productPhoto.classList.add("productsPhoto");
  let productElm = document.createElement("div");
  let countInput = document.createElement("input");
  countInput.value = `${1}`;
  productElm.classList.add("productName");
  productElm.innerHTML = product.name;
  productNameElm.append(productElm);
  productElm.append(productPhoto);
  let productPrice = document.createElement("div");
  productPrice.classList.add("productPrice");
  // product.price *= countInput.value;
  productPrice.innerHTML = `${product.price}$`;
  countInput.classList.add("count");
  allPricesShow(product, allPricesElm);

  let productSetting = document.createElement("div");
  productSetting.classList.add("productSetting");
  ProductOptionsElm.append(productSetting);
  productPriceElm.append(productPrice);
  productSetting.append(countInput);
  let removeButton = document.createElement("div");
  removeButton.classList.add("removeItem");
  removeButton.innerHTML = "Remove";
  productSetting.append(removeButton);
  removeButton.addEventListener("click", () => {
    removeItem(
      productElm,
      productPhoto,
      productPrice,
      productSetting,
      allPrices,
      product,
    );
  });
}
function allPricesShow(product, allPricesElm) {
  if (!deleted) {
    allPrices += product.price;
  } else {
    allPrices -= product.price;
  }
  allPricesElm.innerHTML = `${allPrices.toFixed(2)} $`;
}

function removeItem(
  productElm,
  productPhoto,
  productPriceElm,
  productOptionsElm,
  allPrices,
  product,
) {
  productElm.remove();
  productPhoto.remove();
  productPriceElm.remove();
  productOptionsElm.remove();
  console.log(allPrices);
  console.log(product.price);
  // allPrices = allPrices - product.price;
  deleted = true;
  allPricesShow(product, allPricesElm);
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
