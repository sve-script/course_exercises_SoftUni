function login(input) {

    let index = 0;
    let username = input[index];
    index++;

    let password = input[index];
    index++;

    let counter = 0;

    let splitUsername = username.split(``);
    let reverseUsername = splitUsername.reverse();
    let correctPassword = reverseUsername.join(``);

    while(true){

        counter++;

        if(password == correctPassword){
            console.log(`User ${username} logged in.`);
            break;
        }else {
            if(counter !== 4){
                console.log(`Incorrect password. Try again.`);
            }

        }

        if(counter == 4){
            console.log(`User ${username} blocked!`);
            break;
        }

        password = input[index];
        index++
    }

}

login(['Acer','login','go','let me in','recA'])
