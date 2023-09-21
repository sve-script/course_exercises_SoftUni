function timePlus15Minutes (input){

    let hours = Number(input[0]);
    let minutes = Number(input[1]);

    let totalMinutes = hours * 60 + minutes + 15; // общо минути
    let newHours = Math.floor(totalMinutes / 60) // общ брой часове в тези минути
    let newMinutes = Math.floor(totalMinutes / newHours) // общ 

    if (newMinutes>59){
        newMinutes = newMinutes % 60
    }
    if (newHours >23){
        newHours = 0
    }





    console.log(newHours);


}

timePlus15Minutes([23, 55])