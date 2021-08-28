module.exports = function check(str, bracketsConfig) {
  
  let openBrackets = [];
  let pairBrackets = {};
  let count = 0;
  let stack = [];

  bracketsConfig.forEach((element) => { 
    openBrackets.push(element[0]);
    pairBrackets[element[1]] = element[0];
  });

  // let openBrackets = [];
  // bracketsConfig.forEach((element) => { openBrackets.push(element[0]) });
  // let pairBrackets = {};
  // bracketsConfig.forEach((element) => { pairBrackets[element[1]] = element[0] });
  


  for (let i = 0; i < str.length; i++) {
    let symbol = str[i];
    if (pairBrackets[symbol] == symbol) count++;
    if (pairBrackets[symbol] == symbol && symbol == stack[stack.length - 1]) {
      stack.pop();
    } else if (openBrackets.includes(symbol)){
      stack.push(symbol);
    } else {
      if (stack.length === 0) return false;
    }

    let lastElem = stack[stack.length - 1];
    if (pairBrackets[symbol] == lastElem && count == 0) {
      stack.pop();
    }
    if (count > 0) count = 0; 
  }
  return stack.length === 0;
}
