function christmasGifts (input){

    let index = 0;
    let command = input[index];
    index++

    let age = 0;

    let kids = 0;
    let adults = 0;

    while(command !== "Christmas"){
        age = Number(command);
        if(age <= 16){
            kids++
        }else {
            adults++
        }
        command = input[index];
        index++
    }

    console.log(`Number of adults: ${adults}`);
    console.log(`Number of kids: ${kids}`);
    console.log(`Money for toys: ${kids * 5}`);
    console.log(`Money for sweaters: ${adults * 15}`);

}
christmasGifts(["18",
"20",
"48",
"45",
"56",
"37",
"12",
"14",
"Christmas"])


