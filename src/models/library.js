const konaksi = require('../config/connect')

module.exports = {
//read all
    gethebook: (result) => { 
        return new Promise((resolve, reject) => {
            //SELECT lb.*,ct.nama_kategori FROM library as lb inner join category as ct on lb.id_kategori = ct.id_category
            konaksi.query(`SELECT library.*,category.nama_kategori FROM library LEFT JOIN category ON library.id_kategori = category.id_category  
            `, (err, result) => {
                if(!err){
                    resolve(result)
                }else{
                    reject(new Error(err))
                }
            })
        })
    },
//read all
    getCategory: (result) => { 
        return new Promise((resolve, reject) => {
            //SELECT lb.*,ct.nama_kategori FROM library as lb inner join category as ct on lb.id_kategori = ct.id_category
            konaksi.query(`SELECT * FROM category `, (err, result) => {
                if(!err){
                    resolve(result)
                }else{
                    reject(new Error(err))
                }
            })
        })
    },
//read all history
    getheHist: (result) => { 
        return new Promise((resolve, reject) => {
            //SELECT lb.*,ct.nama_kategori FROM library as lb inner join category as ct on lb.id_kategori = ct.id_category
            konaksi.query(`SELECT history.*,library.nama_buku FROM history INNER JOIN library ON history.id_buku = library.id
            `, (err, result) => {
                if(!err){
                    resolve(result)
                }else{
                    reject(new Error(err))
                }
            })
        })
    },
//get yang statusnya belom di pinjam
    getByStats: (result) => { 
        return new Promise((resolve, reject) => {
            //SELECT lb.*,ct.nama_kategori FROM library as lb inner join category as ct on lb.id_kategori = ct.id_category
            konaksi.query(`SELECT * FROM library where status_pinjam = FALSE`, (err, result) => {
                if(!err){
                    resolve(result)
                }else{
                    reject(new Error(err))
                }
            })
        })
    },

//edit status buku
		upTanggal: (data, idnya,id_buku, result) => {
			return new Promise((resolve, reject) => {
					konaksi.query(`UPDATE history SET ? WHERE id =?`, [data, idnya], (err, result) => {
                        konaksi.query(`UPDATE library SET status_pinjam	= '0' WHERE id =?`, id_buku, (err, result) => {
							if (!err) {
									resolve(result)
							} else {
									reject(new Error(err))
                            }
                        })
					})
			})
	},
    

//read by id
    mList_id: (bookid, result) => { 
        return new Promise((resolve, reject) => {
            //SELECT lb.*,ct.nama_kategori FROM library as lb inner join category as ct on lb.id_kategori = ct.id_category WHERE id = ?
            konaksi.query(`SELECT library.*,category.nama_kategori FROM library LEFT JOIN category ON library.id_kategori = category.id_category WHERE id_library = ?`, bookid, (err, result) => {
                // `SELECT * FROM library WHERE id = ?`
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
            konaksi.query(`SELECT lb.id,lb.nama_buku,lb.pengarang,lb.lokasi,ct.nama_kategori FROM library as lb inner join category as ct on lb.id_kategori = ct.id_category WHERE lb.id = ? or lb.lokasi like "%"?"%" or ct.nama_kategori like "%"?"%" or lb.nama_buku like "%"?"%" or lb.pengarang like "%"?"%" `, [lok,lok,lok,lok,lok], (err, result) => {
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
