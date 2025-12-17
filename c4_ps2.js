 let item_price=[250, 645, 300, 900, 50];
 let offer_price=[];
for(let i=0;i<item_price.length;i++){
    offer_price[i]=item_price[i]-(item_price[i]*0.1)
}
console.log(`The offer prices are:`);
for(let j=0;j<offer_price.length;j++){
    console.log(`Item${j+1}:Rs.${offer_price[j]}`);
}
