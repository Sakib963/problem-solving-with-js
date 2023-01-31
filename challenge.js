function make_avg(numbers, size)
{
    var total = 0;
    for ( var i = 0; i< size; i++)
    {
        total += numbers[i];
    }

    var average = total/size;

    return average.toFixed(2);
}

var marks = [ 12, 154, 1, 48, 518, 48, 1, 4854, 745]

var getAverage = make_avg(marks, marks.length);
console.log("Average: "+getAverage);