let student1 = {
       name: "Aman",
       age: 25,
       course : "Phython"
       }

let student2 = {
       name: "Aahana",
       age: 20,
       course : "Cyber Security"
       }

let student3 = {
       name: "Maya",
       age: 23,
       course : "Java"
       }

let student4 = {
       name: "Aman",
       age: 24,
       course : "C++"
       }

//creating array of object

let students =[student1,student2,student3,student4]

//accessing object key 
//name key
for(let student of students){
    console.log(student.name)
}

//destructing a array
let numbers = [1, 2, 3, 4]
let [a,b,c,d]=numbers

console.log(a)
console.log(c)

//destructing a object 
let person1 = {
       name: "Aman",
        age: 25,
        job: "Developer"
       }

let person2 = {
       name: "Maheer",
        age: 30,
        job: "Consultant"
       }

let person3 = {
       name: "Nahisha",
        age: 21,
        job: "HR"
       }

let [name,age,job]=person1

console.log(name)
console.log(age)
console.log(job)