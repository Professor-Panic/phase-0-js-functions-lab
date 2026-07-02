function calculateTax(amount){
    return 0.10*amount;
}
function convertToUpperCase(text){
    text=String(text);
    return text.toUpperCase();
}
function findMaximum(num1,num2){
    return Math.max(num1,num2);
}
function isPalindrome(text){
    let reversed_text=text.split("").reverse().join("");
    if(reversed_text==text){
        return true;
    }
    else{
        return false;
    }
}
function calculateDiscountedPrice(originalPrice,discountPercentage){
    return originalPrice*(100-discountPercentage)/100;
}




// This is required for the test to function properly  
module.exports = { calculateTax, convertToUpperCase, findMaximum, isPalindrome, calculateDiscountedPrice };