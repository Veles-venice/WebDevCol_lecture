const path = require('path')'

console.log('Path Information: ');
console.log(`Current Directory: ${__dirname}`);
const filePath = path.join(__dirname, 'example.txt');
console.log(`File Path: ${filePath}`);

