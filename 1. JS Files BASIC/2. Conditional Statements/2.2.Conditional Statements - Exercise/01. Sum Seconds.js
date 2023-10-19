function sumSeconds(input) {

    let firstAtleth = Number(input[0]);
    let secondAtleth = Number(input[1]);
    let thirdAtleth = Number(input[2]);

    let fullTime = firstAtleth + secondAtleth + thirdAtleth;

    let hours = Math.trunc(fullTime / 60);
    let minutes = fullTime - (hours * 60)

    if (minutes <= 9) {

        console.log(`${hours}:0${minutes}`)
    } else
        console.log(`${hours}:${minutes}`)



}

sumSeconds(["15", "455", "44"])




/*Трима спортни състезатели финишират за някакъв брой секунди (между 1 и 50). 
Да се напише функция, която получава три аргумента - секунди и пресмята сумарното им време във формат "минути:секунди". 
Секундите да се изведат с водеща нула (2  "02", 7  "07", 35  "35"). */




