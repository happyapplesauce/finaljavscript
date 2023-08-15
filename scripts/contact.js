// when the "submit-button" is clicked, the contents of the contact-page are replaced with a single <p> element that reads "Thank you for your message" in size 24 font.

const contactForm = document.querySelector('.contact form');
const contactPage = document.getElementById('contact-page');

function handleSubmit(event){
    event.preventDefault();
    contactPage.innerHTML = '<p style="font-style:24px;"> Thank you for your message</p>';
}

contactForm.addEventListener('submit', handleSubmit);


// hint: you can change the style of an element by modifying the value of that element's .style.fontSize, or by updating its .classList.

