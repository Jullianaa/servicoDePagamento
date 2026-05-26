import { ServicoDePagamento } from '../src/servicoDePagamento.js';
import assert from 'node:assert';

describe('testes servico de pagamento', function () {

    it('validar que pagamento acima de 100 recebe categoria cara', function () {

        // Arrange
        const servicoDePagamento = new ServicoDePagamento();

        // Act
        servicoDePagamento.realizarPagamento(
            '0225-1234-8765',
            'JujuCosmeticos',
            '188.99'
        );

        const ultimoPagamento =
            servicoDePagamento.consultarUltimoPagamento();

        // Assert
        assert.equal(ultimoPagamento.categoria, 'cara');
    });

    it('validar que pagamento menor ou igual a 100 recebe categoria padrão', function () {

        // Arrange
        const servicoDePagamento = new ServicoDePagamento();

        // Act
        servicoDePagamento.realizarPagamento(
            '9999-8888-7777',
            'Loja Teste',
            '50.00'
        );

        const ultimoPagamento =
            servicoDePagamento.consultarUltimoPagamento();

        // Assert
        assert.equal(ultimoPagamento.categoria, 'padrão');
    });

    it('validar retorno do ultimo pagamento realizado', function () {

        // Arrange
        const servicoDePagamento = new ServicoDePagamento();

        // Act
        servicoDePagamento.realizarPagamento(
            '1111',
            'Empresa 1',
            '80.00'
        );

        servicoDePagamento.realizarPagamento(
            '2222',
            'Empresa 2',
            '200.00'
        );

        const ultimoPagamento =
            servicoDePagamento.consultarUltimoPagamento();

        // Assert
        assert.equal(ultimoPagamento.codigoBarra, '2222');
        assert.equal(ultimoPagamento.empresa, 'Empresa 2');
        assert.equal(ultimoPagamento.valor, '200.00');
        assert.equal(ultimoPagamento.categoria, 'cara');
    });

    it('validar que retorna null quando não existir pagamento', function () {

        // Arrange
        const servicoDePagamento = new ServicoDePagamento();

        // Act
        const ultimoPagamento =
            servicoDePagamento.consultarUltimoPagamento();

        // Assert
        assert.equal(ultimoPagamento, null);
    });
});