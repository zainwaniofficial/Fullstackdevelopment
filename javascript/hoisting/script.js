// alert("hello from hoisting")
console.log("Hoisting")


//

//if we access both the variable as as function before creation 

// console.log(a)

greet();


//when we run them we will see that the var will give only undefined but the function will run normally it is because when we see memory context program we know that when we create a var that is stored as undefined but the function gets its value firsly.....


// var a  = 25;

function greet()  {

    // console.log("hello dosto.... kya aap ne check kiya ye ")
}


//global scope

//which can be accessed over  all the scopes

//var is a global scope variable


{
    {
    {
    {
    // var  a = 20; 
}


}
}
}


let greeting = () =>{


    //  console.log(a)
}


greeting()


//function scope

//variable inside the function can not be accessed outside 
//lets check

let fun = ()=>{

    var a = 10;
}

fun()

//if we try to access variable a outside it will give error 


// console.log(a)


//Global scope : har jagah se hum isko read kar sakte hai 

//function scope : jo sirf function ke andar he hum access kar sakte hai
 

// let is a block scoped means it cant be accessed outside the scope 


{

    let hello = "world"
}


//if we try to access this hello variable here we cant 

//lets try 


// console.log(hello)   it will give hello is not defined 


var a = 50;

function fun1(){
        var a = 60;

        console.log(a)
}

function fun2(){

    var a = 80;

    console.log(a)

    fun1()
}


fun2()

//shadowing

//shadowing means to add one more same name variable in a local scope to avoid global scope


let num = 50;


let numbers = ()=>{

    let num = 600; //this num here is called shadowing

    console.log(num)
}


numbers()


//scope chain


let university = "south campus";


let department = ()=>{

    let department = "Computer science"

    let teachers = ()=>{

        let t1 = "samia nasti"
        let t2 = 'hilal hyder'
        let t3 = 'abid sir'

        console.log(t1)
        console.log(t2)
        console.log(t3)
        console.log(department)
        console.log(university)
    }
    teachers()
}


department()


// we can access from the outer scope but cant from the child scope 