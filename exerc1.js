function atravessaRua(X, Y, Z){
    let valor = ((Y - X) / Z);
    if (Number.isInteger(valor)){
        return valor;
    } else {
        valorCorreto = Math.floor(valor + 1);
        return valorCorreto;
    }
}

x = 5;
y = 40;
d = 1;
let passos = 0;

for(let i = x;i < y;i+=d){
    console.log("Andando");
    passos++;
    console.log(i);
}

console.log(passos);
console.log(atravessaRua(5,40,1));