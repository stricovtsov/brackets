module.exports = function check(str, bracketsConfig) {
   // your solution
   const openBrackets = [];
   for (i=0; i<bracketsConfig.length; i++) {
     openBrackets.push(bracketsConfig[i][0]);
   }
   const closeBrackets = []
   for (i=0; i<bracketsConfig.length; i++) {
     closeBrackets.push(bracketsConfig[i][1]);
   }
   const bracketsPair = {};
   for (i=0; i<bracketsConfig.length; i++) {
     let key = bracketsConfig[i][1];
     bracketsPair[key] = bracketsConfig[i][0];
   }
   const stack = [];
   for (i=0; i<str.length; i++) {
     let symbol = str[i];
     if (openBrackets.includes(symbol)) {
       if (closeBrackets.includes(symbol) && stack[stack.length-1] === symbol) {
         stack.pop();
       } else {
       stack.push(symbol);
       }
     } else {
       if (stack.length === 0) {
         return false;
       }
       let topSymbol = stack[stack.length-1];
       if (bracketsPair[symbol] === topSymbol) {
         stack.pop();
       } else {
         return false;
       }
     }
   }
   return stack.length === 0;
 }
