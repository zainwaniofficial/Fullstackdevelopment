console.log("hello from objects script file")
// objects are the key value pair


//when we have one person and that have multiple properties like
// a student is having multiple things name,class ,stream, id, contactno.

let users = {

  user1 : {
    id : 101,
    name: "xv",
    class : "12th",
    result : "pass"
},
  user2 : {
    id : 102,
    name: "mehak darling",
    class : "1st year",
    result : "pass"
}
,
  user3 : {
    id : 103,
    name: "amandeep",
    class : "2nd year",
    result : "pass"
}

}
// this is the syntex of object it carries the key and values 

console.log(users.user2)

// if(student.result == "pass"){

//     console.log("this person is pass whose name is " + student.name)
// }else{
//    console.log( student.name  + "is fail")
// }


let userdetails = {

    id : 502,
    name : "major",
    school :"Army goodwill"
}


console.log(userdetails)

//if i have to find the particular value of the object we can use .method

//example

//here if we have find the school of userdetails object

console.log(userdetails.school)

//so using .method can be used to find the particular element of the object

//if we want to modify the actual value of an objects element like here i want to modify the name from major to shuklaa🤣 

//so for that i can simply target that by . and assign the value


userdetails.name = "shukla"

// now if i will check the actual value we will get the modified value 

console.log(userdetails)

//another method to do the same is 

//bracket notation

//if i want to change the name of userdetails object


userdetails ["name"] = "miss kaur"

console.log(userdetails)  //we will find that name had been changed

