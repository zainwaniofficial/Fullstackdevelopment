
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

//now lets understand mutable and immutable


//in simple words 

//mutable is where we can make changes  to our original values 

//immutable means where we cant make changes

//mutable example

let funn = {

    naam :'zain'
}


console.log(funn.naam)


funn.naam = "mehak"


console.log(funn.naam)


//here in this object we are able to change the val , that is why it is called mutable and this concept is called mutability 


// immutablitlity


//original value change nhi hote hai is ma 

//in this the original value does not get affected or changed

let user = {
    name : "chirriiiii",
    address : "Gulzarabad",
    status : "committed"
}



console.log(user)


let newuser = {...user , name : "chamannnnn"}

newuser.address = "singhpoora"

console.log(newuser)

//currying


//getting things one by one 


function meal(burger){
    console.log(burger)
    return (fries)=>{
        console.log(fries)
            return (drinks)=>{
                        console.log(drinks)
                return (extra)=>{
                        console.log("kuch nhi")
                        return ` fries are ${fries} burger is ${burger} drinks are ${drinks}  ans extra is ${extra} `
                }
            }
    }
}


let mymeal = meal("regular")

let fries = mymeal("peri-peri")

let drinks = fries("pepsi 20 wale")

// let extra = drinks()


// console.log(mymeal)

let finalOrder =  drinks("abi kuch nhi")

console.log(finalOrder)
// meal()