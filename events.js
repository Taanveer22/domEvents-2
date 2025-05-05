// event handler option 01 : add directly inline js to it
// <button onclick="document.body.style.backgroundColor = 'yellow'">Make Yellow Body</button> 

// event handler option 02 : safer option
function makeRed() {
  document.body.style.backgroundColor = "red";
}

// event handler option 03: risky option
const makeBlueBtn = document.getElementById("make-blue");
console.log(makeBlueBtn);
// never do this function invocation mistake
// makeBlueBtn.onclick = makeBlue();
// instead of do this
makeBlueBtn.onclick = makeBlue;

function makeBlue() {
  document.body.style.backgroundColor = "blue";
}

// event handler option 03: safer option
const makePurpleBtn = document.getElementById("make-purple");
console.log(makePurpleBtn);
makePurpleBtn.onclick = function makePurple() {
  document.body.style.backgroundColor = "purple";
};

// event handler option 04 :
const pinkBtn = document.getElementById("make-pink");
console.log(pinkBtn);
pinkBtn.addEventListener("click", makePink);

function makePink() {
  document.body.style.backgroundColor = "pink";
}

// event handler option 04 : another way
const greenBtn = document.getElementById("make-green");
console.log(greenBtn);
greenBtn.addEventListener("click", function () {
  document.body.style.backgroundColor = "green";
});


// event handler option 04 : final way
document.getElementById('make-orange').addEventListener('click', function(){
  document.body.style.backgroundColor = 'orange';
})
