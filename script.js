//--створити масив та вивести його в консоль:
// - з 5 числових значень
// - з 5 стічкових значень
// - з 5 значень стрічкового, числового та булевого типу

let arr1 = [23, -5, 1.2592, 789, -3652,];
console.log(arr1);

let arr2 = [ 'Hello', 'Jules', 'true', '3.14', '-7'];
console.log(arr2 );

let arr3 = ['World', 23, -6, true, false];
console.log(arr3);




//-- Створити пустий масив. Наповнити його будь-якими значеннями звертаючись до конкретного індексу. Вивести в консоль

let arr4 = [];
arr4[0] = 23;
arr4[1] = 'Hello';
arr4[7] = true;
console.log(arr4);





//- За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом всередині

for (let i = 0; i < 10; i++) {
    document.write('<div>Hello world</div>' + '<br>');
}





//- За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом і індексом всередині

for (let i = 0; i < 10; i++) {
    document.write(`<div> Goog afternoon : ${i} </div>` + '<br>');
}



//- За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом всередині.

i = 0;
while (i < 20) {
    document.write ('<h1> Goog morning </h1>');
    i++;
}




//- За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом і індексом всередині.

i = 0;
while (i < 20) {
    document.write (`<h1> Goog evening : ${i} </h1>`);
    i++;
}



//- Створити масив з 10 числових елементів. Вивести в консоль всі його елементи в циклі.

let arr5 = [45, 78, -56, -96, 4, 70, -34, 7567, 3, 7];

for (let i = 0; i < arr5.length; i++) {
    document.write (arr5[i] + '<br>')
}




//- Створити масив з 10 строкрових елементів. Вивести в консоль всі його елементи в циклі.

let arr6 = ['Summer', 'Mom', 'Flowers', 'Sea', 'Teacher', 'Tree', 'Glasses', 'Water', 'Sun', 'Arms'];
for (let i = 0; i < arr6.length; i++) {
    document.write(arr6 [i] + '<br>')
}










