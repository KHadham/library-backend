module.exports = (app) => {
  const ctrLib = require('../controller/library')
  const ctrHist = require('../controller/history')


  //kodingan cors anjing yang bikin error
  app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin","*");
    res.header("Access-Control-Allow-Methods","GET,POST,PUT,PATCH,DELETE,COPY,HEAD,LINK,UNLINK,PURGE,LOCK,UNLOCK,PROPFIND,VIEW");
      res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
      next();
    });

  // GET
  app.route ('/buku').get (ctrLib.readall)
  app.route ('/history').get (ctrHist.readHist)

  app.route ('/buku/:param_id').get (ctrLib.byid)
  app.route ('/history/:param_id').get (ctrHist.HistByid)

  app.route ('/src/:lokasi').get (ctrLib.search)

  // POST
  app.route ('/buku').post (ctrLib.plus)
  app.route ('/history').post (ctrHist.addRecord)


  // PATCH
  app.route ('/buku/:param_edit').patch (ctrLib.edit)
  app.route ('/history/:param_history').patch (ctrHist.editRecord)


  // DELETE
  app.route ('/buku/:param_kocok').delete (ctrLib.erase)
  app.route ('/history/:param_kocok').delete (ctrHist.hapus)
  
}
