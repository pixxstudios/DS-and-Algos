const factorial =(num: number) => { 
if(num > 0)
    return num * factorial(num-1);
else
    return 1;
}
     
console.log(factorial(8));                            
  
export { factorial };
    