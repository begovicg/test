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

    console.log("email_reg_tab: ", email_reg_tab.getAttribute('aria-selected'));
    console.log("mobile_reg_tab: ", mobile_reg_tab.getAttribute('aria-selected'));

    console.log("email value: ", email.value);
    console.log("mobile value: ", mobile.value);
    console.log("currency value: ", currency.value);
    console.log("terms checked: ", terms.checked);
    console.log("notifications checked: ", notifications.checked);


})