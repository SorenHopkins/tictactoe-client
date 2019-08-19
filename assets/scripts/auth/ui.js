'use strict'

const store = require('./../store.js')

const signUpSuccess = function () {
  $('#message').text('Successful sign up')
  $('#message').removeClass()
  $('#message').addClass('success')
  $('.reset').trigger('reset')
}

const passwordChangeSuccess = function () {
  $('#message').text('Successful change pw')
  $('#message').removeClass()
  $('#message').addClass('success')
}

const signInSuccess = function (responseData) {
  // handle storing user token, if extant
  store.user = responseData.user
  store.xWins = 0
  store.oWins = 0
  $('#loginpage, #main, #navbar').toggleClass('hidden')
  $('#message').text(`API token: ${responseData.user.token} `)
  $('#message').removeClass()
  $('#message').addClass('success')
  $('.reset').trigger('reset')
}

const signOutSuccess = function () {
  $('#message').text(`Successful sign out`)
  $('#message').removeClass()
  $('#message').addClass('success')
  $('.tttTile').text('')
  delete store.currentGame
  delete store.xWins
  delete store.oWins
  $('#loginpage, #main, #navbar').toggleClass('hidden')
}

const signUpFailure = function () {
  $('#messageBody').text('Please check that your username is not taken & your passwords match.')
  $('#messageModal').modal('show')
}

const signInFailure = function () {
  $('#messageBody').text('Please make sure that your username & password is correct.')
  $('#messageModal').modal('show')
}

const failure = function () {
  $('#message').text('Event failed')
  $('#message').removeClass()
  $('#message').addClass('failure')
}

module.exports = {
  signUpSuccess,
  failure,
  signInSuccess,
  passwordChangeSuccess,
  signOutSuccess,
  signUpFailure,
  signInFailure
}
