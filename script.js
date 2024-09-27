// Llamado a los distintos elementos del DOM 
const input = document.getElementById('celcius');
const result = document.getElementById('resultado');
const alertR = document.getElementById('alert');
const body = document.getElementById('body');
const form = document.getElementById('form');
const btnfn = document.getElementById('btn-fn');
const label = document.getElementById('label');
const textBtn = document.getElementById('theme-btn');

//Evita que el formulario se envíe al precionar la tecla enter y ejecuta la función convert()
document.querySelector('form').addEventListener('keydown',(e)=>{
    if(e.key=='Enter'){
        e.preventDefault();
        convert();
    }
})

let theme = false;
//Oculta el contenedor donde se muestra el resultado.
alertR.style.display='none';

//Función convertir 
//Toma lo ingresado en el input y llama a la funcion temperatureConverter()
const convert = ()=>{
    const celciu = input.value;
    const output = temperatureConverter(celciu);
    result.innerText=output;
    alertR.style.display='block';
}

//Reestablece el input y vuelve a ocultar el contenedor de respuesta
const refresh = ()=>{
    input.value='';
    alertR.style.display='none';
}

//Realiza el calculo de conversión y muestra el resultado en el contenedor de respuesta
const temperatureConverter = (temp)=>{
    const celcius = parseFloat(temp);

    if(!isNaN(celcius)){
        const fahrenheit = (celcius*9/5)+32;
        const kelvin = celcius+273.15;

        return `Kelvin: ${kelvin}\nFahrenheit: ${fahrenheit}`;
        
    }else{
        return "Ingrese una entrada válida";
    }
}

//Funcion para cambiar el tema Dark/Light
const changeTheme = ()=>{
    if(!theme){
        body.className='bg-dark';
        form.className='card m-4 bg-secondary';
        btnfn.className='btn btn-primary my-3';
        label.className='form-label text-light';
        textBtn.src='./img/dark_mode_24dp_E8EAED.svg';
        theme=!theme;
    }else{
        body.className='';
        form.className='card m-4';
        btnfn.className='btn btn-primary my-3';
        label.className='form-label text-dark';
        textBtn.src='./img/light_mode_24dp_434343.svg';

        theme=!theme;
    }
}