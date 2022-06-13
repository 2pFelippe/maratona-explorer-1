const respostas = [
 "Certeza!",
  "Não tenho tanta certeza.",
  "É decididamente assim.",
  "Não conte com isso.",
  "Sem dúvidas!",
  "Pergunte novamente mais tarde.",
  "Sim, definitivamente!",
  "Minha resposta é não.",
  "Você pode contar com isso.",
  "Melhor não te dizer agora.",
  "A meu ver, sim.",
  "Minhas fontes dizem não.",
  "Provavelmente.",
  "Não é possível prever agora.",
  "Perspectiva boa.",
  "As perspectivas não são tão boas.",
  "Sim.",
  "Concentre-se e pergunte novamente.",
  "Sinais apontam que sim."
]
const elementoResposta = document.querySelector("#resposta")
const inputPerguntar = document.querySelector("#inputPerguntar")
const buttonPerguntar = document.querySelector("#buttonPerguntar")

function fazerPergunta() {
  if(inputPerguntar.value == "") {
  alert("Digite sua mensagem")
  return
  }

buttonPerguntar.setAttribute("disabled", true)

const totalRespostas = respostas.length

const numeroAleatorio = Math.floor(Math.random() * totalRespostas)

const pergunta="<div>" + inputPerguntar.value + "</div>"

elementoResposta.innerHTML= pergunta + respostas[numeroAleatorio]

elementoResposta.style.opacity= 1;

setTimeout(function() {elementoResposta.style.opacity=0; buttonPerguntar.removeAttribute("disabled")}, 3000)
}