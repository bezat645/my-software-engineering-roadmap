
// 1 Looping a triangle,

for (let k =1 ; k<=7; k++){
    console.log('*'.repeat(k) );
}
 // I just learnt that when it comes to javascript, a string multiplied by a number will give you a NaN output like the "*" * 5

 //2, fizzbuzz

 let i = 1
 while ( i<=100)  {
    if ( i%3 == 0 ) {
        console.log("Fizz");
    }
    else if ( i % 5 ==0 ) {
        console.log("Buzz");
    }
    else if ( i % 5 ==0 && i %3 ==0){
        console.log ("FizzBuzz");
    }
    else {
        console.log (i);
    }
    i ++;

 }

 //3, chessboard

 let size = 8;
let board = "";

for (let y = 0; y < size; y++) {
  for (let x = 0; x < size; x++) {
    // Check if the sum of row and column indices is even or odd
    if ((x + y) % 2 === 0) {
      board += " ";
    } else {
      board += "#";
    }
  }
  // Add a newline character at the end of each row
  board += "\n";
}

console.log(board);

 
    
 

