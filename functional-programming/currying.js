const currying = (fn) => {
    return function curried(...args) {
        return args.length >= fn.length
            ? fn(...args)
            : (...curryArgs) => curried(...args, ...curryArgs);
    }
}

const sum = (a, c, b) => a + c + b;
const curriedSum = currying(sum);
curriedSum(1)(1)(1)
curriedSum(1, 1)(1)
curriedSum(1, 1, 1)

module.exports = {
    currying,
}
