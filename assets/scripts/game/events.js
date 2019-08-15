const api = require('./api.js')
const ui = require('./ui.js')
const getFormFields = require('./../../../lib/get-form-fields.js')
const store = require('./../store.js')

const updateTile = event => {
  const data = $(event.target).data('tilenum')
  store.currentTile = data
  store.currentGame.cells[data - 1] = store.currentPlayer
  if ($(event.target).hasClass('clicked')) {
    $('#errormessage').text('That tile has already been played!')
  } else {
    $('#errormessage').text('')
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

const getGameIndex = event => {
  api.gameIndex()
    .then(ui.getGameIndex)
    .catch(ui.failure)
}

module.exports = {
  updateTile,
  createGame,
  getGameIndex
}
