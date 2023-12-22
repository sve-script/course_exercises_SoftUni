function pieceOfPie(params, flavors1, flavors2) {

    let startingIndex = params.indexOf(flavors1);
    let endingIndex = params.lastIndexOf(flavors2);

    let newArr = [];

    for (let i = startingIndex; i <= endingIndex; i++) {
        newArr.push(params[i])
    }
    return newArr;
}
console.log(pieceOfPie(['Apple Crisp',
    'Mississippi Mud Pie',
    'Pot Pie',
    'Steak and Cheese Pie',
    'Butter Chicken Pie',
    'Smoked Fish Pie'],
    'Pot Pie',
    'Smoked Fish Pie'

));