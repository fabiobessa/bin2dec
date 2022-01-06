function bin2Dec() {
  var bin = document.getElementById('binary').value
  var decimal = 0
  for (let i = bin.length - 1; i >= 0; i--) {
    decimal += parseInt(bin[i]) * Math.pow(2, bin.length - 1 - i)
  }
  resultOfConvertion(decimal)
  document.getElementById('binary').value = ''
}

var inputBinary = document.querySelector('#binary')
inputBinary.addEventListener('keypress', function (e) {
  if (!checkChar(e)) {
    e.preventDefault()
    var elementoMessage = document.getElementById('message')
    elementoMessage.innerHTML =
      '<h3> *your number must contain only 0 or 1* </h3>'
  }
})

function checkChar(e) {
  var char = String.fromCharCode(e.keyCode)
  var pattern = '[01]'
  if (char.match(pattern)) {
    return true
  }
}

function resultOfConvertion(result) {
  console.log(result)
  var elementDecimal = '<h2>' + result + '</h2>'
  var elementResult = document.getElementById('result')
  elementResult.innerHTML = elementDecimal
  var elementoMessage = document.getElementById('message')
  elementoMessage.innerHTML = '<h3></h3>'
}

function stopSubmit(e) {
  e.preventDefault()
}
document.getElementById('form').addEventListener('submit', stopSubmit)
