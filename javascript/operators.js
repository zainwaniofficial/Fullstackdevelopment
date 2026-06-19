//operators in javscript 

//arthemetic operators
let a = 10;
let b = 5;
console.log(a + b); //addition
console.log(a - b); //subtraction
console.log(a * b); //multiplication
console.log(a / b); //division
console.log(a % b);     //modulus


//assignment operators
let c = 20;
c += 5; //c = c + 5     
console.log(c);
console.log(c -= 5); //c = c - 5
c *= 2; //c = c * 2
console.log(c);
c /= 2;


//comparison operators 

//comparison operators will return a boolean value (true or false)
console.log(a > b); //greater than answer is true
console.log(a < b); //less than answer is false
console.log(a >= b); //greater than or equal to answer is true
console.log(a <= b); //less than or equal to answer is false
console.log(a != b); //inequality operator (checks for value only)
console.log(a==b); //equality operator (checks for value only)
console.log(a === b); //strict equality operator (checks for value and type)
console.log(a !== b); //strict inequality operator (checks for value and type)




//uninary operators
let d = 5;
console.log(++d); //pre-increment //d = d + 1
console.log(d++); //post-increment //d = d + 1 but it returns the value before incrementing
console.log(--d); //pre-decrement //d = d - 1 

console.log(d--); //post-decrement //d = d - 1 but it returns the value before decrementing


//ternary operator
let age = 18;
let canVote = (age >= 18) ? "Yes" : "No";
console.log(canVote); //Yes


let saqibAge = 20;
let isAdult = (saqibAge >= 18) ? "Yes" : "No";
console.log(isAdult); //Yes

let xainage = 15;
let isxainadult =(xainage>=18) ? "yes ": "no";
console.log(isxainadult); //no


//logical operators
let x = true;
let y = false;
console.log(x && y);  //logical AND  //returns true if both operands are true
console.log(x || y); //logical OR  //returns true if at least one operand is true
console.log(!x); //logical NOT  //returns true if the operand is false and returns false if the operand is true

//working with non boolean values in logical operators
console.log(0 || "Hello"); //returns "Hello" because 0 is falsy and "Hello" is truthy
console.log(0 && "Hello");
//returns 0 because 0 is falsy and in logical AND if the first operand is falsy it returns the first operand
console.log("Hello" && 0); //returns 0 because "Hello" is truthy and in logical AND if the first operand is truthy it returns the second operand
console.log("Hello" || 0); //returns "Hello" because "Hello" is truthy and in logical OR if the first operand is truthy it returns the first operand


//short-circuit comparison operators

console.log(false || "Hello"  || false || "World"); //returns "Hello" because in logical OR if the first operand is falsy it returns the second operand


function getUserName(user) {
    return user.name || "Anonymous"; //if user.name is truthy it returns user.name otherwise it returns "Anonymous"
}
console.log(getUserName({ name: "Saqib" })); //Saqib
console.log(getUserName({})); //Anonymous

//bitwise operators
let m = 5; //in binary 0101
let n = 3; //in binary 0011
console.log(m & n); //bitwise AND  //returns 1 (in binary 0001)
console.log(m | n); //bitwise OR  //returns 7 (in binary 0111)
console.log(m ^ n); //bitwise XOR  //returns 6 (in binary 0110)
console.log(~m); //bitwise NOT  //returns -6 (in binary 1010)
console.log(m << 1); //left shift  //returns 10 (in binary 1010)
console.log(m >> 1); //right shift  //returns 2 (in binary 0010)

