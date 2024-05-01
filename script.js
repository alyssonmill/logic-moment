// Faça um algoritmo para coletar os seguintes dados de um carro: modelo, ano e 
// valor. Salve as informações em arrays;

// Seu algoritmo deve permitir o cadastro de apenas 3 carros;

// Ao final mostre no console as informações do carro mais barato e do mais 
// caro respectivamente e a média dos valores de todos os carros;

class Car {
    constructor(model, year, price){
        this.model = model;
        this.year = year;
        this.price = price;
    }
}

let cars = [];

function addCar (model, year, price){
    if(cars.length < 3){
        let newCar = new Car (model, year, price);
        cars.push(newCar);
    }else{
        console.log("Maximum number of cars reached. Cannot add more.");
    }
}


addCar("1", 1, 2)
addCar("2", 2, 2)
addCar("3", 3, 3)
addCar("4", 4, 4)


console.log(cars)
