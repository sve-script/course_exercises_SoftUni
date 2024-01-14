function evenPositionElements(params) {

    let even = [];


    for (let i = 0; i < params.length; i += 2) {
        even.push(params[i])
    }

    console.log(even.join(` `));

}
evenPositionElements(['20', '30', '40', '50', '60'])




function evenPositionElementsV1(arr) {


    console.log(arr.filter((el, i) => i % 2).join(" "));


}
evenPositionElementsV1([10, 20, 30, 40, 50, 60])