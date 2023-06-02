import { 
    isOperator,
    evaluateOperand, 
    calculateRPN,
} from "./index";


describe('Test for utils functions', () => {
    describe('Check operators', () => {
        test('check if string is a valid operator', () => {
            expect(isOperator('√')).toBe(true);
            expect(isOperator('/')).toBe(true);
        });
        
        test('check if string is an invalid operator', () => {
            expect(isOperator('9')).toBe(false);
            expect(isOperator('k')).toBe(false);
        });
    });
    
    describe('Evaluate Operands', () => {
        test('evaluates whole numbers', () => {
            expect(evaluateOperand(9)).toBe(9);
            expect(evaluateOperand(11)).toBe(11);
        });
        
        test('evaluates fractional numbers', () => {
            expect(evaluateOperand(1/4)).toBe(0.25);
            expect(evaluateOperand(1/4)).toBe(0.25);
        });
    });
    
    describe('Calculate Reverse polish notation', () => {
        test('should accurately compute whole numbers', () => {
            expect(calculateRPN('5 3 +')).toBe(8);
            expect(calculateRPN('5 3 4 + *')).toBe(35);
        });
        
        test('should accurately compute whole fractional numbers', () => {
            expect(calculateRPN('1/5 1/2 +')).toBe(0.7);
            expect(calculateRPN('1/2 1/2 *')).toBe(0.25);
        });
        
        test('should accurately compute square root functions', () => {
            expect(calculateRPN('1/2 1/2 * √')).toBe(0.5);
            expect(calculateRPN('5 3 2 + * √')).toBe(5);
        });

        test('should through error for invalid expression', () => {
            expect(() => {
                calculateRPN('7 6 * +')
            }).toThrow(Error('Invalid expression'));

            expect(() => {
                calculateRPN('45 /');
              }).toThrowError('Invalid expression');
        });
    });
}); 