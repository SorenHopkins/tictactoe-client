const api = require('./api.js')
const ui = require('./ui.js')
const getFormFields = require('./../../../lib/get-form-fields.js')

const updateTile = event => {
  const data = event.target.data.id
  api.update(data)
    .then(ui.updateTileSuccess)
    .catch(ui.updateTileFailure)
}

const createGame = event => {
  api.createGame()
    .then(ui.createGame)
    .catch(ui.failure)
}

module.exports = {
  updateTile,
  createGame
}
