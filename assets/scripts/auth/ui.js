'use strict'

const store = require('./../store.js')

const signUpSuccess = function () {
  $('#messageBody').text('You have signed up!')
  $('#messageModal').modal('show')
  $('.reset').trigger('reset')
}

const passwordChangeSuccess = function () {
  $('#messageBody').text('You have changed your password!')
  $('#messageModal').modal('show')
  $('form').trigger('reset')
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
  $('.reset').trigger('reset')
}

const signInFailure = function () {
  $('#messageBody').text('Please make sure that your username & password is correct.')
  $('#messageModal').modal('show')
  $('.reset').trigger('reset')
}

const failure = function () {
  $('#message').text('Event failed')
  $('#message').removeClass()
  $('#message').addClass('failure')
  $('.reset').trigger('reset')
}

const changePasswordFailure = function () {
  $('#messageBody').text('Please make sure that you have entered your old password correctly.')
  $('#messageModal').modal('show')
  $('.reset').trigger('reset')
}

module.exports = {
  signUpSuccess,
  failure,
  signInSuccess,
  passwordChangeSuccess,
  signOutSuccess,
  signUpFailure,
  signInFailure,
  changePasswordFailure
}
