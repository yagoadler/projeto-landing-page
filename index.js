var Setadireita = window.document.getElementById('setadireita')
var Setaesquerda = window.document.getElementById('setaesquerda')
var leonardo = window.document.getElementById('leonardo')
var samantha = window.document.getElementById('samantha')
var bruna = window.document.getElementById('bruna')

function RolarParaDireita() {
    leonardo.style = 'display:none'
    bruna.style = 'display: flex'
    Setadireita.style = 'display:none'
    Setaesquerda.style = 'display:flex; margin-top: 20%'
}

function RolarParaEsquerda() {
    bruna.style = 'display:none'
    leonardo.style = 'display.flex'
    Setaesquerda.style = 'display:none' 
    Setadireita.style = 'display:flex; margin-top: 20%'
}