const resp = require('../helpers/response')
const conn = require('../config/connect')
const model = require('../models/library')

exports.readall = (req, res) => {
    model.gethebook()
    .then((resultBook) => {
        resp.response(res, resultBook, 200)
        }
    )
    .catch((err) => {
        console.log(err)
    })
}

exports.readHist = (req, res) => {
    model.getheHist()
    .then((resultBook) => {
        resp.response(res, resultBook, 200)
        }
    )
    .catch((err) => {
        console.log(err)
    })
}

exports.byid = (req, res) => {
    let bookid = req.params.param_id

    model.mList_id(bookid)
    .then((resultBook) => {
        const result = resultBook[0]
        resp.response(res, result, 200)
    })
    .catch((err) => {
        console.log(err)
        
    })
}



exports.plus = (req, res) => {

    const data = {
        nama_buku: req.body.nama_buku,
        pengarang: req.body.pengarang,
        lokasi: req.body.lokasi,
        foto_sampul:req.body.foto_sampul,
        deskripsi:req.body.deskripsi
    }

    model.nambah(data)
    .then(()=> {
        resp.responAdd(res, data, 200)
    })
    .catch((err) => {
        console.log(err)
    })
}

exports.addRecord = (req, res) => {

    const data = {
        nama_buku: req.body.nama_buku,
        pengarang: req.body.pengarang,
        lokasi: req.body.lokasi,
        foto_sampul: req.body.foto_sampul,
        deskripsi: req.body.deskripsi,
        id_kategori: req.body.id_kategori
    }

    model.peminjaman(data)
    .then(()=> {
        resp.responAdd(res, data, 200)
    })
    .catch((err) => {
        console.log(err)
    })
}

exports.edit = (req, res) => {

    let idnya = req.params.param_edit

    const datayangmaudiedit = {
        nama_buku: req.body.nama_buku,
        pengarang: req.body.pengarang,
        lokasi: req.body.lokasi,
        foto_sampul: req.body.foto_sampul,

    }

    model.mEdit(datayangmaudiedit, idnya)
    .then(() => {
        resp.responUpd(res, datayangmaudiedit, 200,idnya)
    })
    .catch((err) => {
        console.log(err)
    })
}

exports.erase = (req, res) => {
    let bookid = req.params.param_kocok

    model.mHapoes(bookid)
    .then(() => {
        resp.responDlt(res, bookid, 200)
    })
    .catch((err) => {
        console.log(err)
    })
}

exports.search = (req, res) => {
    let lok = req.params.lokasi
    

    model.nyari(lok)
    .then((resultBook) => {
        const result = resultBook[0]
        resp.response(res, result, 200)
    })
    .catch((err) => {
        console.log(err)
    })
}