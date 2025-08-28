//wap in js to assign a value within the date object and also calculate difference between two dates in days.
let person1={
    name: "Anushka",
    bod: new Date("2002/6/4") //date ka format year/month/days
}
let person2={
    name: "Aadhya",
    bod: new Date("2002/3/2")
}

let msinday= 24*60*60*1000

let diffinms= person1.bod-person2.bod

let diff_day = diffinms/msinday

console.log(`Difference in days , between birth date of ${person1.name} and ${person2.name} is ${diff_day} days.`);

//wap in js to assign values within the date object

let date1= new Date()

console.log(date1) // outputs current date in ms

let birthdate = new Date("2000-04-15") // set a new date

console.log(birthdate) // display krega output as a string 2000 april 15 

let date2 = new Date(2001,6,15) // year set kiya month on the based 0to11 set kiya means 5th month hai 

console.log(date2)

let date3 = new Date(1118978787) // direct ms value assign ki

console.log(`The date is ${date3.getDate()}/${date3.getMonth()+1}/${date3.getFullYear()}`) //month 0 se start hota hai isliye