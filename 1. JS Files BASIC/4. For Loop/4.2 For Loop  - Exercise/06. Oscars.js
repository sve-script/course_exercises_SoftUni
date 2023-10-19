function oscars(input) {

    let actor = input[0];
    let startPoints = Number(input[1]);
    let totalRefers = Number(input[2]);

    refersName = "";
    points = 0 + startPoints;
   

    for(let index = 3; index < input.length; index++){
        refersName = input[index];
        index++
        points += input[index] * refersName.length / 2
        
        if (points > 1250.5){
            console.log(`Congratulations, ${actor} got a nominee for leading role with ${points.toFixed(1)}!`);
            break;
        }
    }

    if (points < 1250.5){
        console.log(`Sorry, ${actor} you need ${(1250.5 - points).toFixed(1)} more!`)
    }


}
oscars(["Sandra Bullock",
"340",
"5",
"Robert De Niro",
"50",
"Julia Roberts",
"40.5",
"Daniel Day-Lewis",
"39.4",
"Nicolas Cage",
"29.9",
"Stoyanka Mutafova",
"33"])
