//fizz Buzz

function fizzBuzz(number){
    for(let i=3; i<= number;i++){
        if(i%3===0 && i% 5 ===0){
            console.log("fizz Buzz", i);
           
         } else if ( i % 3===0) {
console.log( " fizz",i);

        }else if (i% 3=== 0) {
            console.log("fizz",i);

            }else{
                  console.log(i);
        }
    }
}

// console.log(fizzBuzz(100));


//Is prime 1) write your plan on paper.

function isPrime(start){
let i = 2
while(i < start ){
    if (start % i ===0) return false; i++
}
    return  true; 
}
function findNextPrimeNumber(startingNum){
    let starting = startingNum +1;
    while(starting){
        if (isPrime(startingNum))
          {  break;
        }
        starting++;
    }
    return starting;

}





// console.log(findNextPrimeNumber(3));


const rows = "Index,Mass (kg),Spring 1 (m),Spring 2 (m)\n1,0.00,0.050,0.050\n2,0.49,0.066,0.066\n3,0.98,0.087,0.080\n4,1.47,0.116,0.108\n5,1.96,0.142,0.138\n6,2.45,0.166,0.158\n7,2.94,0.193,0.174\n8,3.43,0.204,0.192\n9,3.92,0.226,0.205\n10,4.41,0.238,0.232"

 

const feelingLoopy = (str) => {
    const person = str.split('\n')
    for( let i = 0; i < person.length; i++){
        console.log(person[i])
    }
}


console.log(feelingLoopy(rows))


const names = "\n1)Lina,Bond\n2)Elizabeth,Bond\n3)Sabrina,Bond\n4)Chineta,Bond"


const sister = (list)=> {
    const people = list.split('\n')
    for (let i=0; i <= people.length; i++){
        console.log(people[i])
    }

}
console.log(names);



//2 ways to create a function
// function functionName() {
    
// }
// const funcName = () => {

// }