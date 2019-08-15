const store = require('./../store.js')
const api = require('./api.js')

const failure = function () {
  console.log('failure ran')
}

const createGame = function (responseData) {
  store.currentPlayer = 'x'
  $('#currentplayer').text('Current Player: x')
  store.currentGame = responseData.game
  $('.tttTile').text('')
  $('.tttTile').removeClass('clicked')
}

const updateTile = function () {
  $('#' + store.currentTile).text(store.currentPlayer)
  if (store.currentPlayer === 'x') {
    store.currentPlayer = 'o'
    $('#currentplayer').text('Current Player: o')
  } else {
    store.currentPlayer = 'x'
    $('#currentplayer').text('Current Player: x')
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

const getGameIndex = function (returnData) {
  console.log(returnData)
  store.totalGames = returnData.games.length
  $('#gamesowon').text('O has won: ' + store.oWins + ' games (this session)')
  $('#gamesxwon').text('X has won: ' + store.xWins + ' games (this session)')
  $('#gamesplayedstats').text('You have played ' + store.totalGames + ' games in total')
}

module.exports = {
  createGame,
  updateTile,
  getGameIndex,
  failure
}
