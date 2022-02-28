function soma (){
    console.log(10+10)
    
}
soma(10,10)


function podeTirarCarteiraDeMotorista(idade) {
    if(idade < 18) {
        return "pessoa menor de idade.Infelizmente não é possivel tirar a CNH"
    } else {
        return "opa,você ja pode tirar a CNH"
    }
}
console.log(podeTirarCarteiraDeMotorista(10))