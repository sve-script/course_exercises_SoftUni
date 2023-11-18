function browserHistory(browserInfo, array) {


    for (let el of array) {
        let [command, site] = el.split(` `);

        if (command !== `Clear` && command == "Open") {
            browserInfo[`Browser Logs`].push(el)
        }


        switch (command) {
            case `Open`:
                open(browserInfo, site)
                continue;
            case `Close`:
                close(browserInfo, site, el)
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

    function close(info, site, el) {

        let openedSites = info[`Open Tabs`];
        let indx = openedSites.indexOf(site);

        if (indx !== -1) {
            info[`Recently Closed`].push(site);
            info[`Browser Logs`].push(el)
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
    "Open Tabs": [],
    "Recently Closed": [],
    "Browser Logs": []
},
    ["Close Facebook", "Open StackOverFlow", "Open Google", "Clear History and Cache", "Open Google", "Close Facebook"]

)