//Wap to reverse the given string.

  let  string1="Anushka"
  let rev_string =""
  console.log("The string before reversing it is :-"+string1)
 for(let i=string1.length-1;i>=0;i--){
    rev_string= rev_string+ string1.charAt(i);
 }

 console.log("The reverse of string is :-"+rev_string)

//Wap to count specific character of a string

let string2="Full Stack Development classes"
let j=1
let count=0
let search="e"
for(let j=1;j<string2.length;j++){
    //counting l in from the given string
    if(string2.charAt(j)==search){
        count++
    }
}
console.log("There are total :- " +count+ " " + search+" in the given string")

//wap to find out unique char within the string

let string3="sensible person"
let unique_char =""
for(let k=0;k<string3.length;k++){
    //ye loop har ek char k pass jayga
   let count_char = 0 ;
   for(let m=0;m<string3.length;m++){
      if(string3.charAt(k)==string3.charAt(m)){
         count_char++
      }
   }
   if(count_char==1){
   unique_char=unique_char+string3.charAt(k)
  }
}
console.log("The unique character are :-" +unique_char)