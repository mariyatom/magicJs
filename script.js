const symbols = [
  '★',
  '✿',
  '❖',
  '✦',
  '✧',
  '✪',
  '✩',
  '✹',
  '✶',
  '♠',
  '♣',
  '♥',
  '♦',
  '★',
  '✿',
  '❖',
  '✦',
  '✧',
  '✪',
  '✩',
  '✹',
  '✶',
  '♠',
  '♣',
  '♥',
  '♦',
  '★',
  '✿',
  '❖',
  '✦',
  '✧',
  '✪',
  '✩',
  '✹',
  '✶',
  '♠',
  '♣',
  '♥',
  '♦',
  '★',
  '✿',
  '❖',
  '✦',
  '✧',
  '✪',
  '✩',
  '✹',
  '✶',
  '♠',
  '♣',
  '♥',
  '♦',
]
const beepSound = new Audio('./beep.mp3')
function createSymbol() {
  const symbol = document.createElement('span')
  symbol.classList.add('symbol')
  symbol.textContent = symbols[Math.floor(Math.random() * symbols.length)]
  document.body.appendChild(symbol)

  const size = Math.random() * 100 + 50
  const x = Math.random() * window.innerWidth
  const y = Math.random() * window.innerHeight
  const color = `hsl(${Math.random() * 360}, 100%, 50%)`

  symbol.style.fontSize = `${size}px`
  symbol.style.color = color
  symbol.style.left = `${x}px`
  symbol.style.top = `${y}px`

  beepSound.play()

  setTimeout(() => {
    symbol.remove()
  }, 3000)
}

setInterval(createSymbol, 300)
