let lightMode  = localStorage.getItem('lightMode')

let themeSwitch = document.getElementById("theme-switch")

const enableLightMode = () => {
  document.body.classList.add('lightMode');
  localStorage.setItem('lightMode', 'active')
};

const disableLightMode = () => {
  document.body.classList.remove('lightMode')
  localStorage.removeItem('lightMode', null)
};

if (lightMode  == 'active')
  enableLightMode()
  
themeSwitch.addEventListener('click', () => {
  lightMode = localStorage.getItem('lightMode')
  lightMode !== 'active'?
  enableLightMode():
  disableLightMode()
})