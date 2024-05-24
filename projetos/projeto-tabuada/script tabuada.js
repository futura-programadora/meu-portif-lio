function tabuada() {
    var num = document.getElementById('txtn')
    var tab = document.getElementById('seltab')
    if (num.value.length == 0) {
    window.alert('Por favor, digite um numero!')
    } else {
        var n = Number(num.value)
        var c = 1
        tab.innerHTML = ''//esvazia o option antes de mostrar a proxima tabuada.
        while (c <= 10) {//vai repetir, a menos que o if seja verdade 
            var item = document.createElement('option')//criar uma option denominada como item
            item.text = `${n} x ${c} = ${n*c}`// numero x 1 = n*c, parte de dentro do option
            item.value = `tab${c}`//identifica o item selecionado 
            tab.appendChild(item)//faz o item.text aparecer na tela
            c++//no fim do while sempre
        }
    }
}
