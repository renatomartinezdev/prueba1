/*
- Se tienen dos variables “x = 2” e “y =3” que cuentan, sin utilizar una variable auxiliar,
invierte los valores de las variables para que estos sean “x=3” e “y=2”.
(Muestra detalladamente el proceso)
*/



const campoX = document.getElementById('numeroX')
const campoY = document.getElementById('numeroY')
const btnInvertir = document.getElementById('btnInvertir')
const resultado = document.getElementById('resultado')

btnInvertir.onclick = function() {
    const valorX = campoX.value
    const valorY= campoY.value

    if(valorX === '' && valorY === ''){
        resultado.innerHTML = 'Todos los campos son obligatorios'
    }

    else{
        resultado.innerHTML = 'Numeros invertidos: X=' + valorY + ' Y= ' + valorX
    }
}




