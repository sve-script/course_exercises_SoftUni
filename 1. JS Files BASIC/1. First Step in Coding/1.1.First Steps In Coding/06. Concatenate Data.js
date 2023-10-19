function asl(input) {

    let firstName = input[0];
    let lastName = input[1];
    let age = Number(input[2]);
    let town = input[3];

    let fullinfo = (`You are ${firstName} ${lastName}, a ${age}-yars old person from ${town}`)
    //You are Svetoslav Ilev, a 32-years old person from Stara Zagora.
    console.log(fullinfo);

}

asl (["Svetoslav", "Ilev", "32", "Stara Zagora" ])