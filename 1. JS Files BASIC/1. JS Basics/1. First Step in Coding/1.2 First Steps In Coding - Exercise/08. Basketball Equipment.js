function basketballEquipment(input) {

    let training = Number(input[0]);
    let sneekers = training * 0.60;
    let equipment = sneekers * 0.80;
    let ball = equipment / 4
    let Access = ball / 5 

    let fullPrice = training + sneekers + equipment + ball + Access


    console.log(fullPrice);

}

basketballEquipment(["365"])