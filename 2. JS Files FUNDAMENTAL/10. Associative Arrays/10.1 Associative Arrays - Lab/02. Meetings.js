function meeting(meetingDays) {

    let meetings = {};

    let days = meetingDays.map((item) => item.split(` `))

    for (let [key, value] of days) {
        if (meetings.hasOwnProperty(key)) {
            console.log(`Conflict on ${key}!`);
            continue;
        }
        meetings[key] = value
        console.log(`Scheduled for ${key}`);

    }

    for (let keys in meetings) {
        console.log(`${keys} -> ${meetings[keys]}`);
    }
}
meeting(['Friday Bob',
    'Saturday Ted',
    'Monday Bill',
    'Monday John',
    'Wednesday George']

)