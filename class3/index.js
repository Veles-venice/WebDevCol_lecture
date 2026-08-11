/*
const fs = require('fs');



const path = require('path');
const filePath = path.join(__dirname, 'test', 'hello.txt');
console.log(filePath);

const os = require('os');
const user = os.usesInfo();
console.log(user);

const des = require('./module/des.js');
console.log(des);

const packages = require('./module/pacg.js');
console.log(packages);
*/

const http = require('http');

require('dotenv').config()

const process = require('process');
//console.log(process.argv)
//console.log(process.env.PORT);
const port = process.env.PORT || 3000;


const server = http.createServer((req, res)=>{
    res.writeHead(200, {'Content-Type': 'text/html'}),
    res.write('<h1>hello world</h1>'),
    res.write('<p>This is my first server</p>'),
    res.write('<p>My name is Krish</p>'),
    res.end()
});

server.listen(port,()=>{
    console.log(`Server is running on port ${port}`);
});

console.log(`http://localhost:${port}/`); //just so I don't have to remember link