console.log("connected");

// list items delete system
const items = document.getElementsByClassName("item");
console.log(items);
for (const item of items) {
    console.log(item);
  item.addEventListener("click", function () {
    console.log(item);
    console.log(item.parentNode.removeChild(item));
  });
}


// list items add system
document.getElementById("btn-add-item").addEventListener("click", function () {
  const listContainer = document.getElementById("list-container");
  const li = document.createElement("li");
  li.innerText = "lorem ispusm dolor added";
  listContainer.appendChild(li);
});
