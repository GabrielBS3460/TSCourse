"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
let x = 10;
x = 20;
console.log(x);
let firstName = "gabriel";
let age = 21;
const isAdmin = true;
console.log(typeof firstName);
firstName = "Marcos";
console.log(firstName);
const myNumbers = [1, 2, 3];
console.log(myNumbers);
console.log(myNumbers.length);
console.log(firstName.toUpperCase());
myNumbers.push(5);
console.log(myNumbers);
//Tuplas
let myTuple;
myTuple = [5, "teste", ["a", "b"]];
const user = {
    name: "Gabriel",
    age: 21,
};
console.log(user);
let id = "10";
id = 10;
let userId = 10;
userId = "20";
//Enum
var Size;
(function (Size) {
    Size["P"] = "Pequeno";
    Size["M"] = "M\u00E9dio";
    Size["G"] = "Grande";
})(Size || (Size = {}));
const camisa = {
    name: "Camisa Gola V",
    Size: Size.G
};
console.log(camisa);
function sum(a, b) {
    return a + b;
}
console.log(sum(12, 12));
function sayHelloTo(name) {
    return "Hello " + name;
}
console.log(sayHelloTo("Gabriel"));
function logger(msg) {
    console.log(msg);
}
logger("Teste!");
function greeting(name, greet) {
    if (greet) {
        console.log(`Hello ${greet} ${name}`);
    }
    else {
        console.log(`Hello ${name}`);
    }
}
greeting("Gabriel");
greeting("Gabriel", "Mestre");
function sumNumbers(nums) {
    return nums.n1 + nums.n2;
}
console.log(sumNumbers({ n1: 1, n2: 2 }));
function multiplyNumbers(nums) {
    return nums.n1 * nums.n2;
}
const numbers = {
    n1: 5,
    n2: 10
};
console.log(multiplyNumbers(numbers));
//narrowing
function doSomething(info) {
    if (typeof info === "number") {
        console.log(`O número é ${info}`);
        return;
    }
    console.log("Não foi passado um número");
}
doSomething(5);
doSomething(false);
//generics
function showArrayItems(arr) {
    arr.forEach((item) => {
        console.log(`ITEM: ${item}`);
    });
}
const a1 = [1, 2, 3];
const a2 = ["a", "b", "c"];
showArrayItems(a1);
showArrayItems(a2);
//Classes
class User {
    constructor(name, age, role, isAproved) {
        this.name = name;
        this.age = age;
        this.role = role;
        this.isAproved = isAproved;
    }
    showUserName() {
        console.log(`O nome do usuário é ${this.name}`);
    }
    showUserAge(aux) {
        if (aux) {
            console.log(`A idade do usuário é ${aux}`);
            return;
        }
        console.log("Informação Restrita!");
    }
}
const gabriel = new User("Gabriel", 21, "Estagiário", true);
console.log(gabriel);
gabriel.showUserName();
gabriel.showUserAge(false);
class Car {
    constructor(brand, wheels) {
        this.brand = brand;
        this.wheels = wheels;
    }
    showBrand() {
        console.log(this.brand);
    }
}
const fusca = new Car("VW", 4);
fusca.showBrand();
//Herança
class SuperCar extends Car {
    constructor(brand, wheels, engine) {
        super(brand, wheels);
        this.engine = engine;
    }
}
const a4 = new SuperCar("AUDI", 4, 2.0);
a4.showBrand();
//decorators
function BaseParameters() {
    return function (constructor) {
        return class extends constructor {
            constructor() {
                super(...arguments);
                this.id = Math.random();
                this.createdAt = new Date();
            }
        };
    };
}
let Person = class Person {
    constructor(name) {
        this.name = name;
    }
};
Person = __decorate([
    BaseParameters()
], Person);
const sam = new Person("Sam");
console.log(sam);
