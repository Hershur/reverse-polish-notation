import { useEffect, useState } from "react";
import { calculateRPN } from "../utils";


export default function useComputeRPN(expression: string) {
    const  [result, setResult] = useState<number | string>();

    useEffect(() => {
        try {
            const rpnExpression = expression.trim().split(' ');
            const result = calculateRPN(rpnExpression as unknown as string);
            setResult(result);
        } catch (error) {
            if (error instanceof Error) {
                setResult(error.message);
            }
        }
    }, [expression]);

    return { result };
}