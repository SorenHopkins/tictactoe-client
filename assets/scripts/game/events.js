const api = require('./api.js')
const ui = require('./ui.js')
const getFormFields = require('./../../../lib/get-form-fields.js')
const store = require('./../store.js')

const updateTile = event => {
  const data = $(event.target).data('tilenum')
  store.currentTile = data
  store.currentGame.cells[data - 1] = store.currentPlayer
  console.log(data)
  if ($(event.target).hasClass('clicked')) {
    console.log('already clicked')
  } else {
    api.update(data)
      .then(ui.updateTile)
      .catch(ui.failure)
  }
}

const createGame = event => {
  store.draw = false
  api.createGame()
    .then(ui.createGame)
    .catch(ui.failure)
}

module.exports = {
  updateTile,
  createGame
}
