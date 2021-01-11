const prompt = require("prompt-sync")({sigint: true})

const valorEnergetico = 4.5

function Cliente(nome, compra) {
    this.nome = nome
    this.compra = compra
    this.icms = parseFloat((compra * valorEnergetico * 0.18.toFixed(2)))
    this.ipi = parseFloat((compra * valorEnergetico * 0.04.toFixed(2)))
    this.pis =  parseFloat((compra * valorEnergetico * 0.0186).toFixed(2))
    this.cofins =  parseFloat((compra * valorEnergetico * 0.0854.toFixed(2)))
    this.totalImpostos = this.icms + this.ipi + this.pis + this.cofins
    this.totalMercadoria = compra * valorEnergetico
}

let expr = 0,
    option,
    clientes = [],
    inputNome,
    inputCompra

while(expr == 0) {
    console.log("\n\n⚡️⚡️⚡️⚡️⚡️⚡️⚡️ Energético Accelerator ⚡️⚡️⚡️⚡️⚡️⚡️⚡️")
    console.log("Opção 1 =>  Adicionar Venda;")
    console.log("Opção 2 =>  Emitir Relátorio;")

    option = prompt("\nEscolha a opção: ")

    switch(option>0) {
        case option == 1:
            inputNome = prompt("Nome do cliente: ")
            inputCompra = prompt("Quantidade de energéticos: ")
            clientes.push(new Cliente(inputNome, inputCompra))


            break
        case option == 2:
            if (clientes[0] != null) {

                let totalImpostos = 0
                let totalMercadoria = 0
                
                for (const cliente of clientes) {
                    totalImpostos += cliente.totalImpostos
                    totalMercadoria += cliente.totalMercadoria
                    
                    console.log(`Cliente:${cliente.nome} \n\nICMS: R$ ${cliente.icms}; | IPI: R$ ${cliente.ipi}; | PIS: R$ ${cliente.pis}; | COFINS: R$ ${cliente.cofins}; | Total: R$ ${cliente.totalMercadoria + cliente.totalImpostos}`)
                }
                
                console.log(`\n\nTotal Impostos: R$ ${totalImpostos} \nTotal Mercadorias: R$ ${totalMercadoria} \nTotal Geral: R$ ${totalImpostos + totalMercadoria}`)
                
                expr = 1
                break
            } else {
                console.log("\n\nInsira uma venda!")
                break
            }
    }
}