function circleArea(params) {

    console.log(typeof params === 'number' ? (Math.PI * (params ** 2)).toFixed(2) : `We can not calculate the circle area, because we receive a ${typeof params}.`);
}
circleArea(5)