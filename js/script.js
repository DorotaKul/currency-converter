let amountElement= document.querySelector (".js-amount");
let currencyElement= document.querySelector (".js-currency");
let resultElement= document.querySelector (".js-result");
let formElement= document.querySelector (".js-form");


formElement.addEventListener("submit", (event) => {
    event.preventDefault();

let amount = +amountElement.value;
let currency = currencyElement.value;

let rateUSD = 4.35;
let rateGBP = 5.30;
let rateEUR = 4.61;

switch (currency){
    case "USD":
        result = amount/ rateUSD;
        break;
    case "GBP":
        result = amount/ rateGBP;
        break;
    case "EUR":
        result = amount/ rateEUR;
        break;

};

resultElement.textContent = `${amount} PLN = ${result.toFixed(2)} ${currency} `;
});






