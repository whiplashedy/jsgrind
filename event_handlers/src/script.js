const BALLOON_SIZE = 20
const BALLOON_MAX_SIZE = 100

let balloon = document.querySelector("p")

balloon.style.fontSize = BALLOON_SIZE + 'px'

const eventHandler = (event) => {
  if (event.key === 'ArrowUp') {
    balloon.style.fontSize = parseFloat(balloon.style.fontSize) * 1.1 + 'px'
    if (parseFloat(balloon.style.fontSize) > BALLOON_MAX_SIZE) {
      balloon.textContent = '💥'
      window.removeEventListener('keydown', eventHandler)
    }
    event.preventDefault()
  }
  else if (event.key === 'ArrowDown') {
    balloon.style.fontSize = parseFloat(balloon.style.fontSize) / 1.1 + 'px'
    event.preventDefault()
  }
}

window.addEventListener("keydown", eventHandler)