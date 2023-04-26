var highlight = document.getElementsByClassName("box");
for (var i = 0; i < highlight.length; i++) {
  highlight[i].addEventListener("mouseover", function () {
    this.style.backgroundColor = "red";
    this.style.opacity = "0.5";
    this.style.border = "3px solid yellow";
  });
  highlight[i].addEventListener("mouseout", function () {
    this.style.backgroundColor = "rgb(53, 53, 135)";
    this.style.opacity = "1";
    this.style.border = "1px solid black";
  });
  highlight[i].addEventListener("click", function () {
    alert("You clicked on the highlighted area!");
  });
}
const products = [
  {
    name: "Product 1",
    price: 100000,
    image: "https://via.placeholder.com/150x150",
  },
  {
    name: "Product 2",
    price: 200000,
    image: "https://via.placeholder.com/150x150",
  },
  {
    name: "Product 3",
    price: 300000,
    image: "https://via.placeholder.com/150x150",
  },
  {
    name: "Product 4",
    price: 400000,
    image: "https://via.placeholder.com/150x150",
  },
  {
    name: "Product 5",
    price: 400000,
    image: "https://via.placeholder.com/150x150",
  },
  {
    name: "Product 6",
    price: 400000,
    image: "https://via.placeholder.com/150x150",
  },
];

// Lặp qua mỗi sản phẩm trong mảng và thêm chúng vào trang web
const productSection = document.querySelector(".products");

for (let i = 0; i < products.length; i++) {
  // Tạo phần tử sản phẩm
  const productElement = document.createElement("div");
  productElement.classList.add("product");

  // Thêm hình ảnh sản phẩm
  const productImage = document.createElement("img");
  productImage.src = products[i].image;
  productImage.alt = products[i].name;
  productElement.appendChild(productImage);

  // Thêm tên sản phẩm
  const productName = document.createElement("h3");
  productName.textContent = products[i].name;
  productElement.appendChild(productName);

  // Thêm giá sản phẩm
  const productPrice = document.createElement("p");
  productPrice.textContent =
    "Giá: " + products[i].price.toLocaleString("vi-VN") + " VND";
  productElement.appendChild(productPrice);

  // Thêm nút "Thêm vào giỏ hàng"
  const addToCartButton = document.createElement("button");
  addToCartButton.classList.add("add-to-cart");
  addToCartButton.textContent = "Thêm vào giỏ hàng";
  productElement.appendChild(addToCartButton);
  addToCartButton.addEventListener("click", function () {
    alert("Bạn đã thêm sản phẩm vào giở hàng thành công!");
  });

  // Thêm phần tử sản phẩm vào phần tử chứa sản phẩm
  productSection.appendChild(productElement);
}
