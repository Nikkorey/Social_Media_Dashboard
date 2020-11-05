const toggleSwitch = document.querySelector('input[type=checkbox]')

const switchName = document.querySelector('.switchName')


function switchTheme(e) {
    if (e.target.checked) {
        switchName.textContent = "Light Mode"
        document.documentElement.setAttribute('data-theme', "light")
        localStorage.setItem('theme', 'light');
    
    } else {
        document.documentElement.setAttribute("data-theme", "dark");
        localStorage.setItem('theme', 'dark');
        switchName.textContent = "Dark Mode"
    }
}

// Event Listener
toggleSwitch.addEventListener('change', switchTheme);

const currentTheme = localStorage.getItem('theme');
if(currentTheme) {
    document.documentElement.setAttribute('data-theme', currentTheme)
    switchName.textContent = "Dark Mode"

    if (currentTheme === "light") {
        toggleSwitch.checked = true;
        switchName.textContent = "Light Mode"
      }
}