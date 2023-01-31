const deleteProperty =(arr)=>{
    let obj = arr[0];
    if(Object.keys(obj)[0] === arr[1])
    {
        return "Yes";
    }
    else
    {
        return "No";
    }
}

let obj = [{
    firstName: "Hello",
    secondName: "Bye"
}, 'lastName']

console.log(deleteProperty(obj));