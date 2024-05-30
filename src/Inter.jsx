import React from 'react'

const Inter = () => {
   //given a string reverseeach word in the sentence
   
   /*var a= "taniya is my name";
   var t= a.split(" ").map((item)=>
   {
       return item.split("").reverse().join("");
   }
)

console.log(t);
*/

//how to cheack if an object is an array or not...
  
/*function cheackArray(elem)
{
   return Array.isArray(elem)
}
console.log(cheackArray([]))
console.log(cheackArray({}))
*/

//how to empty an array in javascript

/*const arr= [10, 20, 30, 40, 50];
console.log(arr);
arr.length= 0;
console.log(arr);
*/

//how would you check if a number is iteger  is not.....

/*var a= 10;
//console.log(Number.isInteger(a))
if(a%1==0)
{
    console.log("number is  integer")
}
else
{
    console.log("number is not integer");
}
*/

//palindrom or not
/*var a= "madam";
var t= a.split("").reverse().join("");
if(t==a)
{
   console.log(`${a} is palindrom`)
}
else{
    console.log(`${a} is not palindrom`)
}
*/

//union array
/*function union(arr1, arr2)
{
  return [...new Set(arr1.concat(arr2))];
}
console.log(union([1, 2,  3], [100,2,1, 10]))
*/

//sorting array

/*const arr= ["appple", "mango", "banana", "orange"];
const arr1= arr.sort((a, b)=>
{
    return a-b;
})

const arr1= arr.sort();
console.log(arr1);

*/

//write a javscript program to shuffle an array meanns relacing concept

/*function shuffle(arr)
{
    var temp1= arr.length;
    while(temp1>0)
    {
       temp1--;
       var random= Math.floor(Math.random() * temp1);
       var temp= arr[temp1];
       arr[temp1]= arr[random];
       arr[random]= temp;
    }
    return arr;

}
console.log(shuffle([1,2, 3, 4, 5, 6, 7]))
*/

//write a js progrm to find the most frequent item of an arraayy

/*function freq(arr){
    var freq= {};
    arr.forEach(function (elem)
{
    if(freq.hasOwnProperty(elem)) freq[elem]++;
    else freq[elem]= 1;
})
var ans= Object.keys(freq).reduce((acc, num)=>
    {
       return freq[acc] > freq[num] ? acc: num;
    })
    console.log(ans);

}

freq([1, 2, 3,12, 2, 12, 12, 12, 2, 3, 2121])
*/

//write a js program to get the last element of an array padsing a parameter n will return the last n element of the array 
//means jitne digit dale vhi tk print kre...

/*function index(arr, n)
{
  if(n <arr.length)
  {
     for(var i=0; i<=n; i++)
     {
        console.log(arr[arr.length - 1 - i])
     }
  } 
  else
  {
    console.log("number is wrong")
  }
}
index([1, 2, 3, 4, 5], 1)
*/
// clone program byspread operator
/*function sm1(...arr)
{
    console.log(arr)
}
sm1([10, 20, 30,40])
*/

//find dublicate element in an array

/*const arr= [10, 10, 30, 40, 60, 30];
const dublicate= arr.filter((elem, index)=> arr.indexOf(elem) !==index)
console.log(dublicate);
*/

//remove dublicacy element in an array

/*const arr= [10, 10, 30, 40, 60,30, 30]
const set = new Set(arr);
console.log(set);
*/

//how to find max/min in a given array

/*function maxfunc(arr)
{
   return arr.reduce((prev, curr)=>
    {
        return prev>curr?prev : curr
    })

}
const arr1= [1, 9, 87, 65, 65, 76];
console.log(maxfunc(arr1));
*/

//second largest element in array

/*function second(arr)
{
   const math= Math.max(...arr);
   const index= arr.indexOf(math);
   arr.splice(index, 1);

   const secondIndex= Math.max(...arr);
   return secondIndex;
}
console.log(second([10, 1, 8, 5, 20]))
*/

//even or odd number
/*function even(...arr)
{
    for(var i=0; i<=arr.length-1; i++)
    {
        if(arr[i]%2==0)
        {
           console.log(`${arr[i]} is even`)
        }
        else{
            console.log(`${arr[i]} is odd`)
        }

    }
}
console.log(even(10, 9, 7, 20))
*/

//sum of all element in  array...
 /*function sum(arr)
 {
    return arr.reduce((prev, curr)=>
    {
        return prev + curr;
    }

)
    
 }
 console.log(sum([10, 20, 30, 40, 50]))
 */

 //prime no injavascript 
 /*
 function prime(arr)
 {
    if(arr==1)
    {
       console.log("not a prime number")
    }
    else if(arr<1)
    {
       console.log("this is not prime no")
    }
    else
    {
       for(var i=2; i<arr; i++)
       {
            if(arr%i==0)
            {
               console.log(`${arr} is not prime number`);
            }
            console.log(`${arr} is prime no`)
       } 
    }
 }
 prime(7)
 */

 //factorial in array...
 function factorial(arr)
 {
    var fact=1;
   for(let i=1; i<=arr; i++)
    {
       fact= fact*i
    }
    console.log(fact);
 }
 console.log(factorial(5))
  return (
    <div>
    </div>
  )
}



export default Inter
