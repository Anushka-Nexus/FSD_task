//linear searching
let  countries = ["India", "Germany", "Brazil", "Canada", "Japan"]

function LinearSearch(array1,Value){
    let step=0
    for (let i= 0; i< array1.length; i++){
        step++
        if(array1[i]==Value){
             let msg =`The element ${Value} is found in position ${i+1} by steps ${step}`
             return msg
        }
    }
    return `The element ${Value} is not found in the array`
}

console.log(LinearSearch(countries,`Brazil`))
console.log(LinearSearch(countries,`Australia`))

//Binary Search

let sports = ["Badminton", "Basketball", "Cricket", "Football", "Tennis"]

function BinarySearch(array2,SearchValue){
    let steps=0
    let max=array2.length-1
    let min=0
    while(min<=max){
        steps++
        let midpoint= parseInt((max+min)/2)
        if(array2[midpoint]==SearchValue){
            let msg =`The element ${SearchValue} is found in position ${midpoint+1} by steps ${steps}`
            return msg
        }
        else if(array2[midpoint] < SearchValue){
             min= midpoint + 1
        }
        else {
             max= midpoint - 1
        }
    }

    return `Element ${SearchValue} not found after ${steps} steps`
}
 

console.log(BinarySearch(sports,"Tennis"))
console.log(BinarySearch(sports,"Hockey"))