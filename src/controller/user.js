const userModels = require('../models/users')
const MiscHelper = require('../helpers/helpers')
const jwt = require('jsonwebtoken')

module.exports = {
  
///  REEEAAADDD  /////////////////////////////
  readall : (req, res) => {

    userModels.getUsers()
    .then((resultBook) => {
      MiscHelper.response(res, resultBook, 200)
        }
    )
    .catch((err) => {
        console.log(err)
    })
},
///// READ BY ID ///////////////////////////
  userbyid : (req, res) => {
  let bookid = req.params.param_id

  userModels.userDetail(bookid)
  .then((resultBook) => {
      const result = resultBook[0]
      MiscHelper.response(res, result, 200)
  })
  .catch((err) => {
      console.log(err)
  })
},

///  REGISTER / POST /////////////////////////
  register: (req, res) => {
    const salt = MiscHelper.generateSalt(18)
    const passwordHash = MiscHelper.setPassword(req.body.password, salt)

    const data = {
      email: req.body.email,
      fullname: req.body.fullname,
      password: passwordHash.passwordHash,
      alamat:req.body.alamat,
      telepon:req.body.telepon,
      background:req.body.background,
      salt: passwordHash.salt,
      token: 'Test',
      status: 1,
      created_at: new Date(),
      updated_at: new Date()
    }
    
    userModels.register(data)
      .then((resultRegister) => {
        MiscHelper.response(res, resultRegister, 200)
      })
      .catch((error) => {
        console.log(error)
      })
  },

///// UPDATE /////////////////
edit_user : (req, res) => {

  let idnya = req.params.param_user

  const datayangmaudiedit = {
      email: req.body.email,
      fullname: req.body.fullname,
      password: req.body.password,
      no_ktp: req.body.no_ktp,
      alamat: req.body.alamat,

  }

  userModels.U_edit(datayangmaudiedit, idnya)
  .then(() => {
      MiscHelper.responUpd(res, datayangmaudiedit, 200,idnya)
  })
  .catch((err) => {
      console.log(err)
  })
},

///// DELETE //////////////////////////////

erase_user : (req, res) => {
  let bookid = req.params.param_kocok

  userModels.U_hapus(bookid)
  .then(() => {
      MiscHelper.responDlt(res, bookid, 200)
  })
  .catch((err) => {
      console.log(err)
  })
},

/////login//////////////////////////////
  login: (req, res) => {
    const email = req.body.email
    const password = req.body.password

    userModels.getByEmail(email)
      .then((result) => {
        const dataUser = result[0]
        const usePassword = MiscHelper.setPassword(password, dataUser.salt).passwordHash

        if (usePassword === dataUser.password) {
          dataUser.token = jwt.sign({
            userid: dataUser.userid
          }, process.env.SECRET_KEY, { expiresIn: '1h' })

          delete dataUser.salt
          delete dataUser.password

          return MiscHelper.response(res, dataUser, 200)
        } else {
          return MiscHelper.response(res, null, 403, 'Wrong password!')
        }
      })
      .catch((error) => {
        console.log(error)
      })
  }
}
