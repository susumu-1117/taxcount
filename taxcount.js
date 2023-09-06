'use strict';
const priceInput = document.getElementById('price');
const taxselect = document.getElementById('tax-select');
const taxcountButton = document.getElementById('taxcount');
const resultDivision = document.getElementById('result-area');

taxcountButton.onclick = () => {
  const price = parseInt(priceInput.value);
  const tax = parseInt(taxselect.value);
  let taxprice = null;
  if (tax === 5) {
    taxprice = Math.floor(price * 1.05); // 5%
    console.log(taxprice);
  } else if (tax === 8) {
    taxprice = Math.floor(price * 1.08); // 8%
    console.log(taxprice);
  } else if (tax === 10) {
    taxprice = Math.floor(price * 1.1); // 10%
    console.log(taxprice);
  } else {
    return;
  }

  resultDivision.innerText = '';
  const header = document.createElement('h3');
  header.innerText = `${price}円 の消費税${tax}%の税込価格は${taxprice} 円です`;
  resultDivision.appendChild(header);
}