let celsius = document.querySelector('#celsius');
let farenheit = document.querySelector('#Farenheit');
 
function celsiustofarenheit(celsius) {
    return (celsius * 9 / 5) + 32
}
function farenheittocelsius(farenheit) {
    return ((farenheit - 32) * 5 / 9)
}


celsius.addEventListener('input', function () {
    let celsiusvalue = celsius.value
    if (!isNaN(celsiusvalue)) {
        farenheit.value = celsiustofarenheit(celsiusvalue).toFixed(2)
    }
    else{
        farenheit.value = ''
    }
    if(celsiusvalue===''){
        farenheit.value=''
    }
})

farenheit.addEventListener('input',function(){
    let farenheitvalue = farenheit.value
    if(!isNaN(farenheitvalue)){
        celsius.value = farenheittocelsius(farenheitvalue).toFixed(2) 
    }
    else{
        celsius.value=''
    }
    if(farenheitvalue===''){
        celsius.value=''
    }
})
