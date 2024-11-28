var altura = 0
var largura = 0
var vidas = 1
var tempo = 20

var criarMosquitoTempo = 1500

var nivel = window.location.search
nivel = nivel.replace('?', '')

if(nivel === 'normal') {
    criarMosquitoTempo = 1500
} else if (nivel === 'dificil') {
    criarMosquitoTempo = 1000
} else if (nivel === 'chucknorris') {
    criarMosquitoTempo = 650
}

function tamanhoTelaJogo() {
    
    largura = window.innerWidth
    altura = window.innerHeight
    
    console.log(largura, altura)

}

tamanhoTelaJogo()

var cronometro = setInterval(function(){
    tempo--

    if (tempo < 0) {
        clearInterval(cronometro)
        clearInterval(criarMosquito)
        window.location.href = 'vitoria.html'
    } else {
        document.getElementById('cronometro').innerHTML = tempo
    }
}, 1000)



function posicaoRandomica() {

    // Remover mosquito anterior (caso exista)
    if (document.getElementById('mosquito')) {
        document.getElementById('mosquito').remove()

        if(vidas > 3) {
            window.location.href = 'fim_de_jogo.html'
        } else {
            document.getElementById('v' + vidas).src = './imagens/coracao_vazio.png'
    
            vidas++
        }
    } 

    
    var posicaoX = Math.floor(Math.random() * largura) - 100
    var posicaoY = Math.floor(Math.random() * altura) - 100

    posicaoX = posicaoX < 0 ? 0 : posicaoX
    posicaoY = posicaoY < 0 ? 0 : posicaoY

    console.log(posicaoX, posicaoY)

    var mosquito = document.createElement('img')
    mosquito.src = 'imagens/mosquito.png'
    mosquito.className = tamanhoAleatorio() + ' ' + ladoAleatorio()
    mosquito.style.left = posicaoX + 'px'
    mosquito.style.top = posicaoY + 'px'
    mosquito.style.position = 'absolute'
    mosquito.id = 'mosquito'
    mosquito.onclick = function() {
        this.remove()
    }

    document.body.appendChild(mosquito)
    
}

function tamanhoAleatorio() {
    var classe = Math.floor(Math.random() * 3)

    if (classe === 0) {
        return 'mosquito1'

    } else if (classe === 1) {
        return 'mosquito2'
        
    } else {
        return 'mosquito3'
    }

}

function ladoAleatorio() {
    var classeLado = Math.floor(Math.random() * 2)

    if (classeLado === 0) {
        return 'mosquitoEsquerda'
    } else {
        return 'mosquitoDireita'
    }
}

