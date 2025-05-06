console.log("connected");

document
  .getElementById("confirm-delete")
  .addEventListener("keyup", function (event) {
    console.log(event);
    console.log(event.target);
    console.log(event.target.value);
    const text = event.target.value;
    const btnDelete = document.getElementById('btn-delete');

    if(text === 'delete'){
        btnDelete.removeAttribute('disabled');
    } else{
        btnDelete.setAttribute('disabled', true);
    }
  });

document.getElementById("btn-delete").addEventListener("click", function () {
  const secretInfo = document.getElementById("secret-info");
  secretInfo.style.display = "none";
});
