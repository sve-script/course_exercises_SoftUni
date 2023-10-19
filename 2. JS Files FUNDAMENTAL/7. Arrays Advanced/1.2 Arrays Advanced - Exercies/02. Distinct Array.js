function distinctArray(array) {

    for (let i = 0; i < array.length; i++) {

        let searingElement = array.indexOf(array[i], i + 1);

        if (searingElement > 0) {
            array.splice(searingElement, 1);
            i = -1
        }
    }
    console.log(array.join(` `));
}
distinctArray([7, 7, 8, 9, 7, 2, 3, 4, 1, 2])