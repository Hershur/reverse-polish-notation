import { useState } from "react";
import TextInput from "../shared/TextInput";
import useComputeRPN from "../../hooks/useComputeRPN";

export default function RPNBox() {
    const [rpnInput, setRPNInput] = useState<string>('');
    const { result } = useComputeRPN(rpnInput);

    return (
        <>
            <h1>Reverse Polish Notation Calculator</h1>

            <TextInput 
                value={rpnInput}
                label="Enter reverse polish notation"
                name="rpn"
                onChange={(e) => setRPNInput(e.currentTarget.value)}
            />


            <div className="result-box">
                {result}
            </div>
        </>
    )
}