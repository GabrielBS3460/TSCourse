let x: number = 10;
x = 20;
console.log(x);

let firstName: string = "gabriel";
let age: number = 21;
const isAdmin: boolean = true;

console.log(typeof firstName);

firstName = "Marcos";

console.log(firstName);

const myNumbers: number[] = [1,2,3];

console.log(myNumbers);
console.log(myNumbers.length);
console.log(firstName.toUpperCase());
myNumbers.push(5);

console.log(myNumbers);

//Tuplas
let myTuple: [number, string, string[]];
myTuple = [5, "teste", ["a", "b"]];

const user: {name: string; age: number} = {
    name: "Gabriel",
    age: 21,
};

console.log(user);

let id: string | number = "10";
id = 10;

type myIdType = string | number;
let userId: myIdType = 10;
userId = "20";

//Enum
enum Size{
    P = "Pequeno",
    M = "Médio",
    G = "Grande"
}

const camisa = {
    name: "Camisa Gola V",
    Size: Size.G
}

console.log(camisa);

function sum(a: number, b: number){
    return a + b;
}
console.log(sum(12,12));

function sayHelloTo(name: string): string{
    return "Hello " + name;
}
console.log(sayHelloTo("Gabriel"));

function logger(msg: string): void{
    console.log(msg);
}
logger("Teste!");

function greeting(name: string, greet?: string){
    if (greet) {
        console.log(`Hello ${greet} ${name}`);
    }else{
        console.log(`Hello ${name}`);
    }
}

greeting("Gabriel");
greeting("Gabriel", "Mestre");

//interfaces
interface MathFunctionParams{
    n1: number,
    n2: number
}

function sumNumbers(nums: MathFunctionParams){
    return nums.n1 + nums.n2;
}
console.log(sumNumbers({n1: 1, n2: 2}));

function multiplyNumbers(nums: MathFunctionParams){
    return nums.n1 * nums.n2;
}

const numbers: MathFunctionParams = {
    n1: 5,
    n2: 10
}

console.log(multiplyNumbers(numbers));

//narrowing
function doSomething(info: number | boolean): void{
    if (typeof info === "number") {
        console.log(`O número é ${info}`);
        return;
    }
    console.log("Não foi passado um número");
}

doSomething(5);
doSomething(false);

//generics
function showArrayItems<T>(arr: T[]){
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
    name;
    age;
    role;
    isAproved;

    constructor(name: string, age: number, role: string, isAproved: boolean) {
        this.name = name;
        this.age = age;
        this.role = role;
        this.isAproved = isAproved;
    }

    showUserName(): void{
        console.log(`O nome do usuário é ${this.name}`);
    }

    showUserAge(aux: boolean): void{
        if(aux){
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

//interfaces em classes
interface IVehicle{
    brand: string;
    showBrand(): void;
}

class Car implements IVehicle {
    brand;
    wheels;

    constructor(brand: string, wheels: number) {
        this.brand = brand;
        this.wheels = wheels;
    }

    showBrand(): void {
        console.log(this.brand);
    }
}

const fusca = new Car("VW", 4);
fusca.showBrand();

//Herança
class SuperCar extends Car{
    engine;

    constructor(brand: string, wheels: number, engine: number){
        super(brand, wheels);
        this.engine = engine;
    }
}

const a4 = new SuperCar("AUDI", 4, 2.0);
a4.showBrand();

//decorators
function BaseParameters(){
    return function<T extends{ new (...args: any[]): {}}>(constructor: T){
        return class extends constructor{
            id = Math.random();
            createdAt = new Date();
        }
    }
}

@BaseParameters()
class Person{
    name;

    constructor(name: string){
        this.name = name;
    }
}

const sam = new Person("Sam");
console.log(sam);