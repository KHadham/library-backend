  // BUKU ////////////////////////
  app.route ('/buku').get (ctrLib.readall) 
  app.route ('/bukuLimit').get (ctrLib.readlimited)  
  app.route ('/buku').post (upload.single('foto_sampul'),ctrLib.plus)
  app.route ('/buku/:param_id').get (ctrLib.byid)
  app.route ('/buku/:param_edit').patch (ctrLib.edit)
  app.route ('/buku/:param_kocok').delete (ctrLib.erase)
  app.route ('/src/:lokasi').get (ctrLib.search)