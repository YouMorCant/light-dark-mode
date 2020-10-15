//Dynamic Elements
const toggleswitch = document.querySelector('input[type="checkbox"]');
const nav = document.getElementById('nav');
const toggleIcon = document.getElementById('toggle-icon');
const image1 = document.getElementById('image1');
const image2 = document.getElementById('image2');
const image3 = document.getElementById('image3');
const textBox = document.getElementById('text-box');

//Change Mode
function changeMode(mode) {
    const backgroundColor = '';
    const onBackgroundColor = '';
    const iconAdd = '';
    const iconRemove = '';
    const text = '';
    
    if (mode = 'dark'){
        backgroundColor = '255 255 255';
        onBackgroundColor = '0 0 0';
        iconAdd = 'moon';
        iconRemove = 'sun';
        text = 'Dark';

    }else {
        backgroundColor = '0 0 0';
        onBackgroundColor = '255 255 255';
        iconAdd = 'sun';
        iconRemove = 'moon';
        text = 'Light';
    }

    document.documentElement.setAttribute('data-theme', `${mode}`);
    nav.style.backgroundColor = `rgb(${onBackgroundColor} / 50%)`;
    textBox.style.backgroundColor = `rgb(${backgroundColor} / 50%)`;
    toggleIcon.children[0].textContent = `${text} Mode`;
    toggleIcon.children[1].classList.remove(`fa-${iconRemove}`);
    toggleIcon.children[1].classList.add(`fa-${iconAdd}`);
    image1.src = `img/undraw_proud_coder_${mode}.svg;`
    image2.src = `img/undraw_feeling_proud_${mode}.svg`;
    image3.src = `img/undraw_conceptual_idea_${mode}.svg`;
}

// //Dark Mode
// function darkMode(){
//     document.documentElement.setAttribute('data-theme', 'dark');
//     nav.style.backgroundColor = 'rgb(0 0 0 / 50%)';
//     textBox.style.backgroundColor = 'rgb(255 255 255 / 50%)';
//     toggleIcon.children[0].textContent = 'Dark Mode';
//     toggleIcon.children[1].classList.remove('fa-sun');
//     toggleIcon.children[1].classList.add('fa-moon');
//     image1.src = 'img/undraw_proud_coder_dark.svg';
//     image2.src = 'img/undraw_feeling_proud_dark.svg';
//     image3.src = 'img/undraw_conceptual_idea_dark.svg';
// }

// //Light Mode
// function lightMode(){
//     document.documentElement.setAttribute('data-theme', 'light');
//     nav.style.backgroundColor = 'rgb(255 255 255 / 50%)';
//     textBox.style.backgroundColor = 'rgb(0 0 0 / 50%)';
//     toggleIcon.children[0].textContent = 'Light Mode';
//     toggleIcon.children[1].classList.remove('fa-moon');
//     toggleIcon.children[1].classList.add('fa-sun');
//     image1.src = 'img/undraw_proud_coder_light.svg';
//     image2.src = 'img/undraw_feeling_proud_light.svg';
//     image3.src = 'img/undraw_conceptual_idea_light.svg';
// }

//Switch Theme Dynamically
function switchTheme(event){
    if (event.target.checked) {
        changeMode('dark');
    } else {
        changeMode('light');
    }
}

//Event Listeners
toggleswitch.addEventListener('change', switchTheme);