function temperatureConverter(valNum) {
    let celsius = (valNum - 32) / 1.8;
    let result = (celsius - Math.floor(celsius)) !== 0;
    if(result)
    {
        let mark = celsius.toFixed(2);
        let markFinal = parseFloat(mark);
        return markFinal;
    }
    else{
        let mark = parseInt(celsius);
        return mark;
    }
}

console.log(temperatureConverter(103));