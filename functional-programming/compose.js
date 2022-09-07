const compose = (...fns) => (value) => fns.reduce((result, fn) => fn(result), value);

const sum = compose(x => x + 10, x => x + 20)(30);

module.exports = {
    compose,
}
