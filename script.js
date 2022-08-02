const button = document.querySelector('#btn1');
const buttonTwo = document.querySelector('#btn2');

button.addEventListener('click', calculate);
function calculate() {
  const bill = document.querySelector('#bill').value;
  const people= document.querySelector('#bill').value;
  const tip = document.querySelector('#tip').value;

  if (bill === "" || people === "") {
    alert("error");
  }
}