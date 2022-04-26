const arr = ["a", "b", "c", "d", "e", "f", "g", "h", "i"];


const getRandom = (data) => { return data[parseInt(Math.random() * data.length)] }

console.log(getRandom(arr))