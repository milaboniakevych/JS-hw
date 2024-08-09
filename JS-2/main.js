/*--------task 1------------*/
let array = [1, 2, 3, 4, 5, 'person1', 'person2', 'person3', 'person4', 'person5'];
console.log(array);



/*--------task 2------------*/
/*let book1 = {
    title: 'The butterfly garden',
    pageCount: 250,
    genre: 'detective',
}

let book2 = {
    title: 'It',
    pageCount: 800,
    genre: 'horror',
}

let book3 = {
    title: 'Madame Bovary',
    pageCount: 400,
    genre: 'drama',
}
*/



/*--------task 3------------*/
/*
let book4 = {
    title: 'All the President’s Men',
    pageCount: 480,
    genre: 'historical',
    authors: [
        {name: 'Carl Bernstein', age: 80},
        {name: 'Bob Woodward', age: 81},
        ]
}

let book5 = {
    title: 'Mad Honey',
    pageCount: 464,
    genre: 'thriller',
    authors: [
        {name: 'Jodi Picoult', age: 58},
        {name: 'Jennifer Finney Boylan', age: 66},
    ]
}

let book6 = {
    title: 'Last Christmas in Paris',
    pageCount: 368,
    genre: 'fiction',
    authors: [
        {name: 'Hazel Gaynor', age: 53},
        {name: 'Heather Webb', age: 47},
    ]
*/



/*--------task 4------------*/
let users = [
    {name: 'Marry', username: 'marr090', password: 'LL47384tr'},
    {name: 'Jeniffer', username: 'unknown333', password: 'f4frfgfygy'},
    {name: 'John', username: 'johNY', password: 'f48ru48ru4'},
    {name: 'Katharine', username: 'kate1996', password: 'kmhjihih'},
    {name: 'Michael', username: 'michael.allaston', password: '6i66uiHY'},
    {name: 'Christopher', username: 'chrisS77', password: 'uiyJKJKH'},
    {name: 'Charles', username: 'alalalala', password: 'FTH6hijif5'},
    {name: 'Mark', username: 'mark.mark', password: 'fkt^Y^H^'},
    {name: 'Nicholas', username: 'englishman1212', password: 'GT940g'},
    {name: 'Jonathan', username: 'jonjon000', password: 'gkji4836TF'},
]
console.log(users[0].password);
console.log(users[1].password);
console.log(users[2].password);
console.log(users[3].password);
console.log(users[4].password);
console.log(users[5].password);
console.log(users[6].password);
console.log(users[7].password);
console.log(users[8].password);
console.log(users[9].password);



/*--------task 5------------*/
/*const temperatures = [
    {day: 1, morning: 0, daytime: 15, evening: 8},
    {day: 2, morning: 2, daytime: 17, evening: 12},
    {day: 3, morning: -1, daytime: 10, evening: 2},
    {day: 4, morning: -3, daytime: 5, evening: 0},
    {day: 5, morning: 5, daytime: 20, evening: 8},
    {day: 6, morning: 1, daytime: 13, evening: 6},
    {day: 7, morning: 2, daytime: 17, evening: 12},

]*/



/*--------task 6------------*/
/*let x = -3;
if (x !== 0) {
    console.log('Вірно');
} else {
    console.log('Невірно');
}*/



/*--------task 7------------*/
let time = 33;
if (time >= 0 && time <= 15) {
    console.log('Перша частина години');
} else if (time >= 15 && time <= 30) {
    console.log('Друга частина години');
} else if (time >= 30 && time <= 45) {
    console.log('Третя частина години');
} else if (time >= 45 && time <= 59) {
    console.log('Четверта частина години');
} else {
    console.log('Помилка');
}



/*--------task 8------------*/
/*let day = 31;
if (day >= 1 && day <= 10) {
    console.log('Перша декада');
} else if (day >= 11 && day <= 20) {
    console.log('Друга декада');
} else if (day >= 21 && day <= 31) {
    console.log('Третя декада');
} else {
    console.log('Помилка');
}*/



/*--------task 9------------*/
let day = 4;
switch (day) {
    case 1:
        console.log('Monday');
        break;
    case 2:
        console.log('Tuesday');
        break;
    case 3:
        console.log('Wednesday');
        break;
    case 4:
        console.log('Thursday');
        break;
    case 5:
        console.log('Friday');
        break;
    case 6:
        console.log('Saturday');
        break;
    case 7:
        console.log('Sunday');
        break;
}



/*--------task 10------------*/
let num1 = 1;
let num2 = 10;

if (num1 > num2) {
    console.log(num1);
} else if (num2 > num1) {
    console.log(num2);
} else if (num1 === num2) {
    console.log(num1);
}

/*--------task 11------------*/
let value = 0;
let x = value || 'default';
console.log(x);


/*--------task 12------------*/
let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];

if (coursesAndDurationArray[0].monthDuration > 5) {
    console.log('Супер');
}
if (coursesAndDurationArray[1].monthDuration > 5) {
    console.log('Супер');
}
if (coursesAndDurationArray[2].monthDuration > 5) {
    console.log('Супер');
}
if (coursesAndDurationArray[3].monthDuration > 5) {
    console.log('Супер');
}
if (coursesAndDurationArray[4].monthDuration > 5) {
    console.log('Супер');
}
if (coursesAndDurationArray[5].monthDuration > 5) {
    console.log('Супер');
}