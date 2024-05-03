

function CalcularIMC(event) {
    event.preventDefault();
    let altura = document.getElementById('altura').value
    let peso = document.getElementById('peso').value
    let imc = (peso / (altura * altura)).toFixed(2)
    let corpo1 = document.getElementById('corpo1').innerHTML;
    let corpo2 =document.getElementById('corpo2').innerHTML;
    let corpo3 = document.getElementById('corpo3').innerHTML;
    let corpo4 = document.getElementById('corpo4').innerHTML;
    let corpo5 = document.getElementById('corpo5').innerHTML;
    let corpo6 = document.getElementById('corpo6').innerHTML;
    document.getElementById('resultado').innerHTML = `Seu IMC é ${imc}. Sua classe é ${classeImc(imc)} `
    const container = document.getElementById('resultado');
    container.style.background = 'linear-gradient(#97a3f3, #998bc4, #67639f)';
    document.getElementById('resultado2').innerHTML = `${corpoImc(imc, corpo1, corpo2, corpo3, corpo4, corpo5, corpo6)}`

}

function classeImc(imc) {
    const classe = ['abaixo do normal', 'normal', 'sobrepeso', 'obesidade grau I', 'obesidade grau II', 'obesidade grau III']
    
    if (imc < 18.5) {
        return classe[0];
    } else if (imc < 24.9) {
        return classe[1];
    } else if (imc < 29.9) {
        return classe[2];
    } else if (imc < 34.9) {
        return classe[3];
    } else if (imc < 39.9) {
        return classe[4];
    } else {
        return classe[5];
    }
}


    function corpoImc(imc, corpo1, corpo2, corpo3, corpo4, corpo5, corpo6) {
        if (imc < 18.5) {
            return corpo1;
        } else if (imc < 24.9) {
            return corpo2;
        } else if (imc < 29.9) {
            return corpo3;
        } else if (imc < 34.9) {
            return corpo4;
        } else if (imc < 39.9) {
            return corpo5;
        } else {
            return corpo6;
        }
    }