/*
Знайти та вивести довижину настипних стрінгових значень
'hello world', 'lorem ipsum', 'javascript is cool'*/

/*
let arr =[];
arr.push('hello world');
arr.push('lorem ipsum');
arr.push('javascript is cool');
let number = arr.push();
console.log(arr);
console.log(number);
*/


/*---------------------------------------------------------------*/

/*
Перевести до великого регістру наступні стрінгові значення
'hello world', 'lorem ipsum', 'javascript is cool'*/

/*let strings = ['hello world', 'lorem ipsum', 'javascript is cool'];
let uppercaseStrings = strings.map(string => string.toUpperCase());
console.log(uppercaseStrings);*/


/*---------------------------------------------------------------*/

/*Перевести до нижнього регістру настипні стрінгові значення
'HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL'*/

/*
let strings = ['HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL'];
let lowercaseStrings = strings.map(string => string.toLowerCase());
console.log(lowercaseStrings);*/

/*---------------------------------------------------------------*/

/*Є "брудна" стрінга let str = ' dirty string   ' . Почистити її від зайвих пробілів.*/

/*
let str = ' dirty string   ';
let fixedString = str.trim();
console.log(fixedString);*/

/*---------------------------------------------------------------*/

/*
Напишіть функцію stringToarray(str), яка перетворює рядок на масив слів.
    let str = 'Ревуть воли як ясла повні';
let arr = stringToarray(str); ['Ревуть', 'воли', 'як', 'ясла', 'повні']*/

/*
let str = 'Ревуть воли як ясла повні';
let stringToarray = str.split(' ');
console.log(stringToarray);*/

/*---------------------------------------------------------------*/
/*є масив чисел [10,8,-7,55,987,-1011,0,1050,0] . за допомоги map  перетворити всі об'єкти в масиві на стрінгові.*/

/*
let objects = [10,8,-7,55,987,-1011,0,1050,0];
let objectsToStrings = objects.map(numbers => numbers.toString());
console.log(objectsToStrings);*/

/*---------------------------------------------------------------*/

/*створити функцію sortNums(array,direction), яка прймає масив чисел, та сортує його від більшого до меньшого, або навпаки в залежності від значення аргументу direction.*/

/*function sortNums (array, direction) {
    if (direction === 'ascending') return array.sort ((a, b) => a - b);
    if (direction === 'descending') return array.sort ((a, b) => b - a);
}

let nums = [11,21,3];
console.log(sortNums(nums,'ascending'));
console.log(sortNums(nums,'descending'));*/

/*---------------------------------------------------------------*/

/*є масив

-- відсортувати його за спаданням за monthDuration
-- відфільтрувати , залишивши тільки курси з тривалістю більше 5 місяців
-- за допомоги map перетворити кожен елемент на наступний тип {id,title,monthDuration}*/


/*let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];

let sortedObjects = coursesAndDurationArray.sort((a, b) => b.monthDuration - a.monthDuration);
console.log(sortedObjects);

let filteredObjects = sortedObjects.filter(value => value.monthDuration > 5);
console.log(filteredObjects);

let map = sortedObjects.map((value, index )=> {
    value.id = index + 1;
        return value;
});

console.log(map);*/
/*---------------------------------------------------------------*/

/*
описати колоду карт (від 6 до туза без джокерів)
- знайти піковий туз
- всі шістки
- всі червоні карти
- всі буби
- всі трефи від 9 та більше

{
    cardSuit: '', // 'spade', 'diamond','heart', 'clubs'
        value: '', // '6'-'10', 'ace','jack','queen','king'
    color:'', // 'red','black'
}*/


/*const cardSuits = ['spade', 'diamond','heart', 'clubs'];
const values = ['6', '7', '8', '9', '10', 'ace','jack','queen','king'];

const cards = [];
for (const suit of cardSuits) {
    for (const value of values) {
        const card = {suit: suit, value: value};
        if (suit === 'heart' || suit === 'diamond') {
            card.color = 'red';
        } else {
            card.color = 'black';
        }
        cards.push(card);
    }
}

console.log(cards);

console.log(cards.find(value => value.suit === 'spade' && value.value === 'ace'));
console.log(cards.filter(value => value.value === '6'));
console.log(cards.filter(value => value.color === 'red'));
console.log(cards.filter(value => value.suit === 'diamond'));
console.log(cards.filter(value => value.suit === 'clubs' && (value.value !== '6' && value.value !== '7' && value.value !== '8')));*/

/*---------------------------------------------------------------*/
/*Взяти описану колоду карт, та за допомоги reduce упакувати всі карти по "мастях" в об'єкт*/

/*const reduce = cards.reduce((accumulator, card) => {
    switch (card.suit) {
        case 'spade':
            accumulator.spades.push(card);
            break;
        case 'diamond':
            accumulator.diamonds.push(card);
            break;
        case 'heart':
            accumulator.hearts.push(card);
            break;
        case 'clubs':
            accumulator.clubs.push(card);
            break;
    }

    return accumulator;
    },
{
    spades:[],
    diamonds:[],
    hearts:[],
    clubs:[]
});

console.log(reduce);*/

/*---------------------------------------------------------------*/

/*
взяти з arrays.js масив coursesArray
--написати пошук всіх об'єктів, в яких в modules є sass
--написати пошук всіх об'єктів, в яких в modules є docker
*/

/*let coursesArray = [
    {
        title: 'JavaScript Complex',
        monthDuration: 5,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'node.js']
    },
    {
        title: 'Java Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'git',
            'java core',
            'java advanced']
    },
    {
        title: 'Python Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'python core',
            'python advanced']
    },
    {
        title: 'QA Complex',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'git', 'QA/QC']
    },
    {
        title: 'FullStack',
        monthDuration: 7,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'react',
            'angular',
            'aws',
            'docker',
            'git',
            'node.js',
            'python',
            'java']
    },
    {
        title: 'Frontend',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'sass']
    }
];

coursesArray.filter(value => {
   return value.modules.includes('sass');
});

coursesArray.filter(value => {
    return value.modules.includes('docker');
});*/

