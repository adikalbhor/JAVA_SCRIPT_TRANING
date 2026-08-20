console.log("1.Start5");
setTimeout(()=>console.log("2.T%imeout"),2000);console.log("3.End");

console.log("A");
setTimeout(() => console.log("B"), 0);
console.log("C");
setTimeout(() => console.log("D"), 100);
 
 