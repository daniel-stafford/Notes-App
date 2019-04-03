const fs = require('fs');

// const book = {
// 	title: 'Ego is the Enemy',
// 	author: 'Ryan Holiday'
// }

// const bookJSON = JSON.stringify(book)
// const bookParsed = JSON.parse(bookJSON)

// fs.writeFileSync('1-json.json', bookJSON)

// const dataBuffer = fs.readFileSync('1-json.json')
// const dataJSON = dataBuffer.toString()
// const data = JSON.parse(dataJSON)
// console.log(data.title);

const data = JSON.parse(fs.readFileSync('1-JSON.json').toString());

data.name = 'Daniel';
data.age = 34;
console.log(data);

const dataJSON = JSON.stringify(data);

fs.writeFileSync('1-JSON.json', dataJSON);
