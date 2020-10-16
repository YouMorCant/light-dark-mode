//Dynamic Elements
const toggleswitch = document.querySelector('input[type="checkbox"]');
const nav = document.getElementById('nav');
const toggleIcon = document.getElementById('toggle-icon');
const image1 = document.getElementById('image1');
const image2 = document.getElementById('image2');
const image3 = document.getElementById('image3');
const textBox = document.getElementById('text-box');

//declare var for attributes of theme other than name
var modeTitle = '';
var color1 = '';
var color2 ='';
var icon1 = '';
var icon2 = '';

//Dark or Light Images
function imageMode(color){
    image1.src = `img/undraw_proud_coder_${color}.svg`;
    image2.src = `img/undraw_feeling_proud_${color}.svg`;
    image3.src = `img/undraw_conceptual_idea_${color}.svg`;
}

//Change attributes based on mode
function changeMode(mode){
    document.documentElement.setAttribute('data-theme', mode);
    localStorage.setItem('theme',mode);
    imageMode(mode);

    if (mode === 'dark'){
        modeTitle = 'Dark';
        color1 = '0 0 0';
        color2 = '255 255 255';
        icon1= 'fa-sun';
        icon2 = 'fa-moon';
    }else{
        modeTitle = 'Light';
        color1 = '255 255 255';
        color2 = '0 0 0';
        icon1 = 'fa-moon';
        icon2= 'fa-sun';
    }

    nav.style.backgroundColor = `rgb(${color1} / 50%)`;
    textBox.style.backgroundColor = `rgb(${color2} / 50%)`;
    toggleIcon.children[0].textContent = `${modeTitle} Mode`;
    toggleIcon.children[1].classList.replace(`${icon1}`,`${icon2}`);
  
}

//Switch Theme Dynamically
function switchTheme(event){
    var mode ='';
    if (event.target.checked) {
        mode ='dark';
    } else {
        mode = 'light';
    }
    changeMode(mode);
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