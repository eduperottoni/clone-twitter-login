const form = document.getElementById('form')
const inputUser = document.getElementById('cel-email-user');
const inputPassword = document.getElementById('password');
const divInputUser = document.getElementById('user');
const divInputPassword = document.getElementById('passwd');
const labelUser = document.getElementById('label-user');
const labelPassword = document.getElementById('label-password');
const button = document.getElementById('button-submit')
const buttonTitle = document.getElementById('button-title')

//Traqueando o evento de foco 
//Quando o input estiver em foco, bordas e labels em azul

inputUser.addEventListener('focus', function(event) {
    event.preventDefault();
    divInputUser.style.borderBottom = '3px solid var(--blue-twitter)'
    labelUser.style.color = 'var(--blue-twitter)'
})

inputUser.addEventListener('blur', function(event) {
    event.preventDefault();
    divInputUser.style.borderBottom = ''
    labelUser.style.color = ''
})

inputPassword.addEventListener('focus', function(event) {
    event.preventDefault();
    divInputPassword.style.borderBottom = '3px solid var(--blue-twitter)'
    labelPassword.style.color = 'var(--blue-twitter)'
})

inputPassword.addEventListener('blur', function(event) {
    event.preventDefault();
    divInputPassword.style.borderBottom = ''
    labelPassword.style.color = ''
})

//Traqueando os inputs
//Quando os dois inputs estiverem preenchidos, habilitar o botão de entrar nas cores branco e azul



// setInterval(function(){
//     var buttonReady = inputUser.value.length > 0 && inputPassword.value.length > 0
//     if (buttonReady){
//         button.style.backgroundColor= 'var(--blue-twitter)';
//         buttonTitle.style.color = 'white';
//         button.addEventListener('onmouseover', function(event){
//             event.preventDefault();
//             button.style.backgroundColor= 'var(--button-blocked)'
//             buttonTitle.style.color='var(--button-text-blocked)'
//         })
//     }else{
//         button.style.backgroundColor= '';
//         buttonTitle.style.color = '';
//     }
//     return buttonReady;
// },200)

inputUser.addEventListener('keydown', function(){
    console.log('Oi')
    let buttonReady = inputUser.value.length > 0 && inputPassword.value.length > 0
    if (buttonReady){
        button.style.backgroundColor= 'var(--blue-twitter)';
        buttonTitle.style.color = 'white';
        button.addEventListener('onmouseover', function(event){
            event.preventDefault();
            button.style.backgroundColor= 'var(--button-blocked)'
            buttonTitle.style.color='var(--button-text-blocked)'
        })
    }else{
        button.style.backgroundColor= '';
        buttonTitle.style.color = '';
    }
})



button.addEventListener('onmouseover', function(event){
    event.preventDefault();
    if  (inputUser.value.length > 0 && inputPassword.value.length > 0){
        button.style.backgroundColor= 'var(--button-blocked)'
        buttonTitle.style.color='var(--button-text-blocked)'
    }
})
 
//Traqueando evento de clique no botão de entrar
//Se o botão for clicado, exibir um alert na tela 
