let active = false
let cooldown = false
let footer = document.getElementById('foot-bar')
let avaliableColors = ["#3b697e","#437890","#4b86a1","#5694b0","#679fb8","#79aac0","#8ab5c8"]
let divColor
let borderColors = ['red','orange','yellow','greenyellow','indigo','violet']
let currentColor = 0
let clicked = false


while (active == true) {
  active = false
  console.log('made it')
}


activateSecret = () => {
  activeToggle()
  console.log(active)
  if (active == true) {
    window.setInterval(colorMaker, 200)
  } else {
    clearInterval(colorMaker)
  }
}

const colorMaker = () => {
  divColor = avaliableColors[Math.floor(Math.random()*avaliableColors.length)]
  footer.style.background = divColor;
  console.log("changing")
}


const activeToggle = () => {
  if (active == false) {
    active = true
  } else {
    active = false
  }
}

const cooldownToggle = () => {
  if (cooldown == false) {
    cooldown = true
  } else {
    cooldown = false
  }
}

const borderChange = () => {
  if (borderColors[currentColor] == null) {
    currentColor = 0
  }
  document.getElementById('stable-head').style.borderColor = borderColors[currentColor]
  currentColor += 1
}

const startCycle = () => {
  if (clicked == false) {
    window.setInterval(borderChange, 100)
  }
  clicked = true
}

