let email = document.getElementById('input-email');
let senha = document.getElementById('input-senha');
let login = document.getElementById('form-login');
let emailError = document.getElementById('email-error');
let senhaError = document.getElementById('senha-error');


login.addEventListener('submit',function(event){
    let emailLength = email.value.length
    let senhaLength = senha.value.length
    emailError.textContent = ''
    senhaError.textContent = ''

    if(!emailLength){
        emailError.textContent = 'Digite email'
        event.preventDefault();
    }
    if(!senhaLength){
        senhaError.textContent = 'Digite senha'
        event.preventDefault();
    }
});