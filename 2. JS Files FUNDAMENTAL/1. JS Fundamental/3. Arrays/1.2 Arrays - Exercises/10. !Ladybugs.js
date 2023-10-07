function ladybugs(arr) {

    let fieldArr = [];

    for (let field = 0; field < arr[0]; field++) {
        fieldArr.push(0)
    }

    let notEmptyPlaces = arr[1].toString();

    let index = 0;

    for (let i = 0; i < notEmptyPlaces.length; i += 2) {
        fieldArr[index] = (notEmptyPlaces[i])
        index++

    }

    let flyingCommandArr = [];

    arr.splice(0, 2);
    let arrToString = arr.toString()

    for (let j = 2; j < arrToString.length; j++) {
        if (arr[j] !== " " && arr[j] !== ","){
            flyingCommandArr.push(arrToString[j])
        }
    }

    debugger
    console.log(arrToString);
}

ladybugs([3, '0 1', '0 right 1', '2 right 1'])
//

// 3 брой полета  тоест - [0,1,2]
// 0 1 -- кои позиции от полето са заети и кои не са. 0 празна - 1 заета.
// 0 right 1 - боболечката е на 0 индекс и трябва да отиде на 1  ( т.к едно е зает трябва да кацне на 2)
//