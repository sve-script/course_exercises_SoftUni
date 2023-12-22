function timeToWalk(steps, length, speed) {

    let university = steps * length;

    let breaksMinutes = Math.floor(university / 1000 / 0.5)

    let secondsInMetres = (speed * 1000) / 3600;

    let totalTimeInSeconds = Math.ceil(university / secondsInMetres);

    let s = 0;
    let m = 0;
    let h = 0;

    for (let i = 1; i <= totalTimeInSeconds; i++) {
        s++;

        if (s > 59) {
            m++
            s = 0
        }
        if (m > 59) {
            h++
            s = 0;
            m = 0;
        }
    }

    m += breaksMinutes;

    if (h < 10) {
        h = `0${h}`;
    }
    if (m < 10) {
        m = `0${m}`
    }
    if (s < 10) {
        s = `0${s}`;
    }

    console.log(`${h}:${m}:${s}`);

}
timeToWalk(4000, 1, 4)