function wLratio(Vitoria, derrota) {
    let result = Vitoria - derrota
    return result
}


function rank(){
    let resultRank = wLratio (80, 30)
    let nivel = ""
    if (resultRank <= 10){
        nivel = "Ferro"}
    else if (resultRank <= 20){
        nivel = "Bronze"}
    else if (resultRank <= 50){
        nivel = "Prata"}
    else if (resultRank <= 80){
        nivel = "Ouro"}
    else if (resultRank <= 90){
        nivel = "Diamante"}
    else if (resultRank <= 100){
        nivel = "Lendário"}
    else if (resultRank >= 100){
        nivel = "Imortal"}
        return `O Herói tem um saldo de ${resultRank} vitorias e está no nível ${nivel}`
   
}

console.log(rank())