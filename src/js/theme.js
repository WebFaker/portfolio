$("#theme_button").click(function(){
    if ($(this).text() == "light") {
        document.documentElement.style.setProperty('--main-color', '#FF0000');
        document.documentElement.style.setProperty('--body-color', '#000');
        document.documentElement.style.setProperty('--hover-color', '#EE0000');
        document.documentElement.style.setProperty('--box-color', '#FFF');
        document.getElementById('theme_button').innerHTML = 'dark';
        }
    else {
        document.documentElement.style.setProperty('--main-color', '#ffd500');
        document.documentElement.style.setProperty('--body-color', '#fff');
        document.documentElement.style.setProperty('--hover-color', '#ffa400');
        document.documentElement.style.setProperty('--box-color', '#000');
        document.getElementById('theme_button').innerHTML = 'light';
        }
    });