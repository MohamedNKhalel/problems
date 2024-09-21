let numbers = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];
//start Exercise 1 => filtring an array 
let evenNumbers = numbers.filter((num)=>{return num %2 == 0});
console.log('Even numbers =>',evenNumbers);
//or
function even(arr){
    evenNumbers = arr.filter(num => num %2 == 0);
    console.log('Even numbers =>',evenNumbers);
}
even(numbers)
//end Exercise 1 => filtring an array 

//start Exercise 2 => Find the Largest Number 
function large(arr){
        console.log('Lragest number =>' ,Math.max(...arr));
}
large(numbers);
//end Exercise 2 => Find the Largest Number 

//start Exercise 3 => Reverse a String
let text = 'this is the text to reverse';
let reversed = text.split(' ').reverse().join(' ');
console.log("Reversed =>",reversed);
//function 
function reverse(text){
    console.log("Reversed =>",text.split(' ').reverse().join(' '));
}
reverse(text);
//end Exercise 3 => Reverse a String

//start Exercise 4 => Remove Duplicates
let duplicatedNums = [2,5,2,3,5,4,8,4,9,3];
console.log("Unique =>",duplicatedNums.filter((num,index)=>{return duplicatedNums.indexOf(num) == index}));
function unDuplicate(arr){
    console.log("Unique =>",[...new Set(arr)]);
}
unDuplicate(duplicatedNums);
//end Exercise 4 => Remove Duplicates