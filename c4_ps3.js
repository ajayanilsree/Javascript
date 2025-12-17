let comp=["Bloomberg", "Microsoft", "Uber", "Google", "IBM", "Netflix"];
comp.shift();
console.log(comp);
comp.splice(1,1,"Ola");
console.log(comp);
comp.push("Amazon");
console.log(comp);
