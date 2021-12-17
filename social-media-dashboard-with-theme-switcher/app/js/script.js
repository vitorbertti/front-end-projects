const darkButton = document.getElementById('dark');
const lightButton = document.getElementById('light');

const setDarkMode = () => {
  document.querySelector('body').classList = 'dark';
  localStorage.setItem('colorMode', 'dark');
};