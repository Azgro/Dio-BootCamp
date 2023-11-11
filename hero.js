let nome = "Azgro"
let xp = "4879"
let nivel = " "

if (xp <= 1000) {
    nivel = "ferro"    
}
else if (xp <= 6000){
    nivel = "Bronze"
}
else if (xp <= 7000){
    nivel = "Ouro"
}
else if (xp <= 8000){
    nivel = "Platina"
}
else if (xp <= 9000){
   xp = "Acsendente"
}
else if (xp <= 10000){
    nivel = "Imortal"
}
else if (xp >=10001){
    nivel = "Radiante"
}

console.log("Herói :",nome,"\nxp :",xp,"\nNível :",nivel)