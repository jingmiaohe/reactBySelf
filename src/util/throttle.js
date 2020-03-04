const throttle = function (delay,fn) {
    let timer;
    return function(...args) {
        if (!timer) {
            timer = setTimeout(() => {
                fn(...args);
                clearTimeout(timer);
                timer = null;
            }, delay)
        }
    }
}
const deBounce = function (delay, fn) {
    let timer;
    return function(...args) {
        console.log('deBounce')
        console.log(args)
        if (timer) {
            clearTimeout(timer);
            timer = null;
        }
        console.log('执行保存')
        timer = setTimeout(() => {
            fn(...args);
            clearTimeout(timer);
            timer = null;
        }, delay)
    }
}
export {throttle, deBounce}