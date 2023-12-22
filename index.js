let productEl = document.getElementById("product");
let searchInputEl = document.getElementById("searchInput");

let searchInputValue = "";
// let productList = [];
// console.log(productList);

createDisplyItems = (dataItem) => {
  let createProductContainerEl = document.createElement("div");
  createProductContainerEl.classList.add("data-item-container");
  productEl.appendChild(createProductContainerEl);

  let createImageContainer = document.createElement("div");
  createImageContainer.classList.add("image-badge-container");
  createProductContainerEl.appendChild(createImageContainer);

  let productBadge = document.createElement("p");
  productBadge.textContent = dataItem.productBadge;
  productBadge.classList.add("productBadge");
  createImageContainer.appendChild(productBadge);

  let imageItm = document.createElement("img");
  imageItm.src = dataItem.productImage;
  imageItm.classList.add("image-item");
  createImageContainer.appendChild(imageItm);

  let createTitleContainer = document.createElement("div");
  createProductContainerEl.appendChild(createTitleContainer);

  let titleEl = document.createElement("h1");
  titleEl.textContent = dataItem.productTitle;
  titleEl.classList.add("productes-title");
  createTitleContainer.appendChild(titleEl);

  let badgeElContainer = document.createElement("div");

  createTitleContainer.appendChild(badgeElContainer);

  let createVariantsIt = document.createElement("p");
  createVariantsIt.classList.add("variants");
  createVariantsIt.textContent = dataItem.productVariants.map((each) => {
    return each.v1;
  });
  badgeElContainer.appendChild(createVariantsIt);

  let createVariantsIt2 = document.createElement("p");
  createVariantsIt2.classList.add("variants");
  createVariantsIt2.textContent = dataItem.productVariants.map((each) => {
    return each.v2;
  });
  badgeElContainer.appendChild(createVariantsIt2);

  let createVariantsIt3 = document.createElement("p");
  createVariantsIt3.classList.add("variants");
  createVariantsIt3.textContent = dataItem.productVariants.map((each) => {
    return each.v3;
  });
  badgeElContainer.appendChild(createVariantsIt3);
};

getProduct = async (searchInputValue) => {
  try {
    const url = "https://mocki.io/v1/0934df88-6bf7-41fd-9e59-4fb7b8758093";
    const response = await fetch(url);
    const data = await response.json();
    const formattedData = data.data.map((each) => ({
      productTitle: each.product_title,
      productBadge: each.product_badge,
      image: each.product_image,
      productVariants: each.product_variants,
    }));
    const productList = formattedData;
    for (let dataItem of productList) {
      let va = dataItem.productVariants;

      if (va.includes(searchInputValue)) {
        createDisplyItems(dataItem);
      }
      createDisplyItems(dataItem);
    }
  } catch (error) {
    console.log("Error from data Fetch", error);
  }
};

function searchInput(event) {
  searchInputValue = event.target.value;
  getProduct(searchInputValue);
}

getProduct();
searchInputEl.addEventListener("keyup", searchInput);
