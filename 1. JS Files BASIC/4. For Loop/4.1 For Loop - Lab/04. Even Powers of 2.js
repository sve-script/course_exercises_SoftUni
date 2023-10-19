function evenPowersof2(input) {
    let numb = Number(input[0]);

    for (i = 0; i <= numb; i += 2){
        let result = Math.pow(2,i)
        console.log(result);
    }

}

evenPowersof2(["7"]);









2
/*Да се напише функция, която получава число n и печата четните степени на  ≤ 2n: 20, 22, 24, 26, …, 2n. */