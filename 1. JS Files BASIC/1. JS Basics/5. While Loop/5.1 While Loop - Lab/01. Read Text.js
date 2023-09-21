function readText(input) {
    let index = 0;
    let name = input[index];

    while(name !== "Stop"){
        index++
        console.log(name);
        name = input[index]

    }

}

readText(["Nakov",
    "SoftUni",
    "Sofia",
    "Bulgaria",
    "SomeText",
    "Stop",
    "AfterStop",
    "Europe",
    "HelloWorld"])