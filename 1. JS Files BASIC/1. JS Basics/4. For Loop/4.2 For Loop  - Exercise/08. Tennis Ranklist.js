function tennisRaklist(input) {
    let tournaments = Number(input[0]);
    let startingPoint = Number(input[1]);

    let totalPoints = 0 + startingPoint;
    let position = "";
    let wins = 0

    for (let index = 2; index < input.length; index++) {
        position = input[index];
        switch(position){
            case `W` : totalPoints+=2000
            wins++
                break;
            case `F` : totalPoints +=1200
                break;
            case `SF`: totalPoints+=720
                break;
        }

    }
    console.log(`Final points: ${totalPoints}`);
    console.log(`Average points: ${Math.floor((totalPoints-startingPoint)/tournaments)}`);
    console.log(`${(wins/tournaments*100).toFixed(2)}%`);
}
tennisRaklist(["5",
    "1400",
    "F",
    "SF",
    "W",
    "W",
    "SF"])
