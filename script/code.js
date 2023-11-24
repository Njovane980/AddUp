let Numbers = [2, 6, 12, 18, 40, 42];

//Calculate the sum using the reduce methood
let sum = Numbers.reduce((acc,  current) => acc + current, 0);

//Display the sum of the array
console.log("The sum of the Numbers array is: " + sum);

