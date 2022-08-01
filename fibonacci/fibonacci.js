const fibonacci = function(n) {
    if (n < 0) {
        return "OOPS"
    }
    if (typeof n == "string") {

     n = Number(n);

    }
let fibonaccinumber = [];
fibonaccinumber[0] = 1;
fibonaccinumber[1] = 1;

for (let i = 2; i < n; i++) {
    fibonaccinumber[i] = fibonaccinumber[i-1] + fibonaccinumber[i-2];
    
}
return fibonaccinumber[n-1];
};


module.exports = fibonacci;
