const form = document.getElementById('form')

const email_reg_tab = document.getElementById('email_reg-tab')
const mobile_reg_tab = document.getElementById('mobile_reg-tab')

const email = document.getElementById('email')
const mobile = document.getElementById('mobile')
const currency = document.getElementById('currency')
const terms = document.getElementById('terms')
const notifications = document.getElementById('notifications')


form.addEventListener('submit', (e) => {

    e.preventDefault();

    // Additional email and phone validation
    let validationPassed = false;

    if (email_reg_tab.getAttribute('aria-selected')) validationPassed = this.validateEmail(email.value)
    else validationPassed = this.validatePhone(email.value)





})

function validateEmail(mail) {
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail)) {
        return (true)
    }
    alert("You have entered an invalid email address!")
    return (false)
}

function validatePhone(phone) {
    if (/^\d{10}$/.test(phone)) {
        return (true)
    }
    alert("You have entered an invalid mobile number!")
    return (false)
}