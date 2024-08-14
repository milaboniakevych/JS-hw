/*створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б*/
/*
function rectangleArea (sideA, sideB) {
    if (sideA > 0 && sideB > 0) {
        return sideA * sideB;
    }
}

let result = rectangleArea(5, 10);
console.log(result);
*/

/*------------------------------------------------------------------------------------*/


/*створити функцію яка обчислює та повертає площу кола з радіусом r*/
/*
function circleArea (R) {
    if (R > 0) {
        return Math.PI * Math.pow(R, 2);
    }
}

let result = circleArea(12);
console.log(result);*/

/*------------------------------------------------------------------------------------*/

/*створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r*/
/*
function cylinderArea (R, H) {
    if (R > 0 && H > 0) {
        return 2 * Math.PI * R * ( H + R );
    }
}

let result = cylinderArea (40, 66);
console.log(result);*/

/*------------------------------------------------------------------------------------*/


/*створити функцію яка приймає масив та виводить кожен його елемент*/
/*let Array = [1, 2, 3, 4, 5];
function printArray(arr) {
    for (const item of arr) {
        console.log(item);
    }
}

printArray(Array);*/
/*------------------------------------------------------------------------------------*/


/*створити функцію яка створює параграф з текстом та виводить його через document.write. Текст задати через аргумент*/
/*
function printText (text) {
    document.write(`<p>${text}</p>`);
}

printText('');
*/
/*------------------------------------------------------------------------------------*/


/*створити функцію яка створює ul з трьома елементами li та виводить його через document.write. Текст li задати через аргумент всім однаковий*/
/*
function printList (text) {
    document.write(`<ul>
                        <li>${text}</li>
                        <li>${text}</li>
                        <li>${text}</li>
                    </ul>`);
}

printList('');*/
/*------------------------------------------------------------------------------------*/


/*створити функцію яка створює ul з  елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл) та виводить його через document.write*/
/*
function List (text, numOf) {
    document.write('<ul>');

    for (let i = 0; i <= numOf; i++) {
    document.write(`<li>${text}</li>`);
    }

    document.write('</ul>');

}

List('allalalala', 4);*/
/*------------------------------------------------------------------------------------*/



/*створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список (ul li) та виводить його через document.write*/

/*function Array (arr) {
    document.write(`<ul>`);
    for (const item of arr) {
        document.write(`<li>${item}</li>`);

    }
    document.write(`</ul>`);
}

Array([43, 434, 'item049', false]);*/
/*------------------------------------------------------------------------------------*/




/*створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.*/
/*

function listOfUsers (users) {
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
/*------------------------------------------------------------------------------------*/



/*створити функцію яка повертає найменьше число з масиву*/

/*function minValue (num) {
    let min = num[0];
    for (const numElement of num) {
        if (numElement < min) {
            min = numElement;

        }
        
    }
    return min;
}

console.log(minValue([1, 2, 3, 4, 5]));*/

/*------------------------------------------------------------------------------------*/

/*
створити функцію sum(arr) яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад sum([1,2,10]) //->13*/

/*
function sum (arr) {
    let num = 0;
    for (const item of arr) {
        num = num + item;

    }
    return num;
}

console.log(sum ([1,2,10]));*/

/*--------------------------------------------------------------------------------------*/

/*
створити функцію swap(arr,index1,index2). Функція міняє місцями заняення у відповідних індексах
Приклад  swap([11,22,33,44],0,1) //=> [22,11,33,44]*/

/*function swap (arr,index1,index2) {
    let item = arr[index1];
    arr[index1] = arr[index2];
    arr [index2] = item;

    return arr;
}

 console.log(swap([11,22,33,44],0,1));*/

/*---------------------------------------------------------------------------------------*/
/*
Написати функцію обміну валюти exchange(sumUAH,currencyValues,exchangeCurrency)
Приклад exchange(10000,[{currency:'USD',value:25},{currency:'EUR',value:42}],'USD') // => 400*/

/*function exchange (sumUAH,currencyValues,exchangeCurrency) {
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
