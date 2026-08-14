// console.log("hello world")
// console.warn("this is a warning")
// console.error("this is an error")


// alert("this is an alert")


// let day = prompt("Enter the day")

// if (day === "Monday") {
//     console.log("Working")
// }
// else if (day === "Tuesday") {
//     console.log("Working")
// }
// else if (day === "Wednesday") {
//     console.log("Working")
// }
// else if (day === "Thursday") {
//     console.log("Working")
// }
// else if (day === "Friday") {
//     console.log("week off")
// }
// else if (day === "Saturday") {
//     console.log("week off")
// }
// else if (day === "Sunday") {
//     console.log("week off")
// }
// else {
//     console.log("Invalid day")
// }


//same can we can we same thing with switch case
// let day = "Monday"

// switch (day) {
//     case "Monday":
//         console.log("Working")
//         break
//     case "Tuesday":
//         console.log("Working")
//         break
//     case "Wednesday":
//         console.log("Working")
//         break
//     case "Thursday":
//         console.log("Working")
//         break
//     case "Friday":
//         console.log("week off")
//         break
//     case "Saturday":
//         console.log("week off")
//         break
//     case "Sunday":
//         console.log("week off")
//         break
//     default:
//         console.log("Invalid day")
// }


// for(i = 1 ; i<=100; i+= 5){
//     console.log(i)
// }

//patterns

// *
// **
// ***
// ****
// *****

// for(let i = 1; i<=5;i++){
//     for(let j = 1; j<=i; j++){

//         let str = "*"
//         console.log(str.repeat(i))
  
//     }
// }



//spread operator

// lets concat two arrays

// let arr1 = [2,3,4,5,6,7];
// let arr2 = [8,9,10,11,12,13,14];

//now i want to concat and get the new array but when i do that using
// + icon  like console.log(arr1+arr2) it gives the array as string i want concated string as array also

// so i will use spread operator


// let newarr = [...arr1 , ...arr2]

// console.log(newarr)

//create a card which takes 3 arguments name age and city and the city should be optional keep it default using function

//lets make 

let card = (name , age , city = "srinagar")=>{
        console.log(" Your name is " , name);
        console.log(" Your Age is " , age);
        console.log(" Your city is " , city);

}

// let user1 = ProcessingInstruction.arguments()
// const user1 = process.argv[2];




// card("saqibpaul",23,"pulwama")

// card("xain",24)


let bill =( ...rest)=>{
 console.log(rest)  
 
 let sum = 0;
 for( let i=1;i<=rest.length;i++){
    sum = sum + rest[i];
    return sum
 }
}


let payment1 = bill(30,400,50,250)
let payment2 = bill(20,20,20,20)

console.log(payment1)
console.log(payment2)