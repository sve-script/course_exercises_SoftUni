function footballLeague(input) {

    let index = 0;
    let stationCapacity = Number(input[index]);
    index++
    let fens = Number(input[index]);
    index++

    let A = 0;
    let B = 0;
    let V = 0;
    let G = 0;


    for (let i = index; i <input.length; i++) {
        let sector = input[i]
        switch (sector) {
            case "A": A++
                break;
            case "B": B++
                break;
            case "V": V++
                break;
            case "G": G++
                break;
        }
    }

    console.log(`${(A / fens * 100).toFixed(2)}%`);
    console.log(`${(B / fens * 100).toFixed(2)}%`);
    console.log(`${(V / fens * 100).toFixed(2)}%`);
    console.log(`${(G / fens * 100).toFixed(2)}%`);
    console.log(`${(fens / stationCapacity * 100).toFixed(2)}%`);


}

footballLeague([
    76
    , 10
    , "A"
    , "V"
    , "V"
    , "V"
    , "G"
    , "B"
    , "A"
    , "V"
    , "B"
    , "B"]);