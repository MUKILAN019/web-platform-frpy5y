// Challenge 1: Create a for loop to print all the even numbers till 100 in the console.
for(let j=1;j<=100;j++){
  if(j%2===0)
  console.log(j);
}
// Challenge 2: Create a while loop to print all the odd numbers till 100 in the console.
for(let j=1;j<=100;j++){
  if(j%2!==0)
  console.log(j);
}
// Challenge 3: Create a do while loop to print all the multiples of 3 till 100 in the console.
for(let i=1;i<=100;i++){
  if(i%3===0)
  console.log(i);
}

// Challenge 4: Create a for loop to print all the prime numbers till 100 in the console.

for(let j=2;j<=100;j++){
  if(j==2 || j==3 || j==5 ||
    (j%2!=0 && j%3!==0 && j%5!==0))
    console.log(j);
}