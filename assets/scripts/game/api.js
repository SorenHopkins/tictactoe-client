'use strict'

const config = require('./../config.js')
const store = require('./../store.js')

const index = function () {
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
    url: config.apiUrl + '/games/' + formData.game.id,
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const update = data => {
  console.log(store)
  console.log(store.currentGame)
  console.log(store.currentPlayer)
  console.log(data)
  return $.ajax({
    url: config.apiUrl + 'games/' + store.currentGame.id,
    method: 'PATCH',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data: {
      game: {
        cell: {
          index: data,
          value: store.currentplayer
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
  index,
  show,
  update,
  createGame
}
