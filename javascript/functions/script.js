
console.log("hello from functions")
//simple writing program

function greet(){
    console.log("traditional function")
}

greet()


//arrow function


let fun = ()=>{

    console.log("hello i am function")
}

fun()

//pure function 

//aise functions jo apne scope ke bahar ke cheezu ko na access karei na update karei na track karei unhe hum pure functions bolte hai


function sum(a,b){
    return a + b ;
    //even using console in a program is not a pure function
}

let result = sum(20,30)

console.log(result)


// impure function


// function that uses thing from other than its scope is called impure function 


let quantity = 23;

function products(price){
return quantity * price //here function uses outer var ,so its impure function
}


let totalprice = products(5000)


console.log(totalprice)