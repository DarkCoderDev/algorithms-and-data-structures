const object = {
    a: {
        b: {
            m: 'm',
            c: {
                f: 'f'
            }
        }
    },
    s: {
        l: 'l'
    }
}

const getObjValue = (object, path) => {
    let memoizedValue = null;
    let result = null;
    let idx = 0;

    const keys = path.split('.');

    while (idx < keys.length) {
        const key = keys[idx];

        if (memoizedValue) {
            const value = memoizedValue[key];
            if (!value) return null;
            result = memoizedValue = value;
        } else {
            const value = object[key];
            if (!value) return null
            result = memoizedValue = value;
        }

        ++idx;
    }

    return result;
}

console.log(getObjValue(object, 'a.b.m')); // "m"
console.log(getObjValue(object, 'a')); // object
console.log(getObjValue(object, 'a.xm')); // null

