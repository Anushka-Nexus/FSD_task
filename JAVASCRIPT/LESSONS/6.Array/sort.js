//Bubble sorting
let student_names = [`Purva`, `Palak`, `Anushka`, `Bharti`, `Kittu`, `Prachi`]

function bubblesort(array1, order) {

    if (order == `a`) {
        for (let i = 0; i < array1.length; i++) {
            let swap = false
            for (let j = 0; j < array1.length - i; j++) {
                if (array1[j] > array1[j + 1]) {
                    //performing swapping
                    let temp = array1[j + 1]
                    array1[j + 1] = array1[j]
                    array1[j] = temp
                    swap = true
                }
                //if swapping not 
                if (!swap) {
                    break
                }

            }
        }
    }
    else if (order == `d`) {
        for (let i = 0; i < array1.length; i++) {
            let swap = false
            for (let j = 0; j < array1.length - i; j++) {
                if (array1[j] < array1[j + 1]) {
                    //performing swapping
                    let temp = array1[j + 1]
                    array1[j + 1] = array1[j]
                    array1[j] = temp
                    swap = true
                }
                //if swapping not 
                if (!swap) {
                    break
                }

            }
            
        }
        
    }
    else {
        console.log("Please enter valid option")
    }
  return array1
}

let order = window.prompt("How do you want to arrange your string? press `a` for asending order or press `d` for desending order")
console.log(bubblesort(student_names, order))

//Selection sort
//first set minvalue=arr[0] then compare with other array values if  the value is smaller than minvalue then swapped it 
//repeat this until the array is sorted

let employee=[`Raj`,`Aisha`,`Shreya`,`Riya`,`Yash`,`Zyra`,`Aadhya`]

function Selectionsort(array2,sequence){
     if(sequence==`a`){
         for (let i = 0; i < array2.length; i++) {
        let minIndex = i
        for (let j = i; j < array2.length; j++) {
            if (array2[j] < array2[minIndex]) {
                minIndex = j
            }
        }
        //swapping
        let temp = array2[i]
        array2[i] = array2[minIndex]
        array2[minIndex] = temp
    }
     }
     else if(sequence==`d`){
         for (let i = 0; i < array2.length; i++) {
        let maxIndex = i
        for (let j = i; j < array2.length; j++) {
            if (array2[j] > array2[maxIndex]) {
                maxIndex = j
            }
        }
        //swapping
        let temp = array2[i]
        array2[i] = array2[maxIndex]
        array2[maxIndex] = temp
    }
     }
     else{
        console.log("You have entered the wrong option")
     }
     
    return array2
}
let seq=window.prompt("How do you want to arrange your array Press (a) for asending order Press (d) for desending order")
console.log(Selectionsort(employee,seq))

