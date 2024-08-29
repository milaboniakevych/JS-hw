/*
Створити функцію, яка робить глибоку копію об'єкту.
Додати перевірки на undefined, null, NaN.
    Подумати і реалізувати логіку, в якій кінцевий об'єкт буде мати функції,які в нього були до цього моменту.*/


/*
function clonedObject(object) {
    if (object) {
        let functions = [];
        for (const key in object) {
            if (typeof object[key] === 'function') {
                const functionClone = object[key].bind({});
                functions.push({ key, functionClone });
            }
        }

        const s = JSON.stringify(object);
        const parse = JSON.parse(s);

        for (const f of functions) {
            parse[f.key] = f.functionClone;
        }

        return parse;
    }

    throw new Error("error");
}

const clone = clonedObject({ id: 9928, location: 'Warsaw', smth() { console.log('hi'); } });
clone.smth();
console.log(clone);
*/


/*-----------------------------------------------------------*/

/*за допомоги map перетворити кожен елемент на наступний тип {id,title,monthDuration
    Зробити все ВИКЛЮЧНО за допомоги інлайн конструкції*/


/*
let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];


let arr = coursesAndDurationArray.map((course, index) => ({...course, id: index + 1}));
console.log(arr);
*/
