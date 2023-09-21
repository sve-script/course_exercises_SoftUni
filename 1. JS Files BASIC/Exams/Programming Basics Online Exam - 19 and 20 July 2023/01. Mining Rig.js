function miningRig (input){

    let GPU = Number(input[0]);
    let transition = Number(input[1]);

    let ElectricityGPUperDay = Number(input[2]);
    let profit = Number(input[3]);

    let fullGPUPrice = GPU * 13;
    let fullTransitionPrice = transition * 13 + 1000;
    let totalPrice = fullGPUPrice + fullTransitionPrice

    let ProfitPerDay = profit - ElectricityGPUperDay

    let totalProfitPerDay = ProfitPerDay * 13;

    let money = totalPrice / totalProfitPerDay

    console.log(totalPrice);
    console.log(Math.ceil(money));

}
miningRig(["700",
"15",
"0.20",
"2"])
