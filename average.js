function average (arrOfMarks){
    let sum = 0;
    for(let i =0; i<arrOfMarks.length; i++)
    {
        sum+=arrOfMarks[i];
    }

    let avg = sum/arrOfMarks.length;
    let result = (avg - Math.floor(avg)) !== 0;
    if(result)
    {
        let mark = avg.toFixed(2);
        let markFinal = parseFloat(mark);
        return markFinal;
    }
    else{
        let mark = parseInt(avg);
        return mark;
    }
}

let arr = [75.25, 65, 80, 35.45, 99.50];
// let arr = [100, 100, 100, 100, 100];
console.log(average(arr));