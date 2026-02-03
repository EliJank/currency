const input = document.getElementById("input");
const currencyNow = document.querySelector(".short");
const currencyNew = document.querySelector(".long");
let value = Number(input.value);
let newValue = 0;
const konvertuoti = document.querySelector(".button");
const btn = document.querySelector("#btn");
const result = document.getElementById("result");
const from = currencyNow.value;
const to = currencyNew.value;

konvertuoti.addEventListener("click", function () {
  const value = Number(input.value); // naujas input kiekvieną kartą
  const from = currencyNow.value; // nauja pasirinkta valiuta
  const to = currencyNew.value; // nauja norima valiuta
  let newValue = 0;
  if (from === "EUR" && to === "Doleriai") {
    newValue = value / 1.18; 
    
  } else if (from === "EUR" && to === "Eurai") {
    newValue = value;
  } else if (from === "EUR" && to === "Svarai") {
    newValue = value / 0.86;
  } else if (from === "EUR" && to === "Zlotai") {
    newValue = value / 4.22;
  } else if (from === "EUR" && to === "Rubliai") {
    newValue = value / 90.11;
  }
  // USD
  else if (from === "USD" && to === "Doleriai") {
    newValue = value;
  } else if (from === "USD" && to === "Eurai") {
    newValue = value / 0.85;
  } else if (from === "USD" && to === "Svarai") {
    newValue = value / 0.73;
  } else if (from === "USD" && to === "Zlotai") {
    newValue = value / 3.58;
  } else if (from === "USD" && to === "Rubliai") {
    newValue = value / 76.45;
  }
  // GBP
  else if (from === "GBP" && to === "Doleriai") {
    newValue = value / 1.37;
  } else if (from === "GBP" && to === "Eurai") {
    newValue = value / 1.16;
  } else if (from === "GBP" && to === "Svarai") {
    newValue = value;
  } else if (from === "GBP" && to === "Zlotai") {
    newValue = value / 4.89;
  } else if (from === "GBP" && to === "Rubliai") {
    newValue = value / 104.42;
  }
  // PLN
  else if (from === "PLN" && to === "Doleriai") {
    newValue = value / 0.28;
  } else if (from === "PLN" && to === "Eurai") {
    newValue = value / 0.24;
  } else if (from === "PLN" && to === "Svarai") {
    newValue = value / 0.2;
  } else if (from === "PLN" && to === "Zlotai") {
    newValue = value;
  } else if (from === "PLN" && to === "Rubliai") {
    newValue = value / 21.34;
  }
  // RUB
  else if (from === "RUB" && to === "Doleriai") {
    newValue = value / 0.013;
  } else if (from === "RUB" && to === "Eurai") {
    newValue = value / 0.011;
  } else if (from === "RUB" && to === "Svarai") {
    newValue = value / 0.0096;
  } else if (from === "RUB" && to === "Zlotai") {
    newValue = value / 0.047;
  } else if (from === "RUB" && to === "Rubliai") {
    newValue = value;
  }
  btn.classList.remove("hide");
  btn.classList.add("btn");
  btn.innerHTML = "Grįžti Atgal";
  const show = document.createElement("h2");
  show.innerHTML = `${value} ${from} yra ${newValue} ${to}`;
  show.className = "result";
  result.appendChild(show);
});
input.addEventListener("input")

btn.addEventListener("click", function () {
  result.innerHTML = "";
  btn.classList.add("hide");

});
