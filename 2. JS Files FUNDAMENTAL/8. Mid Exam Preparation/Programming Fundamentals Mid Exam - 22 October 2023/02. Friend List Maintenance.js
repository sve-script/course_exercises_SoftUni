function friendListMaintenance(array) {

    let friends = array.shift().split(`, `)

    let blacklistedCount = 0;
    let lostCount = 0;

    while (array.length > 0) {

        let fullCommand = array.shift().split(` `);
        let command = fullCommand[0];
        if (command == "Report") {
            break;
        }
        switch (command) {
            case "Blacklist":
                blacklist(friends, fullCommand[1])
                break;
            case "Error":
                error(friends, fullCommand[1])
                break;
            case "Change":
                change(friends, fullCommand[1], fullCommand[2])
                break;
        }
    }

    function blacklist(arr, name) {
        let check = arr.includes(name);
        if (check) {
            blacklistedCount++
            let indexOf = friends.indexOf(name);
            friends[indexOf] = `Blacklisted`;
            return console.log(`${name} was blacklisted.`);
        } else {
            return console.log(`${name} was not found.`);
        }
    }

    function error(arr, indx) {
        if (indx < 0 || indx >= arr.length) {
            return;
        }

        let check = arr[indx];
        if (check == "Blacklisted" || check == "Lost") {
            return;
        }
        console.log(`${arr[indx]} was lost due to an error.`);
        lostCount++
        return arr[indx] = `Lost`;

    }

    function change(arr, indx, newName) {
        if (indx < 0 || indx >= arr.length) {
            return;
        }

        let currentName = arr[indx];
        console.log(`${currentName} changed his username to ${newName}.`);
        return arr[indx] = newName;
    }


    console.log(`Blacklisted names: ${blacklistedCount}`);
    console.log(`Lost names: ${lostCount}`);
    console.log(friends.join(` `));
}


friendListMaintenance(["Mike, John, Eddie, William", "Error 3", "Error 3", "Change 0 Mike123", "Report"])