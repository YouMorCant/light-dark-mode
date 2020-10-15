//Dynamic Elements
const toggleswitch = document.querySelector('input[type="checkbox"]');

//Switch Theme Dynamically
function switchTheme(event){
    if (event.target.checked) {
        document.documentElement.setAttribute('data-theme', 'dark');
    } else {
        document.documentElement.setAttribute('data-theme','light');
    }
}

//Event Listeners
toggleswitch.addEventListener('change', switchTheme);