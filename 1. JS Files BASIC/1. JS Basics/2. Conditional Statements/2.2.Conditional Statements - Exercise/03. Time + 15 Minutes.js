function time15Minutes(data) {

    let hours = Number(data[0]);
    let minutes = Number(data[1]);

    let newMinutes = minutes + 15
    
    
    if (newMinutes > 59){
        newMinutes = newMinutes - 60
        hours++
    }
    if (newMinutes <= 9){
        newMinutes = `0${newMinutes}`
    }

    if (hours > 23) {
        hours = Math.floor(0 + (minutes/60))
    }

console.log(`${hours}:${newMinutes}`)
  
}
time15Minutes(["17", "42"])

/*Да се напише функция, която получава час и минути от 24-часово денонощие и изчислява колко ще е часът след 15 минути. 
Резултатът да се отпечата във формат часове:минути. Часовете винаги са между 0 и 23, а минутите винаги са между 0 и 59. 
Часовете се изписват с една или две цифри. Минутите се изписват винаги с по две цифри, с водеща нула, когато е необходимо. */



