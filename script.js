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

let words = ['Hello', 'Jules', 'Flowers', 'Books', 'Summer', 'You', 'Love', 'Winter', 'Spoon', 'Cup'];

for (key in words) {
    document.write(`${words[key]} (${key})` + '<br>');
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
    document.write ('<h1> Goog morning </h1>');
    i++;
}


//sgvdgfbdfgbg









