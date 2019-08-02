const konaksi = require('../config/connect')

module.exports = {
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

    //read by id
    getHist_id: (bookid, result) => { 
        return new Promise((resolve, reject) => {
            //SELECT lb.*,ct.nama_kategori FROM library as lb inner join category as ct on lb.id_kategori = ct.id_category WHERE id = ?
            konaksi.query(`SELECT library.nama_buku,history.* FROM user LEFT JOIN history ON history.id_peminjam = user.id_user LEFT JOIN library ON history.id_buku = library.id_library where id_user = ?`, bookid, (err, result) => {
                // `SELECT * FROM library WHERE id = ?`
                if(!err){
                    resolve(result)
                }else{
                    reject(new Error(err))
                }
            })
        })
    },
     //REAL read by id
     RealgetHist_id: (bookid, result) => { 
        return new Promise((resolve, reject) => {
            //SELECT lb.*,ct.nama_kategori FROM library as lb inner join category as ct on lb.id_kategori = ct.id_category WHERE id = ?
            konaksi.query(`SELECT history.*,library.nama_buku,library.foto_sampul, user.fullname,user.telepon,user.email,user.status,user.alamat,user.background FROM history left join library ON library.id_library = history.id_buku left join user on history.id_peminjam = user.id_user where id = ?`, bookid, (err, result) => {
                // `SELECT * FROM library WHERE id = ?`
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
            konaksi.query(`SELECT history.*,library.nama_buku,library.foto_sampul,user.fullname,user.alamat FROM history INNER JOIN library ON history.id_buku = library.id_library INNER JOIN user ON history.id_peminjam = user.id_user`, (err, result) => {
                if(!err){
                    resolve(result)
                }else{
                    reject(new Error(err))
                }
            })
        })
    },

//create data peminjam
    peminjaman: (data,id_bukunya, result) => {
			return new Promise((resolve, reject) => {
					konaksi.query(`INSERT INTO history SET ?`, data, (err, result) => {
						konaksi.query(`UPDATE library SET status_pinjam	= 'tidak tersedia' WHERE id_library =?`, id_bukunya, (err, result) => {

							if (!err) {
									resolve(result)
							} else {
									reject(new Error(err))
							}
					  })
					})
			})
    },
    
//edit data peminjam
    Hedit: (data , id_hist , id_buku, result) => {
        return new Promise((resolve, reject) => {
                konaksi.query(` UPDATE history SET ? WHERE id = ?`, [data,id_hist], (err, result) => {
                    konaksi.query(`UPDATE library SET status_pinjam	= 'tersedia' WHERE id_library = ? `, id_buku, (err, result) => {
                        if (!err) {
                            resolve(result)
                        } else {
                            reject(new Error(err))
                        }
                  })
                })
        })
},
//delete
   hHapus: (bookid, result) => {
    return new Promise((resolve, reject) => {
        konaksi.query(`DELETE FROM history WHERE id = ?` , bookid, (err, result) => {
            if (!err) {
                resolve(result)
            } else {
                reject(new Error(err))
            }
        })
    })
}


}
