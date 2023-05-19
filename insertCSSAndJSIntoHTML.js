const fs=require('fs');
console.log(process.argv[2]);
console.log(process.argv[3]);
let contents=fs.readFileSync(process.argv[2],"utf8");
let saveFilename=process.argv[2].replace(".html","")+"withCSSAndScripts.html";
if (process.argv[3]!==undefined){
    saveFilename=process.argv[3];
}
let lines=contents.split("\n");
let newContents="";
for (let i=0;i<lines.length;i++){
    let line=lines[i];
    let squishedLine=lines[i].replace(/ /g,"").replace(/'/g,"").replace(/"/g,"").trim();
    let filename="";    
    if (squishedLine.indexOf("<linkrel=stylesheet")!==-1){
        filename=squishedLine.replace("<linkrel=stylesheethref=","").replace(">","").trim();
        console.log("Attempting to insert "+filename +"into document.");
        let styleContents=fs.readFileSync(filename,"utf8");
        newContents+="<style>\n"+styleContents+"\n</style>\n";
    }
    else if (squishedLine.indexOf("<scriptsrc=")!==-1){
        filename=squishedLine.replace("<scriptsrc=","").replace("></script>","").trim();
        console.log("Attempting to insert "+filename +"into document.");
        let scriptContents=fs.readFileSync(filename,"utf8");
        newContents+="<script>\n"+scriptContents+"\n</script>\n";
    }
    else{
        newContents+=line+"\n";
    }
}
fs.writeFileSync(saveFilename,newContents,"utf8");