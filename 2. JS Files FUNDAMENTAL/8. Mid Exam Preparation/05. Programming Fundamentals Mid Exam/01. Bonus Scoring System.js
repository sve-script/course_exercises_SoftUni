function bonusScoringSystem(array) {

    let numbArray = array.map(Number)

    let students = numbArray.shift();
    let lectures = numbArray.shift();
    let additionalBonus = numbArray.shift();

    let numbLectures = Math.max(...numbArray);
    let maxBonus = numbLectures / lectures * (5 + additionalBonus);


    console.log(`Max Bonus: ${Math.round(maxBonus)}.`);
    console.log(`The student has attended ${numbLectures} lectures.`);

}
bonusScoringSystem([
    '5', '0', '0',
    '12', '25', '24',
    '16', '0'
]

)
