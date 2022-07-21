const fs = require("fs");
const path = require("path");

module.exports = () => {
    const publicFolder =  path.join(__dirname, "..", "..", "public")
    const imagesFolder = path.join(publicFolder, "img");
    const err = []; let notFound = false;
    
    const images = [
        "Assinatura Horizontal Principal.png", 
        "Brasão Principal.png",
        "Brasão Vertical Preto.png", 
        "ondas.png", "UFCA+CCT CH (2).png", 
        "UFCA+CCT CV.png", "UFCA+CCT RH.png", 
        "UFCA+CCT RV.png", 
        "table_av.png"
    ];

    try {
        if(!fs.existsSync(path.join(__dirname, "..", "..", "public"))) {
            fs.mkdirSync(publicFolder);
            fs.mkdirSync(path.join(publicFolder, "files"));
            fs.mkdirSync(imagesFolder);
        }
    } catch(err) {
        err.push("failure on create public directory");
        return {exist: notFound, error: err};
    }

    images.forEach(filename => {
        if (!fs.existsSync(path.join(imagesFolder, filename))) {
            err.push(`Not found ${filename}`);
        }
    });

   if(err.length > 0) notFound = true; 

    return {exist: notFound, error: err};
}