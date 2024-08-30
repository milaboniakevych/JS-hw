/*
- створити блок,
- додати йому класи wrap, collapse, alpha, beta
- додати стилі(довільні значення) : колір фону, колір тексту, розмір тексту
- додати цей блок в body.
- клонувати його повністю, та додати клон в body.*/

/*
let div = document.createElement('div');
document.body.appendChild(div);

div.classList.add('wrap', 'collapse', 'alpha', 'beta');

div.style.width = '200px';
div.style.height = '200px';
div.style.backgroundColor = 'purple';
div.innerText = 'This is purple div';
div.style.color = 'white';
div.style.fontSize = '18px';

const clone = div.cloneNode(true);
document.body.appendChild(clone);*/

/*------------------------------------------------------*/
/*
- Є масив:
    ['Main','Products','About us','Contacts']
Зробити ul в середині якої будуть лежати елементи масиву (кожен в своєму li)*/


/*let arr = ['Main','Products','About us','Contacts'];

let ulList = document.createElement('ul');

for (const item of arr) {
    let liOflist = document.createElement('li');
    liOflist.innerText = item;
    ulList.append(liOflist);
}
document.body.append(ulList);*/

/*------------------------------------------------------*/

/*
Для кожного елементу масиву зробити блок в якому вивести інформацію про title та monthDuration
Завдання робити через цикли.*/

/*let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];

for (const course of coursesAndDurationArray) {
    const div = document.createElement('div');
    div.innerText = `${course.title} ${course.monthDuration}`
    document.body.appendChild(div);
}*/

/*------------------------------------------------------*/


/*За допомоги скріпта для кожного елементу масиву зробити <div class='item'> ,  в якому буде <h1 class='heading'>  з title  елементу, та <p class='description'> з monthDuration елементу.
    Завдання робити через цикли.*/

/*
    let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];

for (const course of coursesAndDurationArray) {
    const div = document.createElement('div');
    div.classList.add('item');
    div.innerHTML = `<h1 class = 'heading'> ${course.title} </h1> <p class = 'description'> ${course.monthDuration} </p>`;
    document.body.appendChild(div);
}*/
