function towns(array) {

    for (let data of array) {

        let splitData = data.split(` | `);

        let townObj = {
            town: splitData[0],
            latitude: Number(splitData[1]).toFixed(2),
            longitude: Number(splitData[2]).toFixed(2)
        };

        console.log(townObj);
    }
}



towns(['Sofia | 42.696552 | 23.32601',
    'Beijing | 39.913818 | 116.363625']
)