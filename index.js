//classificador de nível de herói

console.log("Vamos classificar o seu herói?!");

//variáveis

let nomeDoHeroi = "Arthas";
let XpDoHeroi = 10500;
let nivelDoHeroi;

if (XpDoHeroi < 1000) {
    nivelDoHeroi = "Ferro"; 
} else if (XpDoHeroi >= 1001 && XpDoHeroi < 2000) {
    nivelDoHeroi = "Bronze"; 
} else if (XpDoHeroi >= 2001 && XpDoHeroi < 5000) {
    nivelDoHeroi = "Prata"; 
} else if (XpDoHeroi >= 5001 && XpDoHeroi < 7000) {
    nivelDoHeroi = "Ouro"; 
} else if (XpDoHeroi >= 7001 && XpDoHeroi < 8000) {
    nivelDoHeroi = "Platina"; 
}  else if (XpDoHeroi >= 8001 && XpDoHeroi < 9000) {
    nivelDoHeroi = "Ascendente"; 
} else if (XpDoHeroi >= 9001 && XpDoHeroi < 10000) {
    nivelDoHeroi = "Imortal";
} else {
    nivelDoHeroi = "Radiante";
}

console.log("A classificação do seu herói " + nomeDoHeroi + " é: " + nivelDoHeroi + ".");

//mostrando quais  atividades concluir para avançar de elo

if (nivelDoHeroi === "Ferro" || nivelDoHeroi === "Bronze") {
    console.log("Conclua atividades de nível Aprendiz para avançar de elo.");
} else if (nivelDoHeroi === "Prata" || nivelDoHeroi === "Ouro") {
    console.log("Conclua atividades de nível Aventureiro para avançar de elo.");
} else if (nivelDoHeroi === "Platina" || nivelDoHeroi === "Ascendente") {
    console.log("Conclua atividades de nível Explorador para avançar de elo.");
} else if (nivelDoHeroi === "Imortal") {
    console.log("Conclua atividades de nível Imortal  para avançar de elo.");
} else {
    console.log("Parabéns! Você atingiu o elo máximo! Continue concluindo tarefas de nível Radiante para chegar ao  TOP 100 do servidor.");
}