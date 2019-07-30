const resp = require('../helpers/response')
const conn = require('../config/connect')
const model = require('../models/history')

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

exports.HistByid = (req, res) => {
    let bookid = req.params.param_id

    model.getHist_id(bookid)
    .then((resultBook) => {
        //const result = resultBook[0]
        resp.response(res, resultBook, 200)
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
        id_buku: req.body.id_buku,
        id_peminjam: req.body.id_peminjam,
        lama_pinjam: req.body.lama_pinjam,
    }

const id_buku = req.body.id_buku
    model.peminjaman(data,id_buku)
    .then(()=> {
        resp.responAdd(res, data, 200)
    })
    .catch((err) => {
        console.log(err)
    })
}

exports.editRecord = (req, res) => {

    let idnya = req.params.param_history
    let id_buku = req.body.id_buku
    const datayangmaudiedit = {
        id_buku: req.body.id_buku,
        // nama_peminjam: req.body.nama_peminjam,
        // no_ktp: req.body.no_ktp,
        tanggal_kembali: new Date(),
    }

    model.Hedit(datayangmaudiedit, idnya,id_buku)
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

exports.hapus = (req, res) => {
    let bookid = req.params.param_kocok

    model.hHapus(bookid)
    .then(() => {
        resp.responDlt(res, bookid, 200)
    })
    .catch((err) => {
        console.log(err)
    })
}