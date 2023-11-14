// 2 Arrow Function 

const sum = function sum(a,b) {
    return a + b 
}

const arrowSum = (a, b) => a + b

console.log(sum(5 , 5))
console.log(arrowSum(5,5))


const greeting = (name) => {
    if (name){
        return "Olá " + name + "!"
    } else {
        return "Olá!"
    }
}

console.log(greeting('Joao'))
console.log(greeting())


const testeArrow = () =>{

    console.log('Arrow Function sem parâmetros')

}

testeArrow()


// const user = {
//     name: 'Theo',
//     sayUserName() {
//         var self = this
//         setTimeout(function() {
//             console.log(this)
//             console.log("Username: " + self.name)
//         }, 500)
//     },
//     sayUserNameArrow() {
//         setTimeout(() =>{
//             console.log('Username: ' + this.name)
//         }, 700)
//     }
// }

// user.sayUserName()
// user.sayUserNameArrow()


// 3 - Filter

const arr = [1, 2, 3, 4, 5 ]

const highNumbers = arr.filter((n) => {
    if( n >= 3){
        return n
    }
})

console.log(highNumbers)


const users = [
    {name: "Matheus", available: true},
    {name: "Pedro", available: false},
    {name: "João", available: false},
    {name: "Cícero", available: true},
]

const availableUsers = users.filter((user) => user.available)

console.log(availableUsers)


//  4 Map

const products = [ 
    {name: "Camisa", price: 10.99, category: "Roupas"},
    {name: "Calça", price: 14.99, category: "Roupas"},
    {name: "Perfume", price: 110.49, category: "Perfumaria"},
    {name: "Saia", price: 78.99, category: "Roupas"},
    {name: "Tênis", price: 102.99, category: "Sapatos"}
]

products.map((product) => {
    if(product.category === "Roupas"){
        product.onSale = true
    }
})

console.log(products)


// 6 - Destructuring com arrays

const fruits = ["Maçã","Laranja","Mamão"]

const [f1,f2,f3] = fruits

console.log(f1)

// 6 - Destructuring com objetos

const productsDetails = {
    name: "Mouse",
    price: 39.99,
    category: "Periféricos",
    color: "Cinza"
}

const {name: productName, price, category: productCategory, color} = productsDetails

console.log(`O nome do produto é ${productName}. Ele custa ${price}, tem cor ${color} e está na categoria de ${productCategory}.`)

// 8 Classe

class Product{
    constructor(nome, preço) {
        this.nome = nome
        this.preço = preço
    }

    produtoComDesconto(desconto){
        return this.preço * ((100 - desconto) / 100)
    }
}

const camisa = new Product('Sandália', 190)

console.log(camisa.produtoComDesconto(20))