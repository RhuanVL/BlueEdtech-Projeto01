const prompt = require("prompt-sync")();

function pause (time) {
  return new Promise((rep) => setTimeout(rep, time));
}

pause(300).then(() => {               
console.log(`\nA história do nosso herói começa a muito tempo atrás em uma terra muito distante, onde combates mortais eram muito comuns,
dragões, fanstasmas e demônios coexistiam nesse mundo com os humanos. Num certo dia nosso herói chamado Vlad, teve a missão matar o dragão 
Bermogan e também de encontrar o filho do imperador que desapareceu tentando derrotar o temido dragão, missão dada pelo imperador Castellia, 
imperador da nação Lucciz, sendo assim, nosso herói precisa viajar até os bosques sombrios que ficava a noroeste de Lucciz, o tempo de viagem 
consistia em 3 dias e 3 noites até o local e durante essa jornada, nosso herói teve muitas surpresas e desafios para solucionar, tais como
lidar com quadrilha de ladrões, demônios que o perseguia constantemente, escassez de alimentos de água, um urso gigante que o tentou atacar
enquanto ele dormia...\n`);
}
    
let sim = 0;

//1º pergunta
const seuCavaloSobreviveu = prompt("O cavalo de Vlad conseguiu sobreviver até o combate final? sim ou não? ");

if(seuCavaloSobreviveu === "Sim" || seuCavaloSobreviveu === "SIM" || seuCavaloSobreviveu === "sim" || seuCavaloSobreviveu === "s")
{
    sim += 1;
}
else{
    console.log("Não sobreviveu... ");
}

//2º pergunta
const pegouPocoesMagicas = prompt("Vlad obteve todas as poções mágicas durante sua jornada e utilizou contra bergamon? sim ou não? ");

if(pegouPocoesMagicas === "Sim" || pegouPocoesMagicas === "SIM" || pegouPocoesMagicas === "sim" || pegouPocoesMagicas === "s")
{
    sim += 1;
}
else{
    console.log("Não pegou... ");
}

//3º pergunta
const arrancouCabeca = prompt("Vlad consegiu derrotar bergamon, ele arrancou sua cabeça com premio para levar para o imperador? sim ou não ");

if(arrancouCabeca === "Sim" || arrancouCabeca === "SIM" || arrancouCabeca === "sim" || arrancouCabeca === "s")
{
    sim += 1;
}
else{
    console.log("Não arrancou... ");
}

//4º pergunta
const descobriuBauSecreto = prompt("Vlad encontrou o Bau secreto que continha uma arma formidável dentro da caverna de Bergamon? sim ou não? ");

if(descobriuBauSecreto === "Sim" || descobriuBauSecreto === "SIM" || descobriuBauSecreto === "sim" || descobriuBauSecreto === "s")
{
    sim += 1;
}
else{
    console.log("Não descobriu... ");
}

//5º pergunta
const encontrouJovem = prompt("Vlad encontrou o jovem filho do imperador no final da sua Jornada? sim ou não? ");

if(encontrouJovem === "Sim" || encontrouJovem === "SIM" || encontrouJovem === "sim" || encontrouJovem === "s")
{
    sim += 1;
}
else{
    console.log("Não encontrou... ");
}


if(sim === 0){
    console.log("\nVocê não conseguiu cumprir sua missão, agora se tornou uma vergonha para o imperador e para toda a nação de Lucciz.");
    console.log("\n####GAME OVER####");
}
else if(sim === 1 || sim === 2){
    console.log("\nVocê falhou, mas ainda tem uma segunda chance se persistir.");
    console.log("\n####GAME OVER####");
}
else if(sim === 3){
    console.log("\nVocê conseguiu cumprir sua missão, mas teve sorte de não morrer ou falhar.");
    console.log("\n####GAME OVER####");
}
else if(sim === 4){
    console.log("\nVocê cumpriu bem seu objetivo, seu esforço é admirável, porém ainda podia ter saido melhor");
    console.log("\n####GAME OVER####");
}
else if(sim === 5){
    console.log("\nVocê cumpriu de maneira perfeita sua missão, e o Imperador o nomeou o novo herói da nação de Lucciz.");
    console.log("\n####GAME OVER####");
}

Console.log("\tObrigado Por Jogar!");
