const amountElement= document.querySelector (".js-amount");
const currencyElement= document.querySelector (".js-currency");
const resultElement= document.querySelector (".js-result");
const formElement= document.querySelector (".js-form");


formElement.addEventListener("submit", (event) => {
    event.preventDefault();

const amount = +amountElement.value;
const currency = currencyElement.value;

const rateUSD = 4.35;
const rateGBP = 5.30;
const rateEUR = 4.61;

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






