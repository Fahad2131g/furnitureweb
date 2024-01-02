const sr = ScrollReveal({
    distance: "65px",
    duration: '2600',
    delay: 450,
    reset: true
        
});
sr.reveal('.main', {delay:200, origin: 'left' });
sr.reveal('img', {delay:250, origin: 'left' });
sr.reveal('.cards', {delay:450, origin: 'top' });
sr.reveal('.main p', {delay:200, origin: 'left' });
sr.reveal('.main button', {delay:200, origin: 'left' });

sr.reveal('.main2, h1, h3, p', {delay:200, origin:'top'});
sr.reveal('.main2, button', {delay:200, origin:'left'});
sr.reveal('.image2', {delay:200, origin:'right'});

sr.reveal('.contactcolumn', {delay:200, origin:'top'});
sr.reveal('.location', {delay:200, origin:'right'});

const typed = new Typed(".multipletext", {
    strings: ['Happy Home','Decorate Home','Modern Home','Stylish Home'],
    typeSpeed: 50,
    backSpeed: 50,
    backDelay: 1200,
    loop: true,
}); 

const icon = document.getElementById("icon");
icon.onclick = function(){
    document.body.classList.toggle("darktheme");
    if (document.body.classList.contains("darktheme")) {
        icon.src = "images/sun.png";
    } else icon.src = "images/moon.png";
    }

