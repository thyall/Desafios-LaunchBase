const nome = 'Dgreville'
const idade = 24
const sexo = 'Masculino'
const peso = 71.5
const altura = 1.77
const contribuição = 80

const imc = peso/(altura * altura)
console.log(imc)

if (imc >= 30){
    console.log(`${nome} você está acima do peso`)
}
else {
    console.log(`${nome} você não está acima do peso`)
}

if(sexo == 'Masculino'){
    if((idade + contribuição) >= 95){
        console.log(`${nome} você pode se aposentar`)
    }
    else{
        console.log(`${nome} você não pode se aposentar`)
    }
}
else{
    if((idade + contribuição) >= 85){
        console.log(`${nome} você pode se aposentar`)
    }
    else{
        console.log(`${nome} você não pode se aposentar`)
    }
}