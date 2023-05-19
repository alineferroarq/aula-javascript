divc.style.display = 'none'
const hideInputs = () => {
    let selected = selectTemp.value
    console.log(selected);
    if(selected === 'c') { 
        divc.style.display = 'none'
        divf.style.display = 'block'

    }else if(selected === 'f'){
        divf.style.display = 'none'
        divc.style.display = 'block'
    }
}

const toc = (e) => {
    event.preventDefault()
    console.log('para celsius');
    let tempFahreiheit = fahrenheit.value
    let tempC = (tempFahreiheit - 32) * 5/9
    console.log(tempC)

    resultado.innerHTML = tempC

}

const tof = (e) => {
    event.preventDefault()
    console.log('para fahrenheit');
    let tempCelsius = celsius.value
    let tempF = (tempCelsius * 9/5) + 32 
    console.log(resultado)

    resultado.innerHTML = tempF

}

