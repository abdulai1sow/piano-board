const pianoKeys = document.querySelectorAll('.key')

function playSound(newSound) {
  // console.log(newSound)
  new Audio(newSound).play()
}

pianoKeys.forEach((pianoKey, i) => {
  const number = i < 9 ? '0' + (i + 1) : (i + 1)
  const newSound = '24-piano-keys/key' + number + '.mp3'
  pianoKey.addEventListener('click', () => playSound(newSound))
})