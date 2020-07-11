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

    if ((emailTabActive == 'true' && mobileTabActive == 'false')) {
        validationPassed = this.validateEmail(email.value)
    } else {
        validationPassed = this.validatePhone(mobile.value)
    }

    if (validationPassed) {
        // $('#overlay').fadeIn().delay(2000).fadeOut(); // jQuery solution
        let overlay = document.getElementById('overlay')
        this.fade('in', 500, overlay);
        window.setTimeout(registration_finished, 3000);

        function registration_finished() {
            this.fade('out', 500, overlay);
            // TODO: alert user registration had finished
            Swal.fire({
                title: 'Account registered!',
                text: 'You have successfully registered your Citrus Systems account',
                icon: 'success',
                confirmButtonText: 'Proceed to login'
            })
        }

    }

})

function validateEmail(mail) {
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
    if (/^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im.test(phone)) {
        return (true)
    }
    Swal.fire({
        title: 'Error!',
        html: 'You have entered an invalid mobile number! <br>Supported mobile phone formats are: <br>(123) 456-7890 <br>(123)456-7890 <br>123-456-7890 <br>123.456.7890 <br>1234567890 <br>+38112345678 <br>062-1636188',
        icon: 'error',
        confirmButtonText: 'Close'
    })
    return (false)
}


function fade(type, ms, el) {
    var isIn = type === 'in',
        opacity = isIn ? 0 : 1,
        interval = 50,
        duration = ms,
        gap = interval / duration;

    if (isIn) {
        el.style.display = 'inline';
        el.style.opacity = opacity;
    }

    function func() {
        opacity = isIn ? opacity + gap : opacity - gap;
        el.style.opacity = opacity;

        if (opacity <= 0) el.style.display = 'none'
        if (opacity <= 0 || opacity >= 1) window.clearInterval(fading);
    }

    var fading = window.setInterval(func, interval);

}