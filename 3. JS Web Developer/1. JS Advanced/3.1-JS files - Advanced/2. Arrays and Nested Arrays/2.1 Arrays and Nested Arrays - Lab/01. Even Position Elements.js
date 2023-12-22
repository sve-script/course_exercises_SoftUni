function EvenPositionElements(params) {

    let even = [];


    for (let i = 0; i < params.length; i += 2) {
        even.push(params[i])
    }

    console.log(even.join(` `));

}
EvenPositionElements(['20', '30', '40', '50', '60'])