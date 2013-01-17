module.exports = (app) ->

  app.get '/', (req, resp) -> resp.render 'index'

  app.put '/jog', (req, resp, next) =>
    opts = {}; opts[k] = req.param(k) for k in ['axis', 'distance', 'speed']
    @driver.jog opts, -> resp.send 200

  app.post '/print_jobs/', (req, resp, next) =>
    @queue.add req.files.printjobs, -> resp.send 200