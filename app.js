// form Blur Event Listeners
document.getElementById('name').addEventListener('blur', validateName);
document.getElementById('zip').addEventListener('blur', validateZip);
document.getElementById('mail').addEventListener('blur', validateMail);
document.getElementById('phone').addEventListener('blur', validatePhone);

function validateName (){
    const name = document.getElementById('name');
    const re = /^[a-zA-Z]{2,10}$/;

if(!re.test(name.value)){
    name.classList.add('is-invalid');
} else {
    name.classList.remove('is-invalid');
}

}

function validateZip (){
    const zip = document.getElementById('zip');
    const re = /^[0-9]{3}(-[0-9]{2})$/;

if(!re.test(zip.value)){
    zip.classList.add('is-invalid');
} else {
    zip.classList.remove('is-invalid');
}

}

function validateMail (){
    const mail = document.getElementById('mail');
    const re = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/;

if(!re.test(mail.value)){
    mail.classList.add('is-invalid');
} else {
    mail.classList.remove('is-invalid');
}

    
}

function validatePhone (){
    const phone = document.getElementById('phone');
    const re = /^\(?\d{3}\)?[-. ]?\d{3}[-. ]?\d{4}$/;

if(!re.test(phone.value)){
    phone.classList.add('is-invalid');
} else {
    phone.classList.remove('is-invalid');
}

    
}