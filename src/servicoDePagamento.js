/*
    Crie uma classe que possua dois métodos: um para realizar pagamento e outro para
    consultar o ultimo pagamento. Pagamentos serão armazenados como  objetos JavaScript
    dentro de uma lista de pagamentos. Cada pagamento terá as propriedades: código de
    barras, Empresa e Valor. Quando um pagamento for realizado e o valor for maior que 
    100,00 o pagamento também terá a propriedade categoria como 'cara', caso contrário, 
    a propriedade categoria ficará como 'padrão'. O método de consultar trará apenas o 
    último pagamento. 

    Exemplo:
    const servicoDePagamento  = new ServicoDePagamento();
    servicoDePagamento.pagar('0225-1254-3219', 'Samar', '156.87');
    console.log(servicoDePagamento.consultarUltimoPagamento());
    {
        codigoBarras: '0225-1254-3219',
        empresa: 'Samar',
        valor: '156.87',
        categoria: cara
    }
*/

export class ServicoDePagamento{
    #pagamentos //propriedade deve ter código de barra, empresa e valor

    constructor(){ // é uma função chamada sempre que der um new na sua classe
        this.#pagamentos = []; // # indica que a propriedade é privada
    }
    realizarPagamento(codigoBarra, empresa,valor){
        const valorNumerico = Number(valor);
        const pagamento = {
            codigoBarra: codigoBarra,
            empresa: empresa,
            valor:valor,
            categoria: valorNumerico > 100 ? 'cara': 'padrão'
        };
        
        this.#pagamentos.push(pagamento);

    }

    consultarUltimoPagamento(){
        if(this.#pagamentos.length === 0){
            return null;
        }

        return this.#pagamentos[this.#pagamentos.length -1];
    }

}
const servicoDePagamento = new ServicoDePagamento();
servicoDePagamento.realizarPagamento(
    '0225-1234-8765',
    'jujuCosmedicos',
    '188.99'
);
console.log(servicoDePagamento.consultarUltimoPagamento());


