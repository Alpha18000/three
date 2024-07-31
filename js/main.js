debugger
let num = +prompt("Enter number?");
   switch(num){
case 6:{
    document.write(`<h1>${num} is a perfect number</h1>`)
    break
}
case 28:{
    document.write(`<h1>${num} is a perfect number</h1>`)
    break
}
case 496:{
    document.write(`<h1>${num} is a perfect number</h1>`)
    break
}
case 8128:{
    document.write(`<h1>${num} is a perfect number</h1>`)
    break
}
default:{
    document.write(`<h1>${num} is not perfect number number</h1>`)
    break
}
   }

    
    if(num%2===1){
        document.write(`<h1>${num} is a prime number</h1>`)
    }
    else if(num%2===0){
        document.write(`<h1>${num} is not prime number</h1>`)
    }
    else{
        document.write(`<h1>Error</h1>`)
    }
let a =1;
document.write(`<span>${a}</span>`)
let b =1;
document.write(`<span>${b}</span>`)
for(let i =1;i<=num;i++){
    let c=a+b;
    document.write(`<span>${c}</span>`)
    a=b
    b=c
}