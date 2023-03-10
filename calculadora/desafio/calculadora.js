//tipo: ação ou valor
//valor: representação textual do botão
function calcular(tipo, valor){
    //console.log(tipo,valor)
    if(tipo === 'acao'){
        //limpar o campo
        if(valor === 'c'){
            document.getElementById('visor').value = ''
        }

        if(valor === '+' || valor === '-' || valor === '*' || valor === '/' || valor ==='.'){
            document.getElementById('visor').value += valor
        }
        if(valor === '='){
         let valor_campo = eval(document.getElementById('visor').value )
         document.getElementById('visor').value = valor_campo
        }

    }else if(tipo === 'valor'){
        document.getElementById('visor').value += valor
    }
}