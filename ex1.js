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
