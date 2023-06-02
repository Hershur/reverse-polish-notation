import { useEffect, useState } from "react";
import { calculateRPN } from "../utils";


export default function useComputeRPN(expression: string) {
    const  [result, setResult] = useState<string>();

    useEffect(() => {
        if(expression){
            try {
                const result = calculateRPN(expression);
                setResult(result.toString());
            } catch (error) {
                if (error instanceof Error) {
                    setResult(error.message);
                }
            }
        }
    }, [expression]);

    return { result };
}