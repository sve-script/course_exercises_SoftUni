function commonElements(arr1, arr2) {


    for (let i = 0; i < arr1.length; i++) {

        for (let j = 0; j < arr1.length; j++) {

            if (arr1[i]===arr2[j]){
                console.log(arr1[i]);
            }
        }
    }
}
commonElements(['Hey', 'hello', 2, 4, 'Peter', 'e'], ['Petar', 10, 'hey', 4, 'hello', '2']);

//second with for of and .includes() - ( el is elements)

function commonEls(arr1,arr2){
    for (let el of arr1){
        if(arr2.includes(el)){
            console.log(el);
        }
    }
}

commonElements(['Hey', 'hello', 2, 4, 'Peter', 'e'], ['Petar', 10, 'hey', 4, 'hello', '2']);