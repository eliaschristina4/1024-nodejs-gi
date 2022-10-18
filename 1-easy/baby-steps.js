const argumentList = process.argv;
const addThese = argumentList.slice(2,argumentList.length);

let sum = 0;
let solution = addThese.forEach((value) => {
  // convert to a number
  sum += Number(value);
  return sum;
});

console.log(sum);

//official solution:
// let result = 0
    
//     for (let i = 2; i < process.argv.length; i++) {
//       result += Number(process.argv[i])
//     }
    
//     console.log(result)


// ideas/notes
// console.log(process.argv);
// const sum = array.reduce( (accumulator, value) => {
//     return accumulator + value;
// }, 0 );

// use array.reduce()