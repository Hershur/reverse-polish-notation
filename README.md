# Reverse Polish Notation Calculator
## How to use

RPN is basically a type of notation where operators ('-', '+', '*') come before operands (1,5,7). For example 5 3 + equals 8. Learn more about RPN [here](https://en.wikipedia.org/wiki/Reverse_Polish_notation).

## How to run
```bash
 RUN npm install -- to install dependencies
 RUN npm run dev -- to start app locally
```

### Examples
-- For instance, in RPN, the expression `5 3 4 + *` is equivalent to `5 * (3 + 4)` in normal infix notation which equates to `35`

-- Fractional numbers are also allowed e.g `1/2 1/2 +` equals `1`

-- Single arguments functions like square roots is also possible e.g `16 √` equals `4`. 
`5 3 2 + * √` equivalent to `√(5 * (3 + 2))` returns `5`.

NB: 
For Mac -- press `option + v` to get the `√` symbol
For Windows -- Turn on Num lock on your keyboard
Check if you have a soft numeric keypad on your keyboard (tiny numbers written under letters U,I,O)
Then hit simultaneously `Alt + 2 + 5 + 1 ` ====> `Alt + K + I + J`
