function carregar () { 
var msg = document.getElementById ("msg")
var img = document.getElementById ("imagem")
var data =  new Date ()
var hora = data.getHours ()


msg.innerHTML = `<h2>Agora são ${hora} horas.</h2>`


if (hora >= 0 && hora < 12) {
    // BOM DIA!
    img.src = "Imagens/manha.jpg"
    document.body.style.backgroundColor = '#b4b9bc'
}

else if (hora >12 && hora <18) {
    // BOA NOITE ffc796
    img.src = "Imagens/dia.jpg"
    document.body.style.backgroundColor = '#ffc796'
}
else {
    // BOA NOITE
    img.src = "Imagens/nigth.jpg"
    document.body.style.backgroundColor = '#2c5595'
    }
}