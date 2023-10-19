function PCStore(input) {

    let CPU = Number(input[0]);
    let GPU = Number(input[1]);
    let RAM = Number(input[2]);
    let nRAM = Number(input[3]);
    let discount = Number(input[4]);

    let CPUPrice = CPU - (CPU * discount);
    let GPUPrice = GPU - (GPU * discount);
    let RAMPrice = RAM * nRAM

    let sum = (CPUPrice + GPUPrice + RAMPrice) * 1.57;
 

    console.log(`Money needed - ${sum.toFixed(2)} leva.`);
}
PCStore(["1200",
"850",
"120",
"4",
"0.1"])

