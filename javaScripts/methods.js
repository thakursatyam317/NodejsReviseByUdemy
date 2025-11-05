// method or function in javaScript 

// it is a Set of instruction when call then execute

//types of method


// 1.
function isPrime(num){
    let count = 0;

for (let i = 2; i <= num / 2; i++) {
  if (num % i === 0) {
    count++;
    console.log(`The number is not prime`);
    break;
  }
}

if(count == 0) console.log(`The number is prime`);


}
// isPrime(5);



//2.
const isEvenOrOdd = (num)=>{
    if(num % 2 == 0) console.log("The number is even");
    else console.log("THe number is odd");
}

// isEvenOrOdd(5);

//3.
let arr = [5,6,7,8,2,9,0]
arr.forEach((value)=>{
    // console.log(value);
    
})

//4.
const printArray = function (arr){
    arr.forEach((value)=>{
    console.log(value);
    
})
}
printArray(arr);