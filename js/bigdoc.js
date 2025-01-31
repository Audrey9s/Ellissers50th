

const scriptURL = 'https://script.google.com/macros/s/AKfycbwuvdmQVs6PCCqAwydJznIHTcnq7IIKlPaEQOyg_jChHe1zTkKjT7bOXEQbtSjkNUXfTg/exec'

// Message after submission of form

const form = document.forms['contact-form']

form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, {method: 'POST', body: new FormData(form)})
    .then(response => alert("Thank you! your form is submitted successfully."))
    .then(() => { window.location.reload(); })
    .catch(error => console.error('Error!', error.message))
})



// /*=============== SCROLL REVEAL ANIMATION ===============*/

window.sr = ScrollReveal({ duration:1350, distance:'250px', easing:'ease-out', opacity:1});

sr.reveal('.reveal-left', {origin:'left', reset:true});
sr.reveal('.reveal-top', {origin:'top', reset:true});
sr.reveal('.reveal-rotate', {origin:'top', rotate:{x:1000, z:1000}, reset:true});


