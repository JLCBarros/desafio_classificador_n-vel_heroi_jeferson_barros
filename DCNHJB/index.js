//Desafio classificador nível herói
//Se XP for menor do que 1.000 = Ferro
//Se XP for entre 1.001 e 2.000 = Bronze
//Se XP for entre 2.001 e 5.000 = Prata
//Se XP for entre 5.001 e 6.000 = Ouro
//Se XP for entre 5.001 e 6.000 = Diamente
//Se XP for entre 7.001 e 8.000 = Platina
//Se XP for entre 8.001 e 9.000 = Ascendente
//Se XP for entre 9.001 e 10.000= Imortal
//Se XP for maior ou igual a 10.001 = Radiante
//variáveis (nome) (quantidade de XP)
let nomeHeroi = "goku"
let valorXp = "2.500"
let nivelHeroi = ""
//operadores
if(valorXp <=== "1.000"){
    nivelHeroi = "Ferro"
    }

else if(valorXp >=== "1.001" && <=== "2.000"){
    nivelHeroi = "Bronze"
    }

else if(valorXp >=== "2.001" && <=== "5.000"){
    nivelHeroi = "Prata"
    }

else if(valorXp >=== "5.001" && <=== "6.000"){
    nivelHeroi = "Ouro"
    }
    
else if(valorXp >=== "6.001" && <=== "7.000"){
    nivelHeroi = "Diamanate"
    }

else if(valorXp >=== "7.001" && <=== "8.000"){
    nivelHeroi = "Platina"
    }

else if(valorXp >=== "8.001" && <=== "9.000"){
    nivelHeroi = "Ascendente"
    }

else if(valorXp >=== "9.001" && <=== "10.000"){
    nivelHeroi = "Imortal"
    }

else(valorXp >=== "10.001"){
    nivelHeroi = "Radiante"
    }
//laços de repetição
//estrutura de decisões
//saída, mensagem: "O herói de nome () está no nível de ()"
console.log("O herói de nome " + nomeHeroi " está no nível de " nivelHeroi)
