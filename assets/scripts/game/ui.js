const store = require('./../store.js')

const failure = function () {
  console.log('failure ran')
}

const createGame = function (responseData) {
  store.currentPlayer = 'x'
  store.curentGame = responseData.game
  const gameHTML = `
  <div class="row">
    <div data-id="1" class="col-4 box alt-color tttTile"></div>
    <div data-id="2" class="col-4 box tttTile"></div>
    <div data-id="3" class="col-4 box alt-color tttTile"></div>
    <div data-id="4" class="col-4 box tttTile"></div>
    <div data-id="5" class="col-4 box alt-color tttTile"></div>
    <div data-id="6" class="col-4 box tttTile"></div>
    <div data-id="7" class="col-4 box alt-color tttTile"></div>
    <div data-id="8" class="col-4 box tttTile"></div>
    <div data-id="9" class="col-4 box alt-color tttTile"></div>
  </div>`
  $('#gamebody').html(gameHTML)
}


module.exports = {
  createGame,
  failure
}
