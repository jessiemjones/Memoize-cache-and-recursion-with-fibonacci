//Recursive
function fibonacci(n){
    if (n === 0){
        return 0
    }else if (n === 1){
        return 1
    }else {
        // console.log('loading...')
        return fibonacci(n-1)+fibonacci(n-2)
    }
}
// console.log(fibonacci(42))



// memoized solution
const memoize = (fn) => {
    let cache = {}
    return (...args) => {
        let n = args[0]
        if (n in cache){
            console.log('getting', n , 'from cache')
            return cache[n]
        }else {
            console.log('calculating result', n)
            let result = fn(n)
            cache[n] = result
            return result
        }
    }
}

const fib = memoize((x) => {
    if (x < 2){
        return 1
    }else {
        return fib(x - 1) + fib(x - 2)
    }
})
// console.log(fib(560))

//cached
let cached = {}
function cachedFibonacci(n) {
    if(n === 0){
        return 0;
    }else if (n === 1){
        return 1;
    }
    if (n in cached){
        console.log('fetching')
        return cached[n]
    }
    console.log('calulating')
    result = cachedFibonacci(n - 1) + cachedFibonacci(n - 2);
    cached[n] = result;
    return result
}

console.log(cachedFibonacci(40))