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
            konaksi.query(`SELECT * FROM history WHERE id = ?`, bookid, (err, result) => {
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


//create data peminjam
    peminjssaman: (data, result) => {
        return new Promise((resolve, reject) => {
            konaksi.query(`INSERT INTO history SET ?`, data, (err, result) => {
                if (!err) {
                    resolve(result)
                } else {
                    reject(new Error(err))
                }
            })
        })
	},
//create data peminjam
    peminjaman: (data,id_bukunya, result) => {
			return new Promise((resolve, reject) => {
					konaksi.query(`INSERT INTO history SET ?`, data, (err, result) => {
						konaksi.query(`UPDATE library SET status_pinjam	= '1' WHERE id =?`, id_bukunya, (err, result) => {

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
    Hedit: (data,id_hist,id_buku, result) => {
        return new Promise((resolve, reject) => {
                konaksi.query(` UPDATE history SET ? WHERE id =?`, [data,id_hist], (err, result) => {
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
