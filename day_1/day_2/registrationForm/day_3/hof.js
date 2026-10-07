const arr = [1,2,3,4,5,6,7,8,9,10];
arr.map((num)=>console.log(num));
const multipleofthree = arr.map((num) => num * 3);
console.log(multipleofthree);

const divisibleByFive = arr.filter((num) => num % 5 === 0);
console.log(divisibleByFive);

const firstDivisibleByfive = arr.find((num))=> num%5 === 0);
