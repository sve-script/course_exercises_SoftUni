function circleAreaAndPerimeter(input){
    let r = Number(input[0]);

    console.log((Math.PI*Math.pow(r,2)).toFixed(2));
    console.log((2*Math.PI*r).toFixed(2));

}
circleAreaAndPerimeter([3])