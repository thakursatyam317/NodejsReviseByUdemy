// It is repeation of the code or statement when the condtion is false

/*
types of loop in javaScript
1. for loop
2. while loop 
3. do while loop
4. for of loop
5. for in loop
6. forEach() loop or Method
*/

// for Loop
//print the table

let num = 5;
for (let i = 1; i <= 10; i++) {
//   console.log(`${i} * ${num} = ${i * num}`);
}

//  isPrime
let count = 0;

for (let i = 2; i <= num / 2; i++) {
  if (num % i === 0) {
    count++;
    console.log(`The number is not prime`);
    break;
  }
}
// if (count === 0) console.log(`The number is prime`);




// while loop 
// sum up to num
num = 6;
let i = 1;
let  sum = 0;
while(i <= num){
    sum += i;
    i++;
}
// console.log(sum);


// do while loop
//factorial of the num
num = 5;
let factorial = 1;
do{
    factorial *= num;
    num--;
 

}while(num >= 1);
// console.log(factorial);



//for of loop 
// this loop is use in array
// max number in the array
let arr = [5,6,7,8,2,9,0];
let max = -1;
for(const num of arr){
    if(max < num) max = num;
}
// console.log(max);


//for in loop 
// this loop is use in the Object
let objs = {
    name : "Satyam",
    age : 21,
    phoneNumber : "9754584581"
}
for(const obj in objs){
    // console.log(objs[obj]);
}


// forEach loop 
// it is a method in this method inside create a own function
// print arr
arr = [5,6,7,8,2,9,0]

arr.forEach((value) => {
  console.log(value);
});
