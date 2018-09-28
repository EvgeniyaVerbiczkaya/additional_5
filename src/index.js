module.exports = function check(str, bracketsConfig) {
    let stack = [];
    for (let index = 0; index < str.length; index++) {
        let stack_last = stack[stack.length - 1];
        for (let element = 0; element < bracketsConfig.length; element++) {
            if (bracketsConfig[element][0] == bracketsConfig[element][1]) {
                if (str[index] == bracketsConfig[element][1] && stack_last == bracketsConfig[element][0]) {
                    stack.pop();
                } else if (str[index] == bracketsConfig[element][0]) {
                    stack.push(str[index]);
                }
            } else if (str[index] == bracketsConfig[element][0]) {
                stack.push(str[index]);
            } else if (str[index] == bracketsConfig[element][1] && stack_last != bracketsConfig[element][0]) {
                stack.push(str[index]);
            } else if (str[index] == bracketsConfig[element][1]) {
                stack.pop();
            }
        }
    }
    if (stack.length != 0) {
        return false;
    } else {
        return true;
    }
}