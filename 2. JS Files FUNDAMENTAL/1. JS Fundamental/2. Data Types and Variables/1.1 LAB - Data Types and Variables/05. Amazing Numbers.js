function amazingNumbers (numb){

    let numbAsString = numb.toString();
    let sumOfNumb = 0;

    for(let i = 0; i < numbAsString.length; i++){

        let x = numbAsString[i];
        sumOfNumb += Number(x);

    }

    let foundNine = sumOfNumb.toString().includes(9);

    console.log(`${numb} Amazing? ${foundNine === true ? "True" : "False"}`);

}
amazingNumbers(583472)