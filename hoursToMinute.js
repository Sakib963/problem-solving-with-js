function getMinute(hours)
{
    const minutes = hours*60;
    return minutes;
}

function getSeconds(minutes)
{
    const seconds = minutes*60;
    return seconds;
}

const totalHours = 24;
const totalMinute = getMinute(totalHours);

console.log(totalMinute);

const totalSeconds = getSeconds(totalMinute);

console.log(totalSeconds);