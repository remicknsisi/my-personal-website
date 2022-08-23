const h2 = document.createElement("h2");
h2.textContent = "this is added by JS";
document.querySelector("body").appendChild(h2);

const input = document.getElementById('button');

function clickAlert() {
  alert('I was clicked!');
}

input.addEventListener('click', clickAlert);