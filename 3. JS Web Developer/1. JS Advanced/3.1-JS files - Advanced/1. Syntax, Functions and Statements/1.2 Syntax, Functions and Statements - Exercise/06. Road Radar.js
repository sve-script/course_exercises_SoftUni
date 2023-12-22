function roadRider(kmH, area) {

    let speedLimit = 0;

    let status;
    let difference = 0;

    let flag = false;

    switch (area) {
        case "motorway":
            speedLimit = 130
            difference = kmH - speedLimit;
            break;
        case "interstate":
            speedLimit = 90
            difference = kmH - speedLimit;
            break;
        case "city":
            speedLimit = 50;
            difference = kmH - speedLimit;
            break;
        case "residential":
            speedLimit = 20;
            difference = kmH - speedLimit;
            break;
    }

    if (difference <= 0) {
        console.log(`Driving ${kmH} km/h in a ${speedLimit} zone`);
    } else {
        flag = true;
    }

    if (flag) {
        if (difference <= 20) {
            status = `speeding`;
        } else if (difference <= 40) {
            status = `excessive speeding`
        } else {
            status = `reckless driving`
        }

        console.log(`The speed is ${Math.abs(difference)} km/h faster than the allowed speed of ${speedLimit} - ${status}`);
    }

}
roadRider(130, 'motorway')