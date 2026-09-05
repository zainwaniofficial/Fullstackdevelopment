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
}, 2000)

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



// setinterval

// setinterval use hota hai jub humhe kiseke code ko kuch time baad baar baar run karna hota hai then we use setINterval 


let interval = setInterval(()=>{

    console.log("hello replyy please😋")

    console.log("  ")
},1000)


//now if i want to clear this interval after some time use clear interval for that 

//but if we directly use clear interval our interval will be stoped before run , so we will use that also in timer 


setTimeout(()=>{

    clearInterval(interval)
},10000)


// if we want to stop the setTimeout we can also use for that clear timeout , so that that will not run 


let run = setTimeout(()=>{

    console.log("hello from run")
}, 5000)


// now i want it to stop before run 

// i can use clear timeout 


clearTimeout(run)  //if we check it will not run now 


//async code baad ma execute hota hai aur syncronous code pehle he execute hota hai 

//synchronous code 


console.log("hello")
console.log("hy")


//asynchronous code 


setTimeout(()=>{

    console.log("how are u")  //this asyncronous code we gave it zero sec to wait for execution means it shoud not wait but still it will get executed after synchronous code
},0)


//again synchronous code


console.log("I am fine")


//lets check 

//we found that the code which was synchronous is executed first and asynchronous has been executed after

