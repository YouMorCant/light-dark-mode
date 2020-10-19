//Dynamic Elements
const toggleswitch = document.querySelector('input[type="checkbox"]');
const nav = document.getElementById('nav');
const toggleIcon = document.getElementById('toggle-icon');
const image1 = document.getElementById('image1');
const image2 = document.getElementById('image2');
const image3 = document.getElementById('image3');
const textBox = document.getElementById('text-box');

//declare null for attributes of theme other than name
let modeTitle = '';
let color1 = '';
let color2 ='';
let icon1 = '';
let icon2 = '';

//Dark or Light Images
function imageMode(color){
    image1.src = `img/undraw_my_code_snippets_${color}.svg`;
    image2.src = `img/undraw_code_thinking_${color}.svg`;
    image3.src = `img/undraw_ideation_${color}.svg`;
}

//Change attributes based on mode
function changeMode(mode, isDark){
    //set Attributes that are either 'dark' or 'light'
    document.documentElement.setAttribute('data-theme', mode);
    localStorage.setItem('theme',mode);
    imageMode(mode);

    //set attributes other than 'dark' and 'light'
    modeTitle = isDark ? 'Dark': 'Light';
    color1 = isDark ? '0 0 0': '255 255 255';
    color2 = isDark ? '255 255 255': '0 0 0';
    icon1= isDark ? 'fa-sun': 'fa-moon';
    icon2 = isDark ? 'fa-moon': 'fa-sun';
    
    //set remaining attributes with strings
    nav.style.backgroundColor = `rgb(${color1} / 50%)`;
    textBox.style.backgroundColor = `rgb(${color2} / 50%)`;
    toggleIcon.children[0].textContent = `${modeTitle} Mode`;
    toggleIcon.children[1].classList.replace(`${icon1}`,`${icon2}`);
  
}

//Switch Theme Dynamically
function switchTheme(event){
    var mode ='';
    var isDark = false;
    if (event.target.checked) {
        mode ='dark';
        isDark = true;
    } else {
        mode = 'light';
        isDark = false;
    }
    changeMode(mode,isDark);
}

//Event Listeners
toggleswitch.addEventListener('change', switchTheme);

//Check Local Storage for theme
const currentTheme = localStorage.getItem('theme');
if (currentTheme){
    document.documentElement.setAttribute('data-theme', currentTheme);

    if (currentTheme === 'dark'){
        toggleswitch.checked=true;
        changeMode('dark');
    }
}