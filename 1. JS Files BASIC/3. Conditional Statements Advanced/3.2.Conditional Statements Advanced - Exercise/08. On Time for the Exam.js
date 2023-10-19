function onTimeForTheExam(input) {
    let examHours = Number(input[0]);
    let examMinutes = Number(input[1]);
    let hoursArrive = Number(input[2]);
    let minutesArrive = Number(input[3]);

    let examTime = examHours * 60 + examMinutes
    let timeArrive = hoursArrive * 60 + minutesArrive
    let diff = examTime - timeArrive


    if (diff <= 30 && diff >= 0) {
        console.log(`On Time`)
    } else if (diff < 0) {
        console.log(`Late`)
    } else {
        console.log(`Early`)
    }

    if (diff !== 0) {
        let finalTime = Math.abs(examTime - timeArrive)
        let hTime = Math.abs(Math.trunc(diff / 60));
        let mTime = Math.abs(finalTime % 60)

        if (examTime > timeArrive) {
            if (finalTime <= 59) {
                console.log(`${diff} minutes before the start`);
            } else {
                if (mTime <= 9) {
                    mTime = `0${mTime}`
                }
                console.log(`${hTime}:${mTime} hours before the start`);
            }
        } else {
            if (finalTime <= 59) {
                console.log(`${Math.abs(diff)} minutes after the start`);
            } else {
                if (mTime <= 9) {
                    mTime = `0${mTime}`
                }
                console.log(`${hTime}:${mTime} hours after the start`);
            }

        }
    }

}
onTimeForTheExam(["14",
"00",
"13",
"55"])





/*Студент трябва да отиде на изпит в определен час (например в 9:30 часа). 
Той идва в изпитната зала в даден час на пристигане (например 9:40). 
Счита се, че студентът е дошъл навреме, ако е пристигнал в часа на изпита или до половин час преди това. 
Ако е пристигнал по-рано повече от 30 минути, той е подранил. 
Ако е дошъл след часа на изпита, той е закъснял. 
Напишете функция, която получава време на изпит и време на пристигане и отпечатва дали студентът е дошъл навреме, дали е подранил или е закъснял и с колко часа или минути е подранил или закъснял.
Вход
Приемат се 4 аргумента:
•	Първият съдържа час на изпита – цяло число от 0 до 23.
•	Вторият съдържа минута на изпита – цяло число от 0 до 59.
•	Третият съдържа час на пристигане – цяло число от 0 до 23.
•	Четвъртият съдържа минута на пристигане – цяло число от 0 до 59.
Изход
На първият ред отпечатайте:
•	"Late", ако студентът пристига по-късно от часа на изпита.
•	"On time", ако студентът пристига точно в часа на изпита или до 30 минути по-рано.
•	"Early", ако студентът пристига повече от 30 минути преди часа на изпита.
Ако студентът пристига с поне минута разлика от часа на изпита, отпечатайте на следващия ред:
•	"mm minutes before the start" за идване по-рано с по-малко от 1.
•	"hh:mm hours before the start" за подраняване с 1 час или повече. Минутите винаги печатайте с 2 цифри, например "1:05".
•	 "mm minutes after the start" за закъснение под час.
•	"hh:mm hours after the start" за закъснение от 1 час или повече. Минутите винаги печатайте с 2 цифри, например "1:03".
 */