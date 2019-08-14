const api = require('./api.js')
const ui = require('./ui.js')
const getFormFields = require('./../../../lib/get-form-fields.js')
const store = require('./../store.js')

const updateTile = event => {
  const data = $(event.target).data('tilenum')
  store.currentTile = data
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
  api.createGame()
    .then(ui.createGame)
    .catch(ui.failure)
}

module.exports = {
  updateTile,
  createGame
}
