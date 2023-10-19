function workingHours(input){

    let time = Number(input[0]);
    let days = input[1];
    
    if (time >= 10 && time <=18 && days !==`Sunday`){
        console.log(`open`);
    } else {
        console.log(`closed`);
    }
}

workingHours(["11",
"Sunday"])



/*Да се напише функция, която получава час от денонощието(цяло число) и ден от седмицата(текст) и \
проверява дали офисът на фирма е отворен, като работното време на офисът е от 10-18 часа, от понеделник до събота включително. */