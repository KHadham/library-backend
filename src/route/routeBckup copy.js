module.exports = (app) => {
  const ctrLib = require('../controller/library')
  const ctrHist = require('../controller/history')
  const ctrUssr = require('../controller/user')

  //kodingan cors yang bikin error
  app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin","*");
    res.header("Access-Control-Allow-Methods","GET,POST,PUT,PATCH,DELETE,COPY,HEAD,LINK,UNLINK,PURGE,LOCK,UNLOCK,PROPFIND,VIEW");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
    });

  // BUKU ////////////////////////
  app.route ('/buku').get (ctrLib.readall)  
  app.route ('/buku').post (ctrLib.plus)
  app.route ('/buku/:param_id').get (ctrLib.byid)
  app.route ('/buku/:param_edit').patch (ctrLib.edit)
  app.route ('/buku/:param_kocok').delete (ctrLib.erase)
  app.route ('/src/:lokasi').get (ctrLib.search)
  
  // HISTORY ////////////////////////
  app.route ('/history').get (ctrHist.readHist)
  app.route ('/history').post (ctrHist.addRecord)
  app.route ('/history/:param_id').get (ctrHist.HistByid)
  app.route ('/history/:param_history').patch (ctrHist.editRecord)
  app.route ('/history/:param_kocok').delete (ctrHist.hapus)
  
  // USERS ////////////////////////
  app.route ('/users').get (ctrUssr.readall)
  app.route ('/users').post (ctrUssr.register)
  app.route ('/usersLogin').post (ctrUssr.login)
  app.route ('/users/:param_id').get (ctrUssr.userbyid)
  app.route ('/users/:param_user').patch (ctrUssr.edit_user)
  app.route ('/users/:param_kocok').delete (ctrUssr.erase_user)
  
  // KATEGORI ////////////////////////
  app.route ('/kategori').get (ctrLib.readKtg)

}
