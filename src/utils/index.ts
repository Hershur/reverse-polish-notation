export function isOperator(token: string) {
    return ['+', '-', '*', '/', '√'].includes(token);
}
  
export function evaluateOperand(operand: number) {
    //check fraction
    const [numerator, denominator] = operand.toString().split('/');
  
    // if not a fraction, return operand
    if(!denominator){
      return operand;
    }
  
    return parseInt(numerator, 10) / parseInt(denominator, 10);
}
  
export function calculateRPN(expressionString: string) {
    const expression = expressionString.trim().split(' ')
    const stack: number[] = [];

    for (const token of expression) {
      if (isOperator(token as string)) {
        const operand2 = stack.pop() as number;
        const operand1 = stack.pop() as number;
  
        let result = 0;
  
        switch (token) {
          case '+':
            result = +operand1 + +operand2;
            break;
          case '-':
            result = +operand1 - +operand2;
            break;
          case '*':
            result = +operand1 * +operand2;
            break;
          case '/':
            result = +operand1 / +operand2;
            break;
          case '√':
            result = Math.sqrt(+operand2);
            break;
        }

        stack.push(result as number);
      } else {
        stack.push(evaluateOperand(token as unknown as number));
      }
    }
  
    if (stack.length !== 1) {
      throw Error('Invalid expression');
    }
  
    const value = stack.pop();
  
    if(!value) {
      throw Error('Invalid expression');
    }
  
    return value;
}
  
  
  