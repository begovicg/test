const email_form = document.getElementById('email_form')
const mobile_form = document.getElementById('mobile_form')

email_form.addEventListener('submit', (e) => {
    console.log("submit invoked for: ", e);
    e.preventDefault();
})


mobile_form.addEventListener('submit', (e) => {
    console.log("submit invoked for: ", e);
    e.preventDefault();
})