const store = require('./../store.js')

const failure = function () {
  console.log('failure ran')
}

const createGame = function (responseData) {
  store.currentPlayer = 'x'
  store.currentGame = responseData.game
  $('.tttTile').text('')
}

const updateTile = function () {
  $('#' + store.currentTile).text(store.currentPlayer)
  if (store.currentPlayer === 'x') {
    store.currentPlayer = 'o'
  } else {
    store.currentPlayer = 'x'
  }
  $('#' + store.currentTile).addClass('clicked')
}

module.exports = {
  createGame,
  updateTile,
  failure
}
