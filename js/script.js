const eNumero = (numero) => /^[0-9]+$/.test(numero);

const cepValido = (cep) => cep.length == 9 && eNumero(cep);

const cep = document.querySelector("#cep");

const showData = (result) => {
  for (const campo in result) {
    if (document.querySelector("#" + campo)) {
      document.querySelector("#" + campo).value = result[campo];
    }
  }
}; 
cep.addEventListener("blur", (event) => {
  var idCep = cep.value.replace("-", "");

  const options = {
    method: "GET",
    mode: "cors",
    cache: "default",
  };

  const url = `https://viacep.com.br/ws/${idCep}/json/`;
  fetch(url, options)
    .then((resp) => {
      return resp.json();
    })
    .then((data) => {
      showData(data);
    })
    .catch((error) => {
      console.log("error: CEP não encontrado!! " + error);
    });
});

var nome = document.getElementById("nome");
var email = document.getElementById("email");
var numero = document.getElementById("numero");
var error = document.getElementById("error");
error.style.color = "red";

function enviarFormulario() {
  console.log("Formulario Enviado");

  var msgErro = [];

  if (nome.value === null || nome.value === "") {
    msgErro.push("Digite um nome");
  }

  if (email.value === null || email.value === "") {
    msgErro.push("Digite um email");
  }

  if (cep.value === null || cep.value === "") {
    msgErro.push("Digite o cep");
  }

  if (numero.value === null || numero.value === "") {
    msgErro.push("Digite um número");
  } else {
    alert("Formulario enviado!!");
    document.getElementById("form").reset();
  }

  error.innerHTML = msgErro.join("-     ");

  return false;
}
