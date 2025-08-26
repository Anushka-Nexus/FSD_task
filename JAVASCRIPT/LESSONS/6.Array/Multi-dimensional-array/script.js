//wap to accessing each value of 2-d array :
let numbers = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
]

//using for loop
for (let row = 0; row < numbers.length; row++) {
    for (let column = 0; column < numbers[row].length; column++) {
        console.log(numbers[row][column])
    }
}

//using for of loop
for (let rows of numbers) {
    for (let columns of rows) {
        console.log(columns)
    }
}

//wap to transverse 3-d array using for and forof loop

let fsd530 = ["student1",'student2', 'student3',"student4", "student5","student6"]
let fsd730 = ["student7",' student8'," student9", 'student10', 'student11']
let fsd1030 = ["student12","student13", "student14", "student15", "student16"]

let itech_sharda_sq = [fsd530, fsd730, fsd1030] //2-d

let java430 = ["student17", "student18", "student19", "student20"]
let java630 = ["student21", "student22", "student23", "student24", "student25"]
let java830 = ["student26", "student27", "student28", "student29", "student30"," student31", "student32"]

let itech_tiranga_sq = [java430, java630, java830] //2-d

let itech_nagpur = [itech_sharda_sq, itech_tiranga_sq] //3-d

//transversing and accessing each values

// using for loop
for (let frame = 0; frame < itech_nagpur.length; frame++) {
    for (let r = 0; r < itech_nagpur[frame].length; r++) {
        for (let c = 0; c < itech_nagpur[frame][r].length; c++) {
            console.log(itech_nagpur[frame][r][c])
        }
    }
}

//using for of loop
for(let batches of itech_nagpur){
    for(let classes of batches){
        for(let students of classes){
            console.log(students)
        }
    }
}