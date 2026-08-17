console.log("hello from array script")

//when we have to store more than one values together , we use arrays 

let arr1 = [2,3,4,5,"name",()=>{}] // syntex of this  

//we can use different type of data types 


// let use array 


let students = [ "saqib" , "amir" , "shariq" , "bilal" , "durfshaan"] 


// // printing all students 

for(let i = 0; i< students.length; i++){

    console.log("students are " , students[i])
}


// we can modify the values of array also 

// like here we want to change the name shariq to shaqiraa 

//we will cahnge that by targetting its index value

students[2] = "shaqiraa";  // here i wrote 2 index no because indexing is starteed from 0 

//now if we print the array again we will get

console.log(students[2]) //here we will get modified value shaqiraa


// now lets learn about array methods 

//push
//pop
//slice
//splice
//shift
//unshift
//indexof

// methods that mutates actual array (means riflects changes in actual array ) are

//psuh , pop , shift,splice, unshift ,reverse , sort



//push

// push is used to add the element in the end of an array
 // array before push method 

 console.log("array before push " , students)
// lets add the another student to students array 

students.push("zain");

// now if we print the array again we will see this value will reflect on the end of the array 

console.log( "array after push" , students)

console.log("that means push method is chaging the value in actual array")

// now lets learn about the pop method 

// what mom method does it deletes the element of an array one by one by deleting that from the end side 

// like here 
 console.log("array before pop" , students)
students.pop()

console.log("array after applying pop method" , students)


// if we want to remove the element from the first we use 

//shift mothod


console.log("array before shift", students)

students.shift()

console.log("array after applying shift method" , students)

console.log("means that push and pop make changes from last and the shift removes the element from beggingng of array")

// lets see now what will do unshift 
// unshift is used to add the eleent in the begingigng of the array 

console.log("array before applying unshift shift" , students)
students.unshift("sam")

console.log("array after unshift" , students)

console.log("so we got that shift is used to remmove the element in the beggining of an aray and unshift is used to add the element in the begining of an array")



//NOW LETS SEE WHAT IS REVERSE METHOD
console.log("lets see what reversemethod does")

let simplearr = [1,2,3,4,5,6,7,8,9]


console.log("array before applying reverse method", simplearr)

simplearr.reverse()

console.log("array after applying reverse method" , simplearr)

//reverse method is used to reverse the array elements 


//reverse method basically reversers the elemets based on index 
console.log("reverse method is used to reverse the array elements")



// now lets see splice what splice does


//what is splice 

// for what is used

//splice is used to delete the elemets more than one togther


console.log("SPLICE METHOD")
 let splicearray = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]


console.log("Array before splice method ", splicearray)

splicearray.splice(2,8) //here it will delte from index no 2 and will delete 8 elements


console.log("i spliced from index 2 and told how many elemts have to delete i told 8 elements" )

console.log("array after applied splice",splicearray)

//so it means we splice is used to delete a set of eleents together

//it has tu paramteters first one from which index second one how many have to delete from that index

// if we want to delete the element from a certain index to end we can simply mention taht index only from that to end it will delete all the elemnts in array
// and we can als mention how many elemts to delete from that index

splicearray.splice(4) //it will delete all the elements from the index 4
console.log("delted all the elemenyts from index 4 " , splicearray)
//so lets see now What is sort method


//sort is used to sort the elements of an array

//lets see

console.log("SORT METHOD")

let unsortedArray = [2,5,9,8,6,4,7,3,1]

//sorts works well only in stringss 

// because when we give 20,0, it places that based on its first value

//array before sorting 

console.log("array before sort method",unsortedArray)

let sortedArr = unsortedArray.sort()


console.log("array after applying sort method" , sortedArr)
//basically it sorts the elements based on their ASCAII value


//now if we want to sort the value perfectly we have to use fun in this inside sort 


let arr3 = [2,50,30,5,60,7,60,9,50];

let arr32 = arr3.sort((a,b)=>{

    return a - b;
})


console.log(arr32)



//now lets move to those methods which don't reflect changes in actual array they make changes and provide that as a new array


//methods that give the changes in a new array mens thay dont make changes to actual array

// slice , concat , map , filter


// lets talk about slice first 

//slice
//slice is used to make the slices to the array as give those slices in new arrays

let arr4 = [1,2,3,4,5,6,7,8]

// now i want to make the new array 

let newarr2 = arr4.slice(0,3)

console.log(newarr2)

console.log(arr4) //if we check orignal array it kept unchanged



//now lets see concat 

// concat

// concat combines two arrays and make the new array of them 

let arrayOne = ["hello", "my" , "name" , "is"]

let arraytwo = ["xain" , "wani" , "kashmir"]


//now lets concat them

 let arrThree = arrayOne.concat(arraytwo)

 console.log(arrThree)

//instead of this we can use simply spread operator


let arr5 = [...arrayOne , ...arraytwo]

console.log(arr5)
 
//returns values

//find ,includes ,indexof , reduce , some ,every //these dont make changes in actual array nar it makes the new array



//now learning the most important and most using concept .map 


let friends = ["zain" , "saqib" , "irtiqa" , "mehak" ,"bilal" , "danish" , "amandeep" , "durfshaan"]

let newarr = friends.map((i)=>{
    console.log(i)
}) 

// console.log(newarr)

// lets practice for some time 

//push 

friends.push('junior')

console.log(friends)


// push is used to add the element on the end of the array


// pop

// pop is used to remove the element from the array end side magar

    friends.pop()

    console.log(friends)


    //shift

    //shift is used to remove the element in the front of an array

    friends.shift()

    friends.push("sakiya")



    console.log(friends)

    //unshift is used to add the element in the front of an array

    friends.unshift("xain")

    console.log(friends)

    //reverse

    //reverse is used to reverse the array

    friends.reverse()

    console.log(friends)
    
    friends.reverse()
    
    console.log(friends)