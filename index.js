// сс

// // forEach() - метод который перебирает массив

// fruits.forEach((elem , index , array )=>{
//     console.log(index  , elem);
// })

// map() - метод который перебирает массив и возвращает новый массив

// let fruits = ["банан", "апельсин", "яблоко" , "мандарин"]

// let newFruits = fruits.map((elem  , index , array)=>{
//     return   elem
// })

// console.log(newFruits);

// split и join

// split() - делает из строки в массив с элементами
// let str = "Банан,Киви,Апельсин"
// console.log(str);
// console.log(str.split(","));

// join() - делает из массива в строку
// let users = ["Иван", "Вася" , "Игорь"]

// console.log(users);
// console.log(users.join(","));

// reverse() - меняет порядок элементов в arr на обратный

// let numbers = [1,2,3,4,5]
// console.log(numbers);
// console.log(numbers.reverse());

// sort(fn) - сортировка массива

// let numbers2 = [ 4,5,2,6,7,33,]

// console.log(numbers2.sort((a , b)=> a - b));

////////////indexOf/lastIndexOf и includes

// indexOf() - ищет элемент, в результате если найдет возвращает индекс элемента, иначе -1

// let fruits = ["Банан", "Апельсин", "Мандарин"];
// console.log(fruits.indexOf("Апельсин"));

// if (fruits.indexOf("Апельсин") == 1) {
//   console.log("я нашел");
// } else {
//   console.log("я не нашел");
// }

// lastIndexOf() - ищет элемент с конца в результате если найдет возвращает индекс элемента, иначе -1
// let fruits2 = ["Банан", "Апельсин","Апельсин", "Мандарин"];
// //                0          1         2            3
// console.log(fruits2.lastIndexOf("Апельсин"));


// if (fruits.lastIndexOf("Апельсин") == 2) {
//   console.log("я нашел");
// } else {
//   console.log("я не нашел");
// }


// includes() - ищет элемент, если нашел true, иначе false

// let fruits3 = ["Банан", "Апельсин","Апельсин", "Мандарин"];
// console.log(fruits3.includes("Банан"));


// slice() - копирует элементы массива и возвращает новый массив

// let numbers3 = [ 1,2,3,5,6,7]
// //               0 1 2 3 4 5
// console.log(numbers3.slice(3, 5));




// splice() - удаляет элементы из массива с определенных позиций по индексу


