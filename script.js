const button = document.querySelector('#btn1');
const buttonTwo = document.querySelector('#btn2');

button.addEventListener('click', calculate);
function calculate(e) {
  e.preventDefault();
  const bill = document.querySelector('#bill').value;
  const people= document.querySelector('#bill').value;
  const tip = document.querySelector('#tip').value;

  if (bill === "" || people === "" || people < 1) {
    Swal.fire({
      icon: 'error',
      title: 'Error!',
      text: 'Please emter your information!',
    })};

  let perPerson = bill/people;
  let amountTip = (bill * tip) / people;
  let total = perPerson + amountTip;

 perPerson = perPerson.toFixed(2);
 amountTip = amountTip.toFixed(2);
total = total.toFixed(2);

  document.querySelector('#billSplit').textContent = perPerson;
  document.querySelector('#tipSplit').textContent = amountTip;
  document.querySelector('#checkSplit').textContent = total;
}