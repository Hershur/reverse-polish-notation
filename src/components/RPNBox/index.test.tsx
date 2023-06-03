import { fireEvent, render } from "@testing-library/react";
import RPNBox from "./index";

describe('Testing RPN box', () => {

    test('Should render input, h1, div elements', () => {
        const { container, getByTestId, getByLabelText } = render(<RPNBox />);

        const input = getByTestId('rpnInput') as HTMLInputElement;
        const inputLabel = getByLabelText('Enter reverse polish notation');
        const heading = getByTestId('heading');
        const resultBox = getByTestId('resultBox');

        
        expect(container).toContainElement(input);
        expect(container).toContainElement(inputLabel);
        
        expect(container).toContainElement(heading);
        expect(heading).toHaveTextContent('Reverse Polish Notation Calculator');
        
        expect(container).toContainElement(resultBox);
        expect(resultBox).toBeEmptyDOMElement();
    });

    test('Should display appropriate results on input change', () => {
        const { getByTestId } = render(<RPNBox />);

        const input = getByTestId('rpnInput') as HTMLInputElement;
        const resultBox = getByTestId('resultBox');

        fireEvent.input(input, {target: {value: '5 3 2 + * √'}});

        
        expect(input.value).toBe('5 3 2 + * √');
        expect(resultBox).toHaveTextContent('5');
    });
    
    test('Should display invalid expression for invalid rpn', () => {
        const { getByTestId } = render(<RPNBox />);

        const input = getByTestId('rpnInput') as HTMLInputElement;
        const resultBox = getByTestId('resultBox');

        fireEvent.input(input, {target: {value: '7 6 * +'}});

        
        expect(input.value).toBe('7 6 * +');
        expect(resultBox).toHaveTextContent('Invalid expression');
    });

});

