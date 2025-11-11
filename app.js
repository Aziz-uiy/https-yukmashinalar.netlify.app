const listings = [
  { title: "MAN TGX 18.440 (2016)", price: "$23,500", img: "images/mantgx.jpg", meta: "450,000 km · Toshkent" },
  { title: "DAF XF 105.460 (2015)", price: "$21,900", img: "images/dafxf.jpg", meta: "500,000 km · Namangan" },
  { title: "Mercedes-Benz Actros (2017)", price: "$27,000", img: "images/mercedes.jpg", meta: "380,000 km · Samarqand" }
];

const tpl = document.getElementById("card-tpl");
const container = document.getElementById("listings");

function render(data) {
  container.innerHTML = "";
  for (const item of data) {
    const node = tpl.content.cloneNode(true);
    node.querySelector("img").src = item.img;
    node.querySelector("img").alt = item.title;
    node.querySelector(".title").textContent = item.title;
    node.querySelector(".price").textContent = item.price;
    node.querySelector(".meta").textContent = item.meta;
    container.appendChild(node);
  }
}

render(listings);

document.getElementById("search").addEventListener("submit", e => {
  e.preventDefault();
  const q = document.getElementById("q").value.toLowerCase();
  const filtered = listings.filter(x => x.title.toLowerCase().includes(q));
  render(filtered);
});


  
