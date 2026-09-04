console.log("hello from async js")

// javascript normal flow ma chalta hai line by line mgr jub agar wo line ma na chale to usse async kehte hai 


//jaise simple hum deakhe ge 

// console.log("burger ordered")

// console.log("preparing order wait for 15 min")


// console.log("order ready")


// agar hum inhe print karenge to ye normal flow se chalege ye teenu 1 saath aaye ge which dont make sense that order preparing ke saath he ready wale b message aate hai so that is where async takes place 


//now lets make same thing with async


console.log("order placed done ")

setTimeout(()=>{

    console.log("order ready")
}, 8000)

console.log("order preparing ")

console.log("chill with friends or scroll instagram")

//if u see code snippet top here this is async code it does not follow the normal flow of code , it is not waitng for the line to complete it moves forward . this is called async 


//all this is happening by the some ways 

// event loop
// micro task queue
// macro task queue
// callstack queue
// Web Api's

//all of this make the async behaviour


//timers s


//setTimeout 

//set timer out ek timer function hai jo use hota hai , agar hamei apna code kuch time ke baad execute karna hoga to ya phr kuch sec ke baad at that time we use set time out

setTimeout(()=>{
    console.log("hey i am executed after 5 seconds")
},5000)


