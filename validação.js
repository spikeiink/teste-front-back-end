
let user = document.querySelector('#user')
let validUser = false
let labeluser = document.querySelector('#labelUser')
let senha = document.querySelector('#senha')
let validSenha = false
let labelsenha = document.querySelector('#labelSenha')
let senhaconfirm = document.querySelector('#senhaconfirm')
let validSenhaconfirm = false
let labelconfirm = document.querySelector('#labelSenhaconfirm')
let msgError = document.querySelector('#msgError')


user.addEventListener('keyup', () => {
    if(user.value.length <= 4){
        labeluser.setAttribute('style', 'color: red')
        user.setAttribute('style', 'border-color: red')
        validUser = false
    }else{
        labeluser.setAttribute('style', 'color: green')
        user.setAttribute('style', 'border-color: green')
        validUser = true

    }
})

senha.addEventListener('keyup', () => {
    if(senha.value.length <= 6){
        labelsenha.setAttribute('style', 'color: red')
        senha.setAttribute('style', 'border-color: red')
        validSenha = false
    }else{
        labelsenha.setAttribute('style', 'color: green')
        senha.setAttribute('style', 'border-color: green')
        validSenha = true
    }
})

senhaconfirm.addEventListener('keyup', () => {
    if(senha.value != senhaconfirm.value){
        labelconfirm.setAttribute('style', 'color: red')
        senhaconfirm.setAttribute('style', 'border-color: red')
        validSenhaconfirm = false
    }else{
        labelconfirm.setAttribute('style', 'color: green')
        senhaconfirm.setAttribute('style', 'border-color: green')
        validSenhaconfirm = true

    }
})


function cadastrar(){
    
    if(validUser && validSenha && validSenhaconfirm){
    let listaUser = JSON.parse(localStorage.getItem('listaUser') || '[]')

    listaUser.push({
        userCad: user.value,
        senhaCad: senha.value
    })


    localStorage.setItem('listaUser', JSON.stringify(listaUser))

    window.location.href = 'http://127.0.0.1:5500/pages/login.html'
    }else{
        msgError.setAttribute('style', 'display: block')
        msgError.innerHTML = '<strong>Preencha os Campos</strong>'
    }
}


function logar(){
    let user = document.querySelector('#user')
    let labeluser = document.querySelector('#labelUser')

    let senha = document.querySelector('#senha')
    let labelsenha = document.querySelector('labelSenha')

    let msgError = document.querySelector('#msgError')
    let listaUser = []

    let userValid = {
        user:'',
        senha:''
    }

    listaUser = JSON.parse(localStorage.getItem('listaUser'))

    listaUser.forEach((item) => {
        if(user.value == item.userCad && senha.value == item.senhaCad){
           userValid = {
            user: item.userCad,
            senha: item.senhaCad
           } 
        }

    })

    


    if(user.value == userValid.user && senha.value == userValid.senha){
        window.location.href = '/index.html'

        let token = Math.random().toString(16).substring(2) + Math.random().toString(16).substring(2)
        localStorage.setItem ('token', token)

        localStorage.setItem('userLogado', JSON.stringify(userValid))
    }else{
        labeluser.setAttribute('style', 'color: red')
        user.setAttribute('style', 'border-color: red')
        labelsenha.setAttribute('style', 'color: red')
        senha.setAttribute('style', 'border-color: red')
        usuario.focus()


    }
    

}

let userLogado = JSON.parse( localStorage.getItem('userLogado')) 

let logado = document.querySelector('#logado')
logado.innerHTML = ''


function sair(){
    

    
    localStorage.removeItem('token')
    localStorage.removeItem('userLogado')
    window.location.href = 'http://127.0.0.1:5500/pages/login.html'
}

