
function CalcularMedia(event){
    event.preventDefault();
    let nome = document.getElementById('nome').value
    let Nota1 = parseFloat(document.getElementById('Nota1').value)
    let Nota2 = parseFloat(document.getElementById('Nota2').value)
    let media = (Nota1 + Nota2) / 2
    let media2;
    media2 = media
    document.getElementById('media').value = media 
    if (media2 >= 7){
        media2 = 'aprovado'
        document.getElementById('Resultado').innerHTML = `Ola ${nome} sua media é ${media}, voce foi ${media2}`
    }else if (media2 >= 4 && media2 < 7){
        media2 = 'recuperacao'
        document.getElementById('Resultado').innerHTML = `Ola ${nome} sua media é ${media}, voce esta de ${media2}`
    }else{
        media2 = 'reprovado'
        document.getElementById('Resultado').innerHTML = `Ola ${nome} sua media é ${media}, voce foi ${media2}`
    }
}