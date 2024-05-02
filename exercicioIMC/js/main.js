

function CalcularIMC(event) {
    event.preventDefault();
    let altura = document.getElementById('altura').value
    let peso = document.getElementById('peso').value
    let imc = (peso / (altura * altura)).toFixed(2)
    document.getElementById('resultado').innerHTML = `Seu IMC é ${imc}`
}
