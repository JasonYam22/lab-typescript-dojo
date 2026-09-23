//
// Iteration 2 | Functions
//
function calcMultiplication(a: number, b: number): number {
    return a * b;
  }

function isEven(n: number): boolean {
if (n % 2 === 0) {
    return true
}
else {
    return false
}
}

function calcArrayAverage (numbersArr: number[]) : number | string {
    if (numbersArr.length === 0) {
        return("Please provide an array with at least one element")
    }
   const result = numbersArr.reduce((acc, currentIndex) => {
    return acc + currentIndex
   })
   const average = result / numbersArr.length
     return average
}

