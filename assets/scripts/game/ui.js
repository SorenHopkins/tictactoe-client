const store = require('./../store.js')
const api = require('./api.js')

const failure = function () {
  console.log('failure ran')
}

const createGame = function (responseData) {
  store.currentPlayer = 'X'
  $('#currentplayer').text('Current Player: X')
  store.currentGame = responseData.game
  $('.tttTile').text('')
  $('.tttTile').removeClass('clicked')
}

const updateTile = function () {
  $('#' + store.currentTile).text(store.currentPlayer)
  if (store.currentPlayer === 'X') {
    store.currentPlayer = 'O'
    $('#currentplayer').text('Current Player: O')
  } else {
    store.currentPlayer = 'X'
    $('#currentplayer').text('Current Player: X')
  }
  $('#' + store.currentTile).addClass('clicked')
  if (store.currentGame.over === true && store.draw === false) {
    $('#messageBody').text('You won! Please start a new game.')
    $('#messageModal').modal('show')
    $('.tttTile').addClass('clicked')
  } else if (store.currentGame.over === true && store.draw === true) {
    $('#messageBody').text('You drawed! Please start a new game.')
    $('#messageModal').modal('show')
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
