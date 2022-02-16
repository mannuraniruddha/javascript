// Function inside a function
// Closoures

const multi = (a, b) => a * b;
const add = (a, b) => a + b;
const sub = (a ,b) => a - b;

const calc1 = (a, b) => {
    return (operator) => {
        return operator(a, b);
    };
};

console.log(calc1(2, 3)(multi));
console.log(calc1(2, 3) (add));
console.log(calc1(2, 3) (sub));


const calc2 = (a, b) => {
    return (operator1) => {
        const result1 = operator1(a, b);
        return(x, y) => {
            const result2 = operator1(x, y);
            return (operator2) =>{
                return operator2(result1, result2);
            }
        }
    }
}

console.log(calc2(2, 3)(add) (5, 5)(multi));
console.log(calc2(2, 3)(add) (5, 5)(sub));
console.log(calc2(2, 3)(multi) (5, 5)(add));
