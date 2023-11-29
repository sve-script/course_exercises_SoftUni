function factorialDivision(n1, n2) {

    let fac = n => (n == 1 ? 1 : n * fac(n - 1));
    let recOne = fac(n1);
    let recTwo = fac(n2);

    return (recOne / recTwo).toFixed(2);

}