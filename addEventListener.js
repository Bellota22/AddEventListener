const input1=document.querySelector('#calculo1');
const input2=document.getElementById('calculo2');
const boton=document.querySelector('.btnCalcular');
const pResult=document.querySelector('.resultado');
const form=document.querySelector('#form')

//AQUIEN______________ACCIÓN____FUNCION
form.addEventListener('submit',sumarInputValues);

function sumarInputValues(event){
    //Para que no se recarga la pag 
    console.log({event})
    event.preventDefault();

    a=parseInt(input1.value,10);
    b=Number(input2.value);
    const sumaInputs= a+b;
    pResult.innerText="Resultado: " + sumaInputs;
}

