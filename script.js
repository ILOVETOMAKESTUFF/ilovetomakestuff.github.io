// Navbar

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
    document.getElementById("navbar").style.padding = "30px 10px";
    document.getElementById("logo").style.fontSize = "25px";
  } else {
    document.getElementById("navbar").style.padding = "80px 10px";
    document.getElementById("logo").style.fontSize = "35px";
  }
}

//Theme switcher

const root = document.documentElement 
const themeBtns = document.querySelectorAll('.theme > button')

themeBtns.forEach((btn) => {
  btn.addEventListener('click', handleThemeUpdate)
})

function handleThemeUpdate(e) {
  switch(e.target.value) {
    case 'Dark': 
      root.style.setProperty('--background-color', 'black')
      root.style.setProperty('--font-color', 'white')
      break
      
    case 'Light':
      root.style.setProperty('--background-color', 'white')
      root.style.setProperty('--font-color', 'black')
      break
  }
}
