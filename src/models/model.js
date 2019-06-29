const konaksi = require('../config/connect')

module.exports = {

//read all
    gethebook: (result) => { 
        return new Promise((resolve, reject) => {
            konaksi.query(`SELECT lb.*,ct.nama_kategori FROM library as lb inner join category as ct on lb.id_kategori = ct.id_category`, (err, result) => {
                if(!err){
                    resolve(result)
                }else{
                    reject(new Error(err))
                }
            })
        })
    },

//read by id
    mList_id: (bookid, result) => { 
        return new Promise((resolve, reject) => {
            konaksi.query(`SELECT lb.*,ct.nama_kategori FROM library as lb inner join category as ct on lb.id_kategori = ct.id_category WHERE id_library = ?`, bookid, (err, result) => {
                if(!err){
                    resolve(result)
                }else{
                    reject(new Error(err))
                }
            })
        })
    },

   
//search
    nyari: (lok, result) => {
        //let search = lok 
       
        return new Promise((resolve, reject) => {
            konaksi.query(`SELECT lb.id_library,lb.nama_buku,lb.pengarang,lb.lokasi,ct.nama_kategori FROM library as lb inner join category as ct on lb.id_kategori = ct.id_category WHERE lb.id_library = ? or lb.lokasi like "%"?"%" or ct.nama_kategori like "%"?"%" or lb.nama_buku like "%"?"%" or lb.pengarang like "%"?"%" `, [lok,lok,lok,lok,lok], (err, result) => {
                if (!err) {
                    resolve(result)
                } else {
                    reject(new Error(err))
                }
            })
        }) 
    },

//create
    nambah: (data, result) => {
        return new Promise((resolve, reject) => {
            konaksi.query(`INSERT INTO library SET ?`, data, (err, result) => {
                if (!err) {
                    resolve(result)
                } else {
                    reject(new Error(err))
                }
            })
        })
    },

//edit
    mEdit: (data, bookid, result) => {
        return new Promise((resolve, reject) => {
            konaksi.query(`UPDATE library SET ? WHERE id_library =?`, [data, bookid], (err, result) => {
                if (!err) {
                    resolve(result)
                } else {
                    reject(new Error(err))
                }
            })
        })
    },

//delete
    mHapoes: (bookid, result) => {
        return new Promise((resolve, reject) => {
            konaksi.query(`DELETE FROM library WHERE id_library = ?` , bookid, (err, result) => {
                if (!err) {
                    resolve(result)
                } else {
                    reject(new Error(err))
                }
            })
        })
    }

}
