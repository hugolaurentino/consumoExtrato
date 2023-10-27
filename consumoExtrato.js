const produtos = [{
    nome: 'Pão de Alho',
    precoUnit: 1500,
    quantidade: 3,
},
{
    nome: 'Cerveja',
    precoUnit: 1000,
    quantidade: 2,
},
{
    nome: 'Água',
    precoUnit: 500,
    quantidade: 1,
}];

const endereco = {
    cidade: 'São Paulo',
    bairro: 'Ferraz de Vasconcelos',
    rua: 'Desembargador augusto de macedo costa junior',
    complemento: 'casa 2',
    numero: 465,
    cep: '08000-000'
}

const cartaoConsumo = {
    nome: 'Hugo',
    idade: 40,
    produtos,
    endereco
}

let total = 0

for (const totalCompra of cartaoConsumo.produtos) {
    totalCompra.quantidade > 1 ?
        total += totalCompra.quantidade * totalCompra.precoUnit :
        total += totalCompra.precoUnit
}

console.log(`
Cidade: ${cartaoConsumo.endereco.cidade}
Bairro: ${cartaoConsumo.endereco.bairro}
Rua: ${cartaoConsumo.endereco.rua}
Complemento: ${cartaoConsumo.endereco.complemento}
Rua: ${cartaoConsumo.endereco.rua}
Numero: ${cartaoConsumo.endereco.numero}
CEP: ${cartaoConsumo.endereco.cep}

Olá ${cartaoConsumo.nome} seus item:`);

for (const item of produtos) {
    console.log(`Quantidade: ${item.quantidade} / ${item.nome} / valor: ${(item.precoUnit / 100).toFixed(2)}`);

}

console.log(`O valor total da compra: ${(total / 100).toFixed(2)}
`);