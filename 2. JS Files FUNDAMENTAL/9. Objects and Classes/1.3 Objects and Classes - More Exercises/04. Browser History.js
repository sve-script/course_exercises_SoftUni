function browserHistory(browserInfo, array) {


    for (let el of array) {
        let [command, site] = el.split(` `);

        if (command !== `Clear`) {
            browserInfo[`Browser Logs`].push(el)
        }

        switch (command) {
            case `Open`:
                open(browserInfo, site)
                continue;
            case `Close`:
                close(browserInfo, site)
                break;

            case `Clear`:
                clear(browserInfo)
                continue;

        }

    }


    for (let key in browserInfo) {
        if (key == `Browser Name`) {
            console.log(`${browserInfo[key]}`);
        } else {
            console.log(`${key}: ${browserInfo[key].join(`, `)}`);
        }
    }

    function open(info, site) {

        return info[`Open Tabs`].push(site)
    }

    function close(info, site) {

        let openedSites = info[`Open Tabs`];
        let indx = openedSites.indexOf(site);

        if (indx !== -1) {
            info[`Recently Closed`].push(site)
            return openedSites.splice(indx, 1)
        }
    }

    function clear(info) {

        info[`Open Tabs`] = [];
        info[`Recently Closed`] = [];
        info[`Browser Logs`] = [];
    }



}
browserHistory({
    "Browser Name": "Google Chrome",
    "Open Tabs": ["asd", "a", "Googlbe Translate"],
    "Recently Closed": ["Yahoo", "Gmail"],
    "Browser Logs": ["Open YouTube", "Open Yahoo", "Open Google Translate", "Close Yahoo", "Open Gmail", "Close Gmail", "Close Gmail", "Open Facebook"]
},
    ["Close Facebook", "Open StackOverFlow", "Open Google"]

)