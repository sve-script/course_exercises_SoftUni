function addAndRemoveElements(params) {

    const arr = [];
    let currentN = 0;

    for (let el of params) {
        currentN++
        if (el == "add") {
            arr.push(currentN);
        } else {
            arr.pop()
        }
    }

    arr.length > 0 ? console.log(arr.join("\n")) : console.log("Empty")
}
addAndRemoveElements(['remove',
    'remove',
    'remove']

)