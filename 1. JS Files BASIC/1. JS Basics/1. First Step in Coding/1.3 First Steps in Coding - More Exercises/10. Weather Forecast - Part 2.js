function weatherForecast(input){
    let weather = Number(input[0]);

    if (weather >=5 && weather <=11.9){
        console.log(`Cold`);
    }else if (weather >=12 && weather <=14.9){
        console.log(`Cool`);
    }else if (weather >=15 && weather <=20){
        console.log(`Mild`);
    }else if (weather >=20.1 && weather <=25.0){
        console.log(`Warm`);
    }else if (weather >=26 && weather<=35){
        console.log(`Hot`);
    }else {
        console.log(`unknown`);
    }

}

weatherForecast([23])