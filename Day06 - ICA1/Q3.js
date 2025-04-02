function getMaxValue(num) {
    let digits = num.toString().split(''); 
    let maxDigits = [];
    
    while (digits.length > 0) {
        let maxDigit = digits[0];
        let maxIndex = 0;

        for (let i = 1; i < digits.length; i++) {
            if (digits[i] > maxDigit) {
                maxDigit = digits[i];
                maxIndex = i;
            }
        }

        maxDigits.push(maxDigit);
        
        digits[maxIndex] = digits[digits.length - 1];
        digits.length--; 
    }

    let result = 0;
    for (let i = 0; i < maxDigits.length; i++) {
        result = result * 10 + parseInt(maxDigits[i]);
    }
    
    return result;
}

console.log(getMaxValue(215)); 
console.log(getMaxValue(1093)); 
