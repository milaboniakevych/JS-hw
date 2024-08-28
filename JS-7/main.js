/*
- Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone
створити пустий масив, наповнити його 10 об'єктами new User(....)*/


/*function User (id, name, surname, email, phone) {
    this.id = id;
    this.name = name;
    this.surname = surname;
    this.email = email;
    this.phone = phone;

}*/
/*
let user = new User (1, 'mila', 'boniakevych', 'mbonakevic@gmail.com', '+380976268813');
console.log(user);
*/

/*let users = [
    new User (7777, 'lalala', 'blalalal', 'pkm@gmail.com', '+38909098748'),
    new User (8989, 'lalalap', 'blalalal', 'ikm@gmail.com', '+3890909880'),
    new User (4343, 'lalalal', 'blalalal', 'ykm@gmail.com', '+3890909045'),
    new User (3343, 'lalalak', 'blalalal', 'tkm@gmail.com', '+3890909078'),
    new User (4343, 'lalalam', 'blalalal', '4km@gmail.com', '+3890909034'),
    new User (5656, 'lalalab', 'blalalal', 'rkm@gmail.com', '+3890909099'),
    new User (4343, 'lalalav', 'blalalal', '6km@gmail.com', '+3890909026'),
    new User (5454, 'lalalac', 'blalalal', 'dkm@gmail.com', '+3890909093'),
    new User (2323, 'lalalax', 'blalalal', 'gkm@gmail.com', '+3890909046'),
    new User (1111, 'lalalad', 'blalalal', 'akm@gmail.com', '+3890909022'),

];
console.log(users);*/

/*--------------------------------------------------------------------------------*/

/*Взяти масив з  User[] з попереднього завдання, та відфільтрувати , залишивши тільки об'єкти з парними id (filter)*/

/*let filteredUsers = users.filter(user => user.id % 2 === 0);
console.log(filteredUsers);*/

/*--------------------------------------------------------------------------------*/

/*
Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)*/

/*
let sortedUsers = users.sort((user1,user2) => user1.id - user2.id);
console.log(sortedUsers);*/

/*--------------------------------------------------------------------------------*/

/*
створити класс для об'єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів)
створити пустий масив, наповнити його 10 об'єктами Client*/

/*class Client {
    constructor(id, name, surname , email, phone, order) {
        this.id = id;
        this.name = name;
        this.surname = surname;
        this.email = email;
        this.phone = phone;
        this.order = order;
    }
}

const Clients = [
    new Client (7777, 'lalala', 'blalalal', 'pkm@gmail.com', '+38909098748', '90'),
    new Client (8989, 'lalalap', 'blalalal', 'ikm@gmail.com', '+3890909880', '80'),
    new Client (4343, 'lalalal', 'blalalal', 'ykm@gmail.com', '+3890909045', '70'),
    new Client (3343, 'lalalak', 'blalalal', 'tkm@gmail.com', '+3890909078', '60'),
    new Client (4343, 'lalalam', 'blalalal', '4km@gmail.com', '+3890909034', '50'),
    new Client (5656, 'lalalab', 'blalalal', 'rkm@gmail.com', '+3890909099', '40'),
    new Client (4343, 'lalalav', 'blalalal', '6km@gmail.com', '+3890909026', '30'),
    new Client (5454, 'lalalac', 'blalalal', 'dkm@gmail.com', '+3890909093', '20'),
    new Client (2323, 'lalalax', 'blalalal', 'gkm@gmail.com', '+3890909046', '10'),
    new Client (1111, 'lalalad', 'blalalal', 'akm@gmail.com', '+3890909022', '01'),
];

console.log(Clients);*/

/*--------------------------------------------------------------------------------*/

/*
Взяти масив (Client [] з попереднього завдання).Відсортувати його по кількості товарів в полі order по зростанню. (sort)*/

/*let sortedClients = Clients.sort((client1, client2) => client1.order - client2.order);
console.log(sortedClients);*/

/*--------------------------------------------------------------------------------*/

/*
- Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
-- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
-- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
-- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
-- changeYear (newValue) - змінює рік випуску на значення newValue
-- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car*/

/*
function Car (model, producer, releaseDate, maxSpeed, engine) {
    this.model = model;
    this.producer = producer;
    this.releaseDate = releaseDate;
    this.maxSpeed = maxSpeed;
    this.engine = engine;
    this.drive = function () {
        console.log(`їдемо зі швидкістю ${this.maxSpeed} на годину`);


};
    this.info = function (){
        for (const field in this) {
            console.log(field, this[field]);
        }
    };
    this.increaseMaxSpeed = function (newSpeed){
        if (maxSpeed > 0) this.maxSpeed = this.maxSpeed + newSpeed;
    };
    this.changeYear = function (newValue){
        this.releaseDate = newValue;
    };
    this.addDriver = function (driver){
        if (driver) this.driver = driver;
    };

}
    const car = new Car ('BMW', 'BMW Group', 2020, 160, 'Inline-four turbo');


    car.drive();
    car.info();
    car.increaseMaxSpeed(50);
    car.changeYear(2022);
    car.addDriver({});

    console.log(car);*/

/*--------------------------------------------------------------------------------*/

/*
- (Те саме, тільки через клас)
Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
-- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
-- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
-- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
-- changeYear (newValue) - змінює рік випуску на значення newValue
-- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car*/

/*class Car {
    constructor (model, producer, releaseDate, maxSpeed, engine) {
        this.model = model;
        this.producer = producer;
        this.releaseDate = releaseDate;
        this.maxSpeed = maxSpeed;
        this.engine = engine;
    }
        drive () {
            console.log(`їдемо зі швидкістю ${this.maxSpeed} на годину`);

        };
        info (){
            for (const field in this) {
                console.log(field, this[field]);
            }
        };
        increaseMaxSpeed (newSpeed){
            this.maxSpeed = this.maxSpeed + newSpeed;
        };
        changeYear (newValue){
            this.releaseDate = newValue;
        };
        addDriver (driver){
             this.driver = driver;
        };


}
    const car = new Car ('BMW', 'BMW Group', 2020, 160, 'Inline-four turbo');


    car.drive();
    car.info();
    car.increaseMaxSpeed(50);
    car.changeYear(2022);
    car.addDriver({});

    console.log(car);*/


/*--------------------------------------------------------------------------------*/

/*-створити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги. Створити масив з 10 попелюшок.
Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
    За допомоги циклу знайти яка попелюшка повинна бути з принцом.
    Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку*/

/*function Cinderella (name, age, footSize) {
    this.name = name;
    this.age = age;
    this.footSize = footSize;
}

const Cinderellas = [
    new Cinderella ('via', 25, 38),
    new Cinderella ('eia', 26, 39),
    new Cinderella ('tia', 27, 35),
    new Cinderella ('mia', 35, 36),
    new Cinderella ('kia', 22, 36),
    new Cinderella ('ria', 55, 37),
    new Cinderella ('nia', 31, 40),
    new Cinderella ('gia', 20, 41),
    new Cinderella ('sia', 24, 39),
    new Cinderella ('lia', 47, 38),
];

class Prince {
    constructor (name, age, foundShoe) {
        this.name = name;
        this.age = age;
        this.foundShoe = foundShoe;
    }

}
const prince = new Prince ('prince', 30, 35);

for (const cinderella of Cinderellas) {
    if (cinderella.footSize === prince.foundShoe) {
        prince.wife = cinderella;
    }

}
console.log(prince);*/


/*const princeWife = Cinderellas.find(cinderella => cinderella.footSize === prince.foundShoe);
prince.wife = princeWife;*/

/*--------------------------------------------------------------------------------*/

/*
Через Array.prototype. створити власний foreach, filter*/

/*Array.prototype.myForEach = function (callback){
    const arr = this;
    for (const item of arr) {
        callback(item);
    }

};

[12,122,133].myForEach ((x) => console.log(x));*/


/*
Array.prototype.myFilter = function (claim){
    const arr = [];
    for (const item of this) {
        if (claim(item)) {
            arr.push(item);
        }
    }
    return arr;
};

    let users = [
        {name: 'nika', status: true},
        {name: 'mika', status: false}
    ];

    const result =users.myFilter((user) => user.status);
    console.log(result);*/
