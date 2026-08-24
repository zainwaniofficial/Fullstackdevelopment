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


// if we want to add one more property that is not present in the object we can make that same using . 


// example in our object userdetails there is not adhaar number so we can add that 

userdetails.adhaarNo = "101732"


// now if we console user details we will find this also 

console.log(userdetails)


//same thing we can do by making new property and val by brackets


userdetails['city'] = "srinagar"


// if we checcck city name property will be in object 

console.log(userdetails)



// now lets learn about object methods


console.log("OBJECT METHODS👍")

//OBJECT KE ANDAR KOYE FUNCTUON HAIN TO WO FUNCTION METHOD HAI SAMJO SAMJO WAIAT

// CHECK EXAMPLE 👇


let user = {
  name: "zain",
  class : "nan",
  rollNo : 101732,
  city : "srinagar",
 greet(){
  console.log("salaam")
 }
}

//greet function inside a object is method

 

//object destructuring


// if we want to access the multiple keys from the value instead of writing user.name , user.class , user.city

//we can simply write

let  {name,city} = userdetails

console.log(name , city)



//shallow and deep copy 


let product ={
  name:"sunscreen",
  type:"cosmatic",
  price:"450",
  features:{
    version: "base model",
    weight: "600kg",
    model: "2026"
  }
}


let product2 = product

product2.price = 750

console.log(product2)
console.log(product)

//if we check the product it will change the price of product also

// because it uses refrence

//so if we want to copy the key and values only we can use spread operator


product3 = {...product}


product3.price = 1050  

//if we check the product , we will see that had not been changed now 

console.log(product)
console.log(product3)


//this is called shallow copy
//shallow copy  effect on level one 
// if we want to copy the elements  or make changes in spread object that will be reflected to the actual object also

// if we have object in object and we made a change in refrence object that change will be reflected in actual object also


// so to overcome this problem we use deep copy 


//we can done that by making the object to string by using JSON.Stringfy

//and to use it we use JSON.parse


let str = JSON.stringify(product)

let product4 = JSON.parse(str)

product4.features.version = "top model"


console.log(product)
console.log(product4)


//if we see now we have changed the object in object 
//this is called deep copy



//object.freeze 

let pmgsy = {
  name: "dilshada akhtar",
  unit:"sarnal payeen",
  district : "anatnag",
  financedBy :"Jammu and kashmir bank",
  sponsor: "kvic"
}


//to delete the objects element we use just delete


// like here if i want to delete sponsor

delete pmgsy.sponsor;

console.log(pmgsy)


// but if we want to make something perminent and changes should not effact that we can use object.free for that 



let objectFreeze = {
  name: "amandeep",
  district: "anatnag",
  id : "25045113023",

}

// Object.freeze(objectFreeze)


//now if we try to make a little change in this that will not be reflected 

//lets check

// objectFreeze.district = "Srinagar"

// delete objectFreeze.name


console.log(objectFreeze) //if we see there will be nothing updated or deleted


//object.seal

//it is used to update the object

//it can only update and can't done anything
// Object.seal(objectFreeze)

// objectFreeze.district = "Srinagar"

//delete objectFreeze.district //it will not delte the element 

//object.seal only allows to update 

// console.log(objectFreeze)


//property descriptors



//tells the properties of the object and these properties are not inherited
console.log(Object.getOwnPropertyDescriptor(objectFreeze, "name")) //this tells what can i do with this ,can i change it can i make writable etc....


// we can also define property descriptor 


Object.defineProperty(objectFreeze, "name" , {
  writable: false
  
})

console.log(Object.getOwnPropertyDescriptor(objectFreeze, "name")) //this tells what can i do with this ,can i change it can i make writable etc....

