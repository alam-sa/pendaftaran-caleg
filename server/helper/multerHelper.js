const multer = require('multer');

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'public/uploads');
    },
    filename: (req, file, cb) => {
        cb(null, new Date().toISOString().replace(/:/g, '-') + '-' + file.originalname);
    }
});
const filefilter = (req, file, cb) => {
    if (file.mimetype === 'image/png' || file.mimetype === 'image/jpg' 
        || file.mimetype === 'image/jpeg' || file.mimetype === 'application/pdf'){
            cb(null, true);
        }else {
            cb(null, false);
        }
}

const upload = multer({storage: storage, fileFilter: filefilter});
const multipleUpload = upload.fields([{name: "formBB1"}, {name: "formBB2"}, {name: "ektp"}, {name: "ijazah"}, {name: "skck"}, {name: "sehatJasmani"}, {name: "sehatRohani"}, {name: "suketBnn"}, {name: "suketPidana"}, {name: "pasFoto"}, {name: "suketPps"}, {name: "ktaPartai"}, {name: "suketPartai"}])

module.exports = { multipleUpload }