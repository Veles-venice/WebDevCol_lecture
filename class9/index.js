console.log('Path Information: ');
console.log(`Current Directory: ${__dirname}`);
const filePath = path.join(__dirname, 'example.txt');
console.log(`File Path: ${filePath}`);

const fs = reqire('fs');
//create a new file 
fs.writeFile('example.txt'; 'hello, worldd!', (err) => {
	if (err) throw err;
	console.log


console.log(crypto.randomUUID());
