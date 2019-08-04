const express = require('express');
const Route = express.Router();
const multer = require('multer');
const ctrLib = require('../controller/library')


const UploadImg = require('../helpers/uploadimg')

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './uploads/')
    },
    filename: function (req, file, cb) {
        cb(null, new Date().toISOString() + file.originalname);
    }
})
const upload = multer({ storage: storage })
Route
    .get('/buku', ctrLib.readall)
    .post('/', upload.single('image'), ctrLib.plus)
    .get('/buku/:param_id', ctrLib.byid)
    .patch('/buku/:param_edit', ctrLib.edit)
    .delete('/buku/:param_kocok', ctrLib.erase)
    .get('/src/:lokasi', ctrLib.search)

   

module.exports = Route;
