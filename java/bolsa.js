function app(){

    const qnome = document.getElementById('qnome')
    const qcodigo = document.getElementById('qcodigo')
    const qquanti = document.getElementById('qquanti')
    const qvalunit = document.getElementById('qvalunit')
    const qdata = document.getElementById('qdata')
    const qsalvar = document.querySelector('qsalvar')

    const compra_venda = document.querySelectorAll('input[name= "vendas"');
    
    
    qsalvar.addEventListener('click', () => {
        let tipo_operacao;

        for (const compra_venda of compra_venda){
            if (compra_venda.checked){
                if(compra_venda.value == 'Venda'){
                    tipo_operacao = -1;
                }
                else{
                    tipo_operacao = 1;
                }
                break
            }
        }
    

        const quantidade = Number(qquanti.value)
        const valor_unitario = Number(qvalunit.value)

        const valor_total = quantidade * valor_unitario * tipo_operacao
    })
}

app()