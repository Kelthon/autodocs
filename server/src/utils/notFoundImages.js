const fs = require("fs");
const path = require("path");

const images = [
    "Assinatura Horizontal Principal.png", 
    "Brasão Principal.png",
    "Brasão Vertical Preto.png", 
    "ondas.png", "UFCA+CCT CH (2).png", 
    "UFCA+CCT CV.png", "UFCA+CCT RH.png", 
    "UFCA+CCT RV.png", 
    "table_av.png"
];

const imagesFolder = path.join(__dirname, "..", "..", "public", "img");

module.exports = () => {
    const err = []; let notFound = false;

    images.forEach(filename => {
        if (!fs.existsSync(path.join(imagesFolder, filename))) {
            err.push(`Not found ${filename}`);
        }
    });

   if(err.length > 0) notFound = true; 

    return {exist: notFound, error: err};
}