function complete(n) {

    function loadingBar(percent) {

        let tick = percent / 10;

        let screenLoad = "";

        for (let i = 0; i < 10; i++) {

            if (tick !== 0) {
                screenLoad += `%`;
                tick -= 1;
            } else {
                screenLoad += `.`;
            }
        }
        //console.log(`[${screenLoad}]`);
        return `[${screenLoad}]`;

    }
    //loadingBar(n)

    function loadingScreen(taskBar) {
        let valueToReturn = `${taskBar}%`
        //console.log(valueToReturn);
        return valueToReturn;
    }
    //loadingScreen(n)


    function completeOrLoading(SteelLoadingOrComplete) {

        let compOrLoad = "";

        if (SteelLoadingOrComplete !== 100) {
            compOrLoad = `Still loading...`
        } else {
            compOrLoad = `Complete!`
        }
        //console.log(compOrLoad);
        return compOrLoad
    }
    //completeOrLoading(n);



    if (n == 100) {
        console.log(`${loadingScreen(n)} ${completeOrLoading(n)}`);
        console.log(loadingBar(n));
    } else {
        console.log(`${loadingScreen(n)} ${loadingBar(n)}`);
        console.log(completeOrLoading(n));
    }
}


complete(10)