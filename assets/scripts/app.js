'use strict'

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')
const gameEvents = require('./game/events.js')
const authEvents = require('./auth/events.js')
// use require without a reference to ensure a file is bundled
// require('./example')

$(() => {
  // your JS code goes here
  $('#sign-up').on('submit', authEvents.onSignUp)
  $('#sign-in').on('submit', authEvents.onSignIn)
  $('.tttTile').on('click', gameEvents.updateTile)
  $('#newgame').on('click', gameEvents.createGame)
  $('#signout').on('click', authEvents.onSignOut)
  $('.statistics').on('click', gameEvents.getGameIndex)
  $('#change-pw').on('submit', authEvents.onChangePassword)
})
