"use strict";

/*
Используя Math.random() необходимо сгенерировать массив, содержащий 5 цифр в 
диапазоне [0, 9].
После создания массива необходимо вывести в консоль следующие значения:
1. Сумму элементов массива
2. Минимальное значение в массиве
3. Новый массив, содержащий индексы сгенерированного выше массива, в которых 
значение равно 3.
Пример: Если у нас сгенерировался массив [2, 3, 5, 7, 3], то мы должны вывести 
в консоль массив [1, 4]. Такой массив получился потому что в сгенерированном
массиве тройки лежат под индексами 1 и 4. Если троек в сгенерированном массиве
не окажется, значит нужно будет вывести пустой массив.
*/

let getRndArr = (arrLength, maxNum) => {
    let arr = [length];
    for (let i = 0; i < arrLength; i++) {
        arr[i] = Math.trunc(Math.random() * maxNum);
    }
    return arr;
};

const array = getRndArr(5, 9);
console.log(array);
let sumArray = 0;
array.forEach(function (element) {
    sumArray += element;
});
console.log(sumArray);

let minElemArr = array[0];
for (let index = 0; index < array.length; index++) {
    if (array[index] < minElemArr){
        minElemArr = array[index]
    };
};
console.log(minElemArr);
let newArray =[];
for (let ind = 0; ind < array.length; ind++)
{
    
    if (array[ind] == 3)
    {
        newArray.push(ind);
    }
}

console.log(newArray);