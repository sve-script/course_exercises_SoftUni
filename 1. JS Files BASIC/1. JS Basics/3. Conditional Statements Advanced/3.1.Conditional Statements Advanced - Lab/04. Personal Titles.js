function personalTitles(input) {

    let age = Number(input[0]);
    let sex = input[1];

   if (age >= 16){
        if (sex === `m`){
            console.log (`Mr.`)
        } else 
            console.log(`Ms.`)
   } else {
        if (sex ===`m`){
            console.log (`Master`)
        } else 
            console.log (`Miss`)
   }
}
personalTitles(["15", "f"])


/* Да се напише функция, която получава възраст (реално число) и пол ('m' или 'f'), 
въведени от потребителя, и отпечатва обръщение измежду следните:

•	"Mr." – мъж (пол 'm') на 16 или повече години
•	"Master" – момче (пол 'm') под 16 години
•	"Ms." – жена (пол 'f') на 16 или повече години
•	"Miss" – момиче (пол 'f') под 16 години */
