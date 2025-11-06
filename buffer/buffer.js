import { Buffer } from "buffer";

const buf = Buffer.from("Hi I am Satyam Thakur");

console.log(buf);//<Buffer 48 69 20 49 20 61 6d 20 53 61 74 79 61 6d 20 54 68 61 6b 75 72>

const bufTwo = Buffer.alloc(5);
console.log(bufTwo);//<Buffer 00 00 00 00 00>

const bufThree = Buffer.allocUnsafe(10);
console.log(bufThree);//<Buffer 00 00 00 00 00 00 00 00 00 00>

const bufFour = Buffer.concat([buf, bufTwo]);
console.log(bufFour);//<Buffer 48 69 20 49 20 61 6d 20 53 61 74 79 61 6d 20 54 68 61 6b 75 72 00 00 00 00 00>

const bufFive = Buffer.from("5");
console.log(bufFive);//<Buffer 35>
console.log(bufFive.toJSON())//{ type: 'Buffer', data: [ 53 ] }
console.log(bufFive.toString())//5
