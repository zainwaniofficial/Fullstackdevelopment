console.log("hello from closures")


//closure means closest to the nearest scope


// lets understand first the lexical scope

//lexical scope ka matlab hai ke jaha function bana hai waha wo find karei ga cheezu ko na ke jaha hum usko call karte hai 

//example 


let a = 80;

function one(){

    console.log(a)
}

function two(){

    let a = 600;
    one()
}


two()


//if we see code snippit ☝ here 

//we will see that we will get the 80 answer because the function is created before function two no matter its is called near the variable where the value is 600 

//this is the lexical scope
 

//function jaha create huwa hai wo matter karta hai na ke jaha call kiya hai wahe hai lexical scope




//now we see the closure 


//it also the concept

function outer (){
 let count = 0 ;
                    //inner function always keeps / remembers the outer functions lexical 
 return function inner(){

    count++

    console.log(count)
 }
}

let counter = outer()

counter()
counter()
counter()
counter()


//data privacy closures concept


//lets understand this with an axample

