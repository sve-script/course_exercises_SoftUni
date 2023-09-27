function dayOfWeek (dayAsNumb){

    if(dayAsNumb < 1 || dayAsNumb > 7){
        console.log(`Invalid day!`);
    }else {
        let days = [`Monday`, `Tuesday`, `Wednesday`, `Thursday`, `Friday`, `Saturday`, `Sunday`];
        console.log(days[dayAsNumb-1]);
    }

}
dayOfWeek(1)