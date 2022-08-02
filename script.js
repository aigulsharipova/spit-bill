const button = document.querySelector('#btn1');
const buttonTwo = document.querySelector('#btn2');

buttonTwo.addEventListener('click', calculate);
button.addEventListener('click', showTip);

function showTip(e) {
  tip.style.display = "block";
  e.preventDefault();
}

function calculate(e) {
  e.preventDefault();

  const bill = document.querySelector('#bill').value;
  const people= document.querySelector('#people').value;
  const tip = document.querySelector('#tip').value;

  if (bill === "" || people === "" || people < 1) {
    Swal.fire({
      icon: 'error',
      title: 'Error!',
      text: 'Please enter your information!',
    })};

  let perPerson = bill/people;
  let amountTip = (bill * tip) / people;
  let total = perPerson + amountTip;

 perPerson = perPerson.toFixed(2);
 amountTip = amountTip.toFixed(2);
 total = total.toFixed(2);

document.querySelector('#billSpitPerson').textContent = perPerson;
document.querySelector('#tipSpitPerson').textContent = amountTip;
document.querySelector('#checkSpitPerson').textContent = total;
}