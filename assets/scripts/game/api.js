'use strict'

const config = require('./../config.js')
const store = require('./../store.js')

const gameIndex = function () {
  return $.ajax({
    url: config.apiUrl + '/games',
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const show = function (formData) {
  return $.ajax({
    url: config.apiUrl + '/games/' + store.currentGame.id,
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const checkWin = function (one, two, three) {
  if (one === two && two === three && one !== '') {
    return true
  }
}

const update = data => {
  const checker = store.currentGame.cells
  if (checkWin(checker[0], checker[1], checker[2])) {
    store.currentGame.over = true
  } else if (checkWin(checker[0], checker[1], checker[2])) {
    store.currentGame.over = true
  } else if (checkWin(checker[0], checker[4], checker[8])) {
    store.currentGame.over = true
  } else if (checkWin(checker[0], checker[3], checker[6])) {
    store.currentGame.over = true
  } else if (checkWin(checker[1], checker[4], checker[7])) {
    store.currentGame.over = true
  } else if (checkWin(checker[2], checker[5], checker[8])) {
    store.currentGame.over = true
  } else if (checkWin(checker[2], checker[4], checker[6])) {
    store.currentGame.over = true
  } else if (checkWin(checker[3], checker[4], checker[5])) {
    store.currentGame.over = true
  } else if (checkWin(checker[6], checker[7], checker[8])) {
    store.currentGame.over = true
  } else if (checker.includes('') === false) {
    store.currentGame.over = true
    store.draw = true
  }

  if (store.currentPlayer === 'X' && store.currentGame.over === true && store.draw === false) {
    store.xWins = store.xWins + 1
  } else if (store.currentPlayer === 'O' && store.currentGame.over === true && store.draw === false) {
    store.oWins = store.oWins + 1
  }

  return $.ajax({
    url: config.apiUrl + 'games/' + store.currentGame.id,
    method: 'PATCH',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data: {
      game: {
        cell: {
          index: (data - 1),
          value: '' + store.currentPlayer
        },
        over: store.currentGame.over
      }
    }
  })
}

const createGame = formData => {
  return $.ajax({
    url: config.apiUrl + 'games/',
    method: 'POST',
    data: formData,
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

module.exports = {
  gameIndex,
  show,
  update,
  createGame
}
