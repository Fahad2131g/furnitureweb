const sr = ScrollReveal({
    distance: "65px",
    duration: '2600',
    delay: 450,
    reset: true

});
sr.reveal('.main', {delay:200, origin: 'top' });
sr.reveal('img', {delay:250, origin: 'left' });
sr.reveal('.cards', {delay:450, origin: 'right' });

sr.reveal('.main2', {delay:200, origin:'top'});
sr.reveal('.image2', {delay:200, origin:'right'});