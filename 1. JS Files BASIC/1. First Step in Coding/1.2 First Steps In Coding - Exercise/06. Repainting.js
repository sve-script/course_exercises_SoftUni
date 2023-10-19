function repainting(input) {

    let nylon = (Number(input[0]) + 2) * 1.5;
    let paint = (Number(input[1]) * 1.10) * 14.50;
    let thinner = Number(input[2]) * 5;
    let totalMats = nylon + paint + thinner + 0.40;
    let workerPrice = (totalMats * 0.3) * Number(input[3]); 
    let finalPrice = totalMats + workerPrice;

    console.log(finalPrice);

}

repainting(["10 ","11 ","4 ","8 "])