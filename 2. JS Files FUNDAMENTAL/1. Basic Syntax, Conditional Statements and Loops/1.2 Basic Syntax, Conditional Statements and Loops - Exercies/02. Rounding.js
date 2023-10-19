function rounding (numb, parse){

    if(parse > 15){
        parse = 15;
    }

    console.log(parseFloat(numb.toFixed(parse)));

}
rounding(10.15,3)