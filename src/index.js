module.exports = function check(str, bracketsConfig) {
  let stack = [];
  let open = [];
  let exeptions = [];
  bracketsConfig.forEach(item => {
    if (item[0] === item[1]) {
      exeptions.push(item[0])
    } else {
      open.push(item[0]);
    }
  })
  let brackets = Object.fromEntries(bracketsConfig);
  for (let i = 0; i < str.length; i++) {
    let lastInStack = stack[stack.length - 1];
    if (open.includes(str[i])) {
      stack.push(str[i]);
    } else if ((exeptions.includes(str[i])) && (lastInStack !== str[i])) {
      stack.push(str[i]);
    } else if ((!open.includes(str[i])) && (stack.length === 0)) {
      return false;
    } else if ((exeptions.includes(str[i])) && (lastInStack === str[i])) {
      stack.pop();
    } else if (str[i] === brackets[lastInStack]) {
      stack.pop();
    } 
  }
  return stack.length === 0;
}