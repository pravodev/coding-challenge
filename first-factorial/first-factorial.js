
const firstFactorial = (num) => num-1 == 0 ? num : num * firstFactorial(num-1)

console.log(firstFactorial(4)) //24