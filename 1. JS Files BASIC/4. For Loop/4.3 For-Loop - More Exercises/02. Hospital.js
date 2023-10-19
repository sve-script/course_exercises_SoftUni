function hospital(input) {
    let index = 0;
    let totalDays = Number(input[index]);
    index++

    let days = 1;
    let doctors = 7;
    let totalPatient = 0;
    let patientPerDay = 0;
    let totalPatientForAllDays = 0;

    let diff = 0; 

    for (let i = 1; i < input.length; i++) {
        totalPatient += Number(input[i]);
        patientPerDay = Number(input[i]);
        if (patientPerDay<doctors){
            totalPatientForAllDays +=Number(input[i]);
        }else {
            totalPatientForAllDays += doctors
        }
        diff = totalPatient - totalPatientForAllDays

        days++
        if (days % 3 == 0) {
            if (diff > totalPatientForAllDays) {
                doctors++
            }
        }

    }

    console.log(`Treated patients: ${totalPatientForAllDays}.`);
    console.log(`Untreated patients: ${diff}.`);

}

hospital([4, 7, 27, 9, 1])



