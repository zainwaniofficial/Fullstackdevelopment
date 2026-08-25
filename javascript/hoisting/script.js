// alert("hello from hoisting")
console.log("Hoisting")


//

//if we access both the variable as as function before creation 

console.log(a)

greet();


//when we run them we will see that the var will give only undefined but the function will run normally it is because when we see memory context program we know that when we create a var that is stored as undefined but the function gets its value firsly.....


var a  = 25;

function greet()  {

    console.log("hello dosto.... kya aap ne check kiya ye ")
}


//global scope

//which can be accessed over  all the scopes

//var is a global scope variable


{
    {
    {
    {
    var  a = 20; 
}


}
}
}


let greeting = () =>{


     console.log(a)
}


greeting()