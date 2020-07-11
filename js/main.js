const form = document.getElementById('form')

const email = document.getElementById('email')
const mobile = document.getElementById('mobile')


form.addEventListener('submit', (e) => {

    e.preventDefault();

    // Note - returns strings!
    let emailTabActive = document.getElementById('email_reg-tab').getAttribute('aria-selected')
    let mobileTabActive = document.getElementById('mobile_reg-tab').getAttribute('aria-selected')

    // Additional email and phone validation
    let validationPassed = false;

    if ((emailTabActive == "true" && mobileTabActive == "false")) {
        validationPassed = this.validateEmail(email.value)
    } else {
        validationPassed = this.validatePhone(mobile.value)
    }

    if (validationPassed) {
        // TODO: set interval for loading spinner, after that alert user that his account had been successfully registered
    }

})

function validateEmail(mail) {
    console.log("validate email invoked");
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail)) {
        return (true)
    }
    Swal.fire({
        title: 'Error!',
        text: 'You have entered an invalid email address!',
        icon: 'error',
        confirmButtonText: 'Close'
    })
    return (false)
}

function validatePhone(phone) {
    console.log("validate phone invoked");
    if (/^\d{10}$/.test(phone)) {
        return (true)
    }
    Swal.fire({
        title: 'Error!',
        text: 'You have entered an invalid mobile number!',
        icon: 'error',
        confirmButtonText: 'Close'
    })
    return (false)
}