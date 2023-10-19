function clock() {

    for (h = 0; h <= 23; h++) {
        for (m = 0; m <= 59; m++) {
            let hToPrint = h;
            let mToPrint = m;
            if (h < 10){
                hToPrint = "0" + h;
            }
            if (m < 10){
                mToPrint = "0" + m;
            }
            console.log(`${hToPrint}:${mToPrint}`);
        }
    }
}
clock()