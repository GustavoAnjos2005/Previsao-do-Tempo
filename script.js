let chave = "60429db1d55680a129b321d5bda9ee9d"

function colocarNaTela(dados){
console.log(dados)
document.querySelector(".cidade").innerHTML = "Tempo em " + dados.name
document.querySelector(".temp").innerHTML = Math.floor(dados.main.temp) + "°C"
document.querySelector(".descricao").innerHTML = dados.weather[0].description
document.querySelector(".icon").src = "https://openweathermap.org/img/wn/" + dados.weather[0].icon + ".png"

}

async function buscarCidade(cidade){
let dados = await fetch("https://api.openweathermap.org/data/2.5/weather?q=" +
cidade +
"&appid=" +
chave +
"&lang=pt_br" +
"&units=metric"
)
.then(resposta => resposta.json())

colocarNaTela(dados)
}

function cliqueNoBotao(){
let cidade = document.querySelector(".input-cidade").value

buscarCidade(cidade)
}