const connection = require('../config/connect')

module.exports = {
  //read all
  getUsers: (result) => { 
    return new Promise((resolve, reject) => {
        //SELECT lb.*,ct.nama_kategori FROM library as lb inner join category as ct on lb.id_kategori = ct.id_category
        connection.query(`SELECT * FROM user `, (err, result) => {
            if(!err){
                resolve(result)
            }else{
                reject(new Error(err))
            }
        })
    })
},
  updateToken: (email, token) => {
    return new Promise((resolve, reject) => {
        connection.query('UPDATE user SET token = ? WHERE email = ?', [token, email], (err, result) => {
            if (!err) {
                resolve(result)
            } else {
                reject(err)
            }
        })
    })
  },
  
  userDetail: (userid) => {
    return new Promise((resolve, reject) => {
      connection.query('SELECT user.* ,history.* from user left join history on user.id_user = history.id where id_user = ?'
      , userid, (err, result) => {
        if (!err) {
          resolve(result)
        } else {
          reject(new Error(err))
        }
      })
    })
  },

  register: (data) => {
    return new Promise((resolve, reject) => {
      connection.query('INSERT INTO user SET ?', data, (err, result) => {
        if (!err) {
          resolve(result)
        } else {
          reject(err)
        }
      })
    })
  },

//logout
 signout: (idlogout) => {
  return new Promise((resolve, reject) => {
    connection.query('UPDATE user SET token = "" WHERE id_user = ?', idlogout, (err, result) => {
      if (!err) {
        resolve(result)
      } else {
        reject(new Error(err))
      }
    })
  })
},

//login
  getByEmail: (email) => {
    return new Promise((resolve, reject) => {
      connection.query('SELECT * FROM user WHERE email = ?', email, (err, result) => {
        if (!err) {
          resolve(result)
        } else {
          reject(new Error(err))
        }
      })
    })
  },

//edit data peminjam
  U_edit: (data,id_hist, result) => {
    return new Promise((resolve, reject) => {
        connection.query(` UPDATE user SET ? WHERE id_user =?`, [data,id_hist], (err, result) => {
          if (!err) {
                  resolve(result)
          } else {
                  reject(new Error(err))
          }
        })
    })
},
//delete
U_hapus: (bookid, result) => {
  return new Promise((resolve, reject) => {
      connection.query(`DELETE FROM user WHERE id_user = ?` , bookid, (err, result) => {
          if (!err) {
              resolve(result)
          } else {
              reject(new Error(err))
          }
      })
  })
}
}
