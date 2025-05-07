console.log("connected bablu vai");

// item-3 clicked
document.getElementById("item-3").addEventListener("click", function (event) {
  //   console.log(event);
  //   console.log(event.target);
  console.log("item-3 clicked");
  event.stopPropagation();
  // event.stopImmediatePropagation();
});

document.getElementById("item-3").addEventListener("mouseenter", function () {
  console.log("item-3 targeted");
});

document.getElementById("item-3").addEventListener("mouseleave", function () {
  console.log("item-3 targeted again");
});
// unordered list clicked
document
  .getElementById("unordered-list")
  .addEventListener("click", function (event) {
    // console.log(event);
    // console.log(event.target);
    console.log("ul clicked");
  });

// section clicked
document
  .getElementById("list-container")
  .addEventListener("click", function (event) {
    // console.log(event);
    // console.log(event.target);
    console.log("section clicked");
  });

// body clicked
document
  .getElementById("page-body")
  .addEventListener("click", function (event) {
    // console.log(event);
    // console.log(event.target);
    console.log("body clicked");
  });
