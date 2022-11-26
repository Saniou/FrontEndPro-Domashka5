// -----------------------1----------------------

/* for (let i = 40; i <= 60; i++){
        console.log(i/2);
} */

for (let i = 20; i <= 30; i+=0.5){
    console.log(i);
}

// -----------------------2----------------------

/* for (let i = 10; i <= 100; i+=10){
    console.log(27 * i);
} */

for (let i = 10; i <= 100; i++){
    if(i % 10 === 0) {
        console.log(27 * i);
    }
}

// -----------------------3----------------------

function thirdTask(num){
for (let i = 1; i <= 100; i++) {
    if(i * i > num){
        break
    }
        console.log(i);
    }
}
thirdTask(25)

// -----------------------4----------------------

function fourthTask(num) {
    for (let i = 2; i < num; i++) {
        if (num % i === 0) {
           return 'Складне'
        }
    }
    console.log('Просте')
    return num > 1;
}
console.log(fourthTask(101)) 

//--------- Або так -----------

function integer(num) {
    for(let i = 2; i < num; i++) {
        if (num % i === 0) {
            return (console.log(`Число ${num} не ціле`));
        } else {console.log(`Число ${num} ціле`); break}
    }
}
integer(16)

// -----------------------5----------------------
function fiveTask(num) {
    for(let i = 0; i < num; i++) {
        if (Math.pow(3, i) !== num) {
         continue;
        } else {return console.log("yes")}
    }
    console.log("not")
}
fiveTask(81)