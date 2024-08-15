/*створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б*/

/*
const rectangleArea = (sideA, sideB) => sideA * sideB;
console.log(rectangleArea(5, 10));*/

/*---------------------------------------------------------------------------------*/



/*створити функцію яка обчислює та повертає площу кола з радіусом r*/

/*
const circleArea = (R) => Math.PI * Math.pow(R, 2);
console.log(circleArea(12));*/

/*---------------------------------------------------------------------------------*/



/*створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r*/

/*
const cylinderArea = (R, H) => 2 * Math.PI * R * ( H + R );
console.log(cylinderArea(40, 66));*/

/*---------------------------------------------------------------------------------*/




/*створити функцію яка приймає масив та виводить кожен його елемент*/

/*const ArrayElements = (Array) => {
    Array.forEach(element => {
        console.log(element);
    })
};

ArrayElements([1, 2, 3, 4, 5]);*/

/*---------------------------------------------------------------------------------*/




/*створити функцію яка створює параграф з текстом та виводить його через document.write. Текст задати через аргумент*/

/*
const printText = (text) => {
    document.write(`<p>${text}</p>`);
};
printText('bla-bla-bla :)');*/

/*---------------------------------------------------------------------------------*/




/*створити функцію яка створює ul з трьома елементами li та виводить його через document.write. Текст li задати через аргумент всім однаковий*/

/*
const printList = (text) => {
    document.write(`<ul>
                        <li>${text}</li>
                        <li>${text}</li>
                        <li>${text}</li>
                    </ul>`);
}

printList('');*/
/*---------------------------------------------------------------------------------*/





/*створити функцію яка створює ul з  елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл) та виводить його через document.write*/

/*
const List = (text, numOf) => {
    document.write('<ul>');

    for (let i = 0; i <= numOf; i++) {
    document.write(`<li>${text}</li>`);
    }

    document.write('</ul>');

}

List('allalalala', 4);*/
/*---------------------------------------------------------------------------------*/





/*створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список (ul li) та виводить його через document.write*/

/*
const Array = (arr) => {
    document.write(`<ul>`);
    for (const item of arr) {
        document.write(`<li>${item}</li>`);

    }
    document.write(`</ul>`);
}

Array([43, 434, 'item049', false]);*/
/*---------------------------------------------------------------------------------*/





/*створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.*/

/*const listOfUsers = (users) => {
    for (const user of users) {
        document.write(`<div>${user.id} ${user.name} ${user.age}</div>`);

    }
}

listOfUsers ([
    {id: 1, name: 'John', age: 25},
    {id: 2, name: 'Jane', age: 29},
    {id: 3, name: 'Alice', age: 32},
    {id: 4, name: 'Marko', age: 44},

]);*/
/*---------------------------------------------------------------------------------*/




/*
створити функцію sum(arr) яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад sum([1,2,10]) //->13*/

/*
const sum = (arr) => {
    let num = 0;
    for (const item of arr) {
        num = num + item;

    }
    return num;
}

console.log(sum ([1,2,10]));*/

/*---------------------------------------------------------------------------------*/




/*
створити функцію swap(arr,index1,index2). Функція міняє місцями заняення у відповідних індексах
Приклад  swap([11,22,33,44],0,1) //=> [22,11,33,44]*/

/*
const swap = (arr,index1,index2) => {
    let item = arr[index1];
    arr[index1] = arr[index2];
    arr [index2] = item;

    return arr;
}

 console.log(swap([11,22,33,44],0,1));*/

/*----------------------------------------------------------------------*/



/*
Написати функцію обміну валюти exchange(sumUAH,currencyValues,exchangeCurrency)
Приклад exchange(10000,[{currency:'USD',value:25},{currency:'EUR',value:42}],'USD') // => 400*/

/*
const exchange = (sumUAH,currencyValues,exchangeCurrency) => {
    let Currency;
    for (const item of currencyValues) {
        if (item.currency === exchangeCurrency) {
            Currency = item;
        }
    }
    let result = sumUAH/Currency.value
    return result;
}

console.log(exchange(10000,[{currency:'USD',value:25},{currency:'EUR',value:42}],'USD'));*/
