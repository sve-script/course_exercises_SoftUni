function printEveryNElement(params, n) {


    const value = params.filter((el, i) => i % n == 0);
    return value;
}
printEveryNElement(['dsa',
    'asd',
    'test',
    'tset'],
    2

)