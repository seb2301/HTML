convertButton = document.querySelector (".convert-button")

function convertvalues ()
{
const inputCurrencyValue = document.querySelector (".input-currency").value

const currencyValueToConvert = document.querySelector (".currency-value-to-convert") // valor em Real

const currencyvalueconverted = document.querySelector (".currency-value") // valor em Real

const dolartoday= 3.2

const convertedvalue = inputCurrencyValue / dolartoday

    currencyValueToConvert.innerHTML = inputCurrencyValue

    currencyvalueconverted.innerHTML = new Intl.NumberFormat("pt-br", {

    style: "currency",
    currency: "BRL"
}) .format (inputCurrencyValue)
    currencyvalueconverted.innerHTML = convertedvalue
    currencyValueToConvert.innerHTML =new Intl.NumberFormat("pt-br", {

        style: "currency",
        currency: "BRL"
    }) .format (inputCurrencyValue)
}


convertButton.addEventListener("click", convertvalues)