console.log('****** Part Supply *******');
// REQUIRED FEATURES

// 1. Create a variable called 'partsNeeded' with a value of the number 40 
//    & console.log the variable
let partsNeeded=40;
console.log('1. Number of partsNeeded:', partsNeeded);

// 2. Create a variable call 'supplyChanges' set it to an array containing
//    the following numbers: 3, 5, -6, 0, 7, 11
let supplyChanges = [3, 5, -6, 0, 7, 11];
console.log('2. Array of supplyChanges:', supplyChanges);

// 3. Console log the value of the second item in the 'supplyChanges' array
console.log('3. Second supplyChange is:', supplyChanges[1]);

// 4. The last item was added by mistake. Remove it from the 'supplyChanges' 
//    array & console.log the value removed.
supplyChanges.pop
console.log('4. Removed item:', supplyChanges.pop());

// 5. A delivery of 25 more parts arrived. Add the value 25 to the end of the array
supplyChanges.push(25);
console.log('5. Adding 25 to supplyChanges.', supplyChanges);

// 6. Write a `for` loop that shows each value in the 'supplyChanges' array
//    Use a console.log formatted as follows, where x is the value from the array
//    - if it is a positive number (greater than 0), log 'Added x parts.' 
//    - if the value is 0, log 'No Change.'
//    - if the value is negative, format the log as 'Removed x parts.' 

for (let i = 0; i < supplyChanges.length; i++){
    console.log ('supplyChanges:', supplyChanges[i] );
    if (supplyChanges[i]>0) {
        console.log ('added:' +  supplyChanges [i], 'parts.');
    }
      else if (supplyChanges [i] === 0) {
        console.log ('No Change.');
      }
      if 
        (supplyChanges[i]<0) {
        console.log ('Removed:' + supplyChanges [i], 'parts.');
        }
 } 
 

// if( hand.includes( cardSearch ) ){
    // //     console.log( cardSearch, 'found in hand' );
    // //     // if so, find index (use indexOf)
    // //     const myIndex = hand.indexOf( cardSearch );
    // //     console.log( 'index of', cardSearch, 'is', myIndex );
    // //     // splice out of array
    // //     const splicedCard = hand.splice( myIndex, 1 );
    // //     // log card removed
    // //     console.log( 'splicedCard:', splicedCard[0] );
    // // }
    // // else{
    // //     // if not, log hot in hand
    // //     console.log( cardSearch, 'not in hand' );
    // // }

// STRETCH GOALS
console.log('---  Stretch Goals  ---');
// 7. Rewrite the `for` loop from #6 as a `for of` loop.  
          for (let supply of supplyChanges){
            if(supply > 0){
                console.log('added:' +  supply, 'parts.');
            } else if (supply === 0){
                console.log(`No Change.`);
            } else if (supply < 0){
                console.log('Removed:' + supply, 'parts.');
            }
        }
  






// 8. Rewrite the `for` loop from #6 as a `while` loop.
console.log('8. Showing supplyChanges with "while" loop');

// while (let i = 0; i < supplyChanges.length; i++){
//       console.log ('supplyChanges:', supplyChanges[i] );
//       if (supplyChanges[i]>partsOrdered) {
//           console.log ('added:' +  supplyChanges [i], 'parts.');
//       }
//         else if (supplyChanges [i] === 0) {
//           console.log ('No Change.');
//         }
//         if 
//           (supplyChanges[i]<partsOrdered) {
//           console.log ('Removed:' + supplyChanges [i], 'parts.');
//           }
//    } 

// 9. Write a loop to determine the total number of parts available by
//    adding up all the numbers in the 'supplyChanges' array.
console.log('9. Total supplies available is:');


let sum = 0;
for (i=0; i<supplyChanges.length; i++){
  sum+=supplyChanges[i];
}
 console.log ('Total supplies available is: ' + sum);




