//Desafio classificador nível herói

let nomeHeroi = "jarvis"
let valorXp = 10900
let nivelHeroi = ""

if(valorXp <= 1000 ) {
    nivelHeroi = "Ferro";
}
else if(valorXp >= 1001 && valorXp <= 2000) {
    nivelHeroi = "Bronze";
}
else if(valorXp >= 2001 && valorXp <= 5000) {
    nivelHeroi = "Prata";
}
else if(valorXp >= 5001 && valorXp <= 7000) {
    nivelHeroi = "ouro";
}
else if(valorXp >= 7001 && valorXp <= 8000) {
    nivelHeroi = "Platina";
}
else if(valorXp >= 8001 && valorXp <= 9000) {
    nivelHeroi = "Ascendente";
}
else if(valorXp >= 9001 && valorXp <= 10000) {
    nivelHeroi = "Imortal";
}
else if(valorXp >= 1001) {
    nivelHeroi = "Radiante";
}


console.log("O herói de nome " + nomeHeroi + " está no nível de " + nivelHeroi)
