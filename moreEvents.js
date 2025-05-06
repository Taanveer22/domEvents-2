console.log("hello");

// click event
document.getElementById("btn-event-1").addEventListener("click", function () {
  console.log("click event triggered");
});

// mouseenter event
document
  .getElementById("btn-event-2")
  .addEventListener("mouseenter", function () {
    console.log("mouseenter event triggered");
  });

//   mousemove event
document
  .getElementById("btn-event-3")
  .addEventListener("mousemove", function () {
    console.log("mouse move event triggered");
  });

// focus event
document.getElementById("input-event-1").addEventListener("focus", function () {
  console.log("focus event triggered inside input field");
});

// blur event
document.getElementById("input-event-2").addEventListener("blur", function () {
  console.log("blur event triggered inside input filed");
});

// keydown event
document
  .getElementById("input-event-3")
  .addEventListener("keydown", function (event) {
    console.log("keydown event triggered inside input field");
    console.log(event);
    console.log(event.target);
    console.log(event.target.value);
  });

// keypress event
document
  .getElementById("input-event-4")
  .addEventListener("keypress", function (event) {
    console.log("keypress event triggered inside input field");
    console.log(event);
    console.log(event.target.value);
  });

// keyup event
document.getElementById('input-event-5').addEventListener('keyup', function(event){
    console.log('keyup event triggered inside input field');
    console.log(event);
    console.log(event.target);
    console.log(event.target.value);
})
