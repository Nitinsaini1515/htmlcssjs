const inputFrom = document.querySelector(".inputFrom");
const resultBox = document.querySelector(".resultBox");
const calcButton = document.querySelector(".calcButton");
const from = document.querySelector("#from");
const to = document.querySelector("#to");

async function currencyExchange() {
  try {
    const response = await fetch(
      `https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@2026.10.19/v1/currencies.json`,
    );

    if (!response.ok) {
      throw new Error("The response is not comming");
    }
    const data = await response.json();
    return data;
  } catch (error) {
    throw new Error("The api is not working properly");
  }
}

async function addCurrencies() {
  const mainCuren = await currencyExchange();
  const allKeys = Object.keys(mainCuren);
  allKeys.forEach((elems) => {
    const option = document.createElement("option");
    option.setAttribute("class", "optionFrom");
    option.value = elems;
    option.textContent = elems.toUpperCase();
    from.appendChild(option);
    to.appendChild(option.cloneNode(true));
  });
}
addCurrencies();

async function currencyConver(currency) {
  try {
    const response = await fetch(
      `https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@2026.10.19/v1/currencies/${currency.toLowerCase()}.json`,
    );
    if (!response.ok) {
      throw new Error("There is an error to fetch an api");
    }
    const data = await response.json();
    return data;
  } catch (error) {
    throw new Error(error);
  }
}

async function resultFunction(val) {
  const currFrom = from.value;
  const currTo = to.value;
  if (currFrom == "" || currTo == "") {
    alert("Please select Something");
    return v;
  }

  if (currFrom == currTo) {
    resultBox.value = val;
    return;
  }
  const value = await currencyConver(currFrom);
  if (!value) {
    alert("There is an error during fetching the values");
    return;
  }
  const ansi = value[currFrom][currTo];
  return ansi;
}

calcButton.addEventListener("click", async () => {
  const val = inputFrom.value;
  if (!val) {
    alert("Please Enter Some value");
    return;
  }
  const ans = await resultFunction(val);
  if (ans !== undefined) {
    resultBox.value = val * ans;
  }
});
