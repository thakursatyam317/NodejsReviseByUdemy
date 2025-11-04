/*
Declare an array named `teaFlavours` that contains the strings `green tea`, "black tea" and "oolong tea".

Access the first element of the array and store it  in a varible named "first Tea"
*/

// let teaFlavours = new Array[5];

let teaFlavours = ["oolong tea", "green tea", "black tea"];
console.log("firstTea :- "+teaFlavours[0]);


// third elemant 
console.log("Third tea", teaFlavours[2]);


// second elemant 
console.log("second tea", teaFlavours[1]);

//add the element
teaFlavours[3] = "?";
console.log(teaFlavours);
teaFlavours.push("tea");
console.log(teaFlavours);


// remove the element of an array last elemant

teaFlavours.pop();
console.log(teaFlavours.pop());// it is return the pop value 

console.log(teaFlavours);


//copy the array
// let coffieFlavours = ["oolong tea", "green tea", "black"];
let coffieFlavours = teaFlavours.concat();// [ 'oolong tea', 'green tea', 'black tea' ]
coffieFlavours = teaFlavours;
console.log("coffieFlavour : ",coffieFlavours);//[ 'oolong tea', 'green tea', 'black tea' ]
console.log(teaFlavours);//[ 'oolong tea', 'green tea', 'black tea' ]



// search the value in the array
console.log(coffieFlavours.includes("black tea"));//true

// merge the array
console.log(coffieFlavours.concat(teaFlavours));



// traversing an array
for(let i = 0; i < coffieFlavours.length; i++){
    console.log(coffieFlavours[i]);
}





