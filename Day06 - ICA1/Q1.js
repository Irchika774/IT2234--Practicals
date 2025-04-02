function maxpurchaseAmount(budget,keyboardPrices,mouseprices){
	let maxAmount = -1;
	
	for(let k of keyboardPrices){
		for(let m of mouseprices){
			let total= k+m;
			if(total <=budget && total>maxAmount){
				maxAmount = total;
			}
		}
	}
	
	return maxAmount;
}
console.log(maxPurchaseAmount(60, [40, 50, 60], [5, 8, 12]));
console.log(maxPurchaseAmount(10, [3, 1], [5, 2, 8])); 
console.log(maxPurchaseAmount(20, [30, 15], [8, 10, 6])); 