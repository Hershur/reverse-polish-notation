import { render } from "@testing-library/react";
import TextInput from "./TextInput";

describe('Testing RPN box', () => {

    test('Should render input element', () => {

        const { getByTestId } = render(
            <TextInput 
                value="15"
                label="Enter reverse polish notation"
                name="rpn"
                onChange={() => null }
            />
        );

        const input = getByTestId('rpnInput') as HTMLInputElement;

        expect(input).toHaveAttribute('name', 'rpn');
        expect(input).toHaveAttribute('value', '15');
    });

});

