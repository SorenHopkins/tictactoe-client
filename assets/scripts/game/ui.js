const store = require('./../store.js')
const api = require('./api.js')

const failure = function () {
  console.log('failure ran')
}

const createGame = function (responseData) {
  store.currentPlayer = 'x'
  store.currentGame = responseData.game
  $('.tttTile').text('')
  $('.tttTile').removeClass('clicked')
}

const updateTile = function () {
  $('#' + store.currentTile).text(store.currentPlayer)
  if (store.currentPlayer === 'x') {
    store.currentPlayer = 'o'
  } else {
    store.currentPlayer = 'x'
  }
  $('#' + store.currentTile).addClass('clicked')
  if (store.currentGame.over === true && store.draw === false) {
    alert('You won! Please start a new game.')
    $('.tttTile').addClass('clicked')
  } else if (store.currentGame.over === true && store.draw === true) {
    alert('You drawed! Please start a new game.')
    $('.tttTile').addClass('clicked')
    store.draw = false
  }
  const checkWin = api.show()
  console.log(checkWin)
  console.log(store.currentGame)
}

module.exports = {
  createGame,
  updateTile,
  failure
}
