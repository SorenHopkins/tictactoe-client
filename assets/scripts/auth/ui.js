'use strict'

const store = require('./../store.js')

const signUpSuccess = function () {
  $('#message').text('Successful sign up')
  $('#message').removeClass()
  $('#message').addClass('success')
  $('.reset')[0].reset()
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
  $('#loginpage, #main, #navbar').toggleClass('hidden')
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
  signOutSuccess
}
