let local = 'en'
let divPageEN = document.querySelector('#page-en')
let divPageFR = document.querySelector('#page-fr')

const buttonsSwitchToFrench = document.querySelectorAll('.button-switch-to-french')
buttonsSwitchToFrench.forEach((button) => {
  button.addEventListener('click', (e) => {
    local = 'fr'
    hideAndShow()  
  })
});

const buttonsSwitchToEnglish = document.querySelectorAll('.button-switch-to-english')
buttonsSwitchToEnglish.forEach((button) => {
  button.addEventListener('click', (e) => {
    local = 'en'
    hideAndShow()  
  })
});

function hideAndShow() {
  if (local == 'en') {
    divPageEN.style["display"] = 'block'
    divPageFR.style["display"] = 'none'
  } else {
    divPageEN.style["display"] = 'none'
    divPageFR.style["display"] = 'block'
  }
}