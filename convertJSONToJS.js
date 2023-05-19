const fs=require('fs');


console.log(process.argv);
console.log(process.argv[2]);

let filename=process.argv[2];
let basename=filename.replace(".json","");

let contents=fs.readFileSync(filename,'utf8');


let str="let "+basename+" =";
str+=contents;
str+=";";

let newFilename=basename+".js";

console.log(newFilename);

fs.writeFileSync(newFilename,str,"utf8");

