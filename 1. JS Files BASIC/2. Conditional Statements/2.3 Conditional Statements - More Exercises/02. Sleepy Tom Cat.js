function sleepyTomCat(input) {
    let restDay = Number(input[0]); // почивни дни
    let workDay = 365 - restDay     // работни дни

    let playTimeInRestDay = restDay * 127 // време в което играят в почивните дни
    let playTimeInWorkDay = workDay * 63 // време в което играят в работни дни

    let fullPlayTime = playTimeInRestDay + playTimeInWorkDay // тотал време за игри през цялата година

    let thomasRestTime = 30000 - fullPlayTime

    h = Math.abs(Math.floor(thomasRestTime / 60))
    m = Math.abs(thomasRestTime - h * 60)
    if (m > 59) {
        m = m % 60
        h--
    }

    if (thomasRestTime > 0) {
        console.log(`Tom sleeps well`);
        console.log(`${h} hours and ${m} minutes less for play`);
    } else {
        console.log(`Tom will run away`)
        console.log(`${h} hours and ${m} minutes more for play`);

    }
}
sleepyTomCat([20])