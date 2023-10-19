function moving(input) {

    let index = 0;
    let width = Number(input[index]);
    index++;
    let length = Number(input[index]);
    index++;
    let hight = Number(input[index]);
    index++;

    let houseCubic = width * length * hight

    let command = input[index];
    index++

    let carton = 0;
    let cartonTotal = 0;

    while (command !== "Done") {
        if (cartonTotal > houseCubic) {
            console.log(`No more free space! You need ${cartonTotal - houseCubic} Cubic meters more.`);
            break;
        }
        carton = Number(command);
        cartonTotal += carton
        command = input[index];
        index++

    }

    if (command == "Done") {
        console.log(`${houseCubic - cartonTotal} Cubic meters left.`);
    }

}
moving(["10", 
"10",
"2",
"20",
"20",
"20",
"20",
"122"])

