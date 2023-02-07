const imc = sessionStorage.getItem("imcResult");

let td = document.createElement("td")

td.innerHTML = imc;

document.getElementById("imc1").appendChild(td)
console.log(imc);