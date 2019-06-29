module.exports = (app) => {
    const controller = require('../controller/controller')

    // GET
    app.route ('/').get (controller.readall)
    app.route ('/:param_id').get (controller.byid)
    app.route ('/src/:lokasi').get (controller.search)

    // POST
    app.route ('/').post (controller.plus)

    // PATCH
    app.route ('/:param_edit').patch (controller.edit)

    // DELETE
    app.route ('/:param_kocok').delete (controller.erase)
    
}