{
    const calculateResult = (amount, currency) => {
        const rateUSD = 4.35;
        const rateGBP = 5.30;
        const rateEUR = 4.61;

        switch (currency) {
            case "USD":
                return amount / rateUSD;

            case "GBP":
                return amount / rateGBP;

            case "EUR":
                return amount / rateEUR;


        }
    };

    const updateResultText = (amount, result, currency) => {
        const resultElement = document.querySelector(".js-result");
        resultElement.textContent = `${amount} PLN = ${result.toFixed(2)} ${currency} `;
        
    }

    const onFormSubmit = (event) => {
        event.preventDefault();

        const amountElement = document.querySelector(".js-amount");
        const currencyElement = document.querySelector(".js-currency");
        
        const amount = +amountElement.value;
        const currency = currencyElement.value;

        const result = calculateResult(amount, currency);

        updateResultText(amount, result, currency);


    };


    const init = () => {
        const formElement = document.querySelector(".js-form");
        formElement.addEventListener("submit", onFormSubmit);
    };

    init();
}





