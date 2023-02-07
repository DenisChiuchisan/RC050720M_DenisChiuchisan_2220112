calculateBtn.addEventListener("click", function() {
  const altura = document.querySelector("#altura").value;

  const peso = document.querySelector("#peso").value;

  const imc = peso / (altura * altura);

  let duascasasIMC = imc.toFixed(2);

  sessionStorage.setItem("imc", duascasasIMC);

  window.open ('imc.html', "_self");
});

