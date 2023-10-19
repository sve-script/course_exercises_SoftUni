function everest(input) {
    let index = 0;
    let command = input[index];
    index++

    let days = 1;
    let startingPoint = 5364;

    while (command !== "END") {
        if (days > 5) {
            console.log("Failed!");
            console.log(startingPoint);
            break;
        }
        switch(command){
            case "Yes":
                days++
                break;
            case "No":
                command = input[index];
                index++
            default :
                startingPoint += Number(command)
        }
        command = input[index];
        index++;

        if (startingPoint >= 8848){
            console.log(`Goal reached for ${days} days!`);
            break;
        }
    }

    if(command == "END"){
        if(startingPoint < 8848){
            console.log("Failed!");
            console.log(startingPoint);
        }
    }

}
everest(["Yes",
"1254",
"Yes",
"1402",
"No",
"250",
"Yes",
"635"])









