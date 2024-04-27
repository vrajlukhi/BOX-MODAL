let products = JSON.parse(localStorage.getItem('product')) || [];

const ui = (products) => {
  document.getElementById("uimaker").innerHTML = ''
  products.map((product) => {
    let img = document.createElement("img");
    img.src = product.img;
    let name = document.createElement("h3");
    name.innerHTML = product.name;
    let price = document.createElement("h4");
    price.innerHTML = product.price;
    let category = document.createElement("p");
    category.innerHTML = product.category;
    let button = document.createElement("button");
    button.innerhtml = "Add To Cart";
    let div = document.createElement("div");
    div.append(img, name, price, category);
    document.getElementById("uimaker").append(div);
  });
};

ui(products)
const productinfo = (event) => {
  event.preventDefault();
  let product = {
    name: document.getElementById("name").value,
    img: document.getElementById("img").value,
    price: document.getElementById("price").value,
    category: document.getElementById("category").value,
  };
  products.push(product);
  localStorage.setItem("product", JSON.stringify(products));
  ui(products);
};

document.querySelector("form").addEventListener("submit", productinfo);

const lth = () => {
  let data = products.sort((a, b) => a.price - b.price)
  ui(data)
}
document.getElementById("blth").addEventListener("click", lth)
const htl = () => {
  let data = products.sort((a, b) => b.price - a.price)
  ui(data)
}
document.getElementById("bhtl").addEventListener("click", htl)
// filter 

const Handelcategory = (cat) => {
  let data = products.filter((value) => value.category == cat);
  ui(data);
};

let cat = ["laptop","phone","tablet"];

for (let i = 0; i < cat.length; i++) {
  let btn = document.createElement("button");
  btn.innerHTML = cat[i];
  btn.setAttribute("id", cat[i]);
  document.getElementById("btns").append(btn)
}

for (let i = 0; i < cat.length; i++) {
  document.getElementById(cat[i]).addEventListener("click", () => Handelcategory(cat[i]));
}
// search

let search=()=>{
  let val=document.getElementById("value").value
  let data = products.filter((se) => se.name.include(val.toLowerCase()));
  ui(data);
}
document.getElementById("value").addEventListener("keypress",(e)=>{
  if(e.key=="Enter"){
    search()
  }
})
document.getElementById("search").addEventListener("click",search)