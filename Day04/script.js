//Print all odd numbers
let oddNum=function(num){
    let oddNumbers="";
    for(let i=0;i<num.length;i++){
        if(num[i]%2!==0){
            oddNumbers+=num[i]+" "
        }
    }
    console.log("Odd Numbers: "+oddNumbers.trim())
}
const num=[1,2,3,4,5,6,7,8,9,10];
oddNum(num)


//Convert all the strings to title caps in a string array
const titleCaps=function(arr){
    for(let i=0;i<arr.length;i++){
        let words=arr[i].split(" ")
        for(let j=0;j<words.length;j++){
            let word=words[j]
            words[j]=word.charAt(0).toUpperCase()+word.slice(1).toLowerCase()
        }
        arr[i]=words.join(" ")
    }
    return arr;
}

const strings=["hello world","good morning","good night","good evening"];
const titlecaps=titleCaps(strings);
console.log("Title Caps: "+titlecaps)


//Sum of all numbers in an array
const sumOfArray=function(arr){
    let sum=0
    for(let i=0;i<arr.length;i++){
        sum=sum+arr[i];
    }
    return sum;
}
const nums=[1,2,3,4,5,5];
console.log("Sum Of Array: "+sumOfArray(nums))

//Return all the prime numbers in an array

const isPrime=function(num){
    if (num <= 1) {
        return false;
      }
      for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
          return false;
        }
      }
      return true;
}
const getPrimeNumbers=function(arr) {
    const primeNumbers = [];
    for (let i = 0; i < arr.length; i++) {
      if (isPrime(arr[i])) {
        primeNumbers.push(arr[i]);
      }
    }
    return primeNumbers;
  }
  const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  console.log("Prime Numbers: "+getPrimeNumbers(numbers));


  //Return all the palindromes in an array

  const  isPalindrome=function(str) {
    const reversedStr = str.split('').reverse().join('');
    return str === reversedStr;
  }
  
  const  getPalindromes=function(arr) {
    const palindrome=[]
    for(let i=0;i<arr.length;i++){
        if(isPalindrome(arr[i])){
            palindrome.push(arr[i])
        }
    }
    return palindrome
  }
  const stringArray= ["hello", "level", "madam", "racecar"];
  console.log("Palindrome: "+getPalindromes(stringArray));
  

  //Return median of two sorted arrays of the same size.

const findMedian=function(arr1, arr2) {
    const mergedArray = arr1.concat(arr2);
    mergedArray.sort((a, b) => a - b);
    const length = mergedArray.length;
    const middle = Math.floor(length / 2);
    
    if (length % 2 === 0) {
      return (mergedArray[middle - 1] + mergedArray[middle]) / 2;
    } else {
      return mergedArray[middle];
    }
  }
  const arr1 = [1, 3, 5];
  const arr2 = [2, 4, 6];
  const median = findMedian(arr1, arr2);
  console.log("Median: "+median);
  
  //Remove duplicates from an array

  function removeDuplicates(arr) {
    return [...new Set(arr)];
  }
  const array = [1, 2, 3, 4, 2, 3, 5];
  console.log("After removing duplicates: "+removeDuplicates(array));
  

  //Rotate an array by k times

const  rotateArray=function(arr, k) {
    const rotations = k % arr.length;
    const removed = arr.splice(0, rotations); 
    arr.push(...removed); 
    return arr;
  }
  const n = [1, 2, 3, 4, 5];
  const rotations = 2;
  
  console.log("After "+rotations+" rotations: "+rotateArray(n, rotations));
  