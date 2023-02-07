const imc = sessionStorage.getItem("imc");

const label = document.getElementById("imc");

const value = imc;

label.textContent = value;

sessionStorage.setItem("imcResult", imc);


