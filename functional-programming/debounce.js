const debounce = (fn, delay = 300) => {
    let handler;
    return (...args) => {
        clearTimeout(handler);
        handler = setTimeout(() => { fn(...args) }, delay);
    };
}

 const processChange = debounce(() => console.log('debounced'));
 window.addEventListener("scroll", processChange);

module.exports = {
    debounce,
}

