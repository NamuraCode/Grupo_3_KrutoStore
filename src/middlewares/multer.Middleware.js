const multer = require('multer');

let multerDiskStorage = multer.diskStorage({
    /* Destino de los archivos */
    destination: (req, file, callback) => {
        let folder = path.join(__dirname, '../../public/images/avatars');
        callback(null, folder);
    },
    /* renombrar los archivos */
    filename: (req, file, callback)=>{
        let imagName= Date.now() + path.extname(file.originalname);
        callback(null, imagName);
    }
})
let multerDiskStorag = multer.diskStorage({
    /* Destino de los archivos */
    destination: (req, file, callback) => {
        let folder = path.join(__dirname, '../../public/images/productos');
        callback(null, folder);
    },
    /* renombrar los archivos */
    filename: (req, file, callback)=>{
        let imagName= Date.now() + path.extname(file.originalname);
        callback(null, imagName);
    }
})

/* Guardarlo en variable para llamarlo como middleware */
let fileUploadAvatars = multer({ storage: multerDiskStorage})
let fileUploadProductos = multer({ storage: multerDiskStorag})

module.exports = {
    fileUploadProductos,
    fileUploadAvatars
}