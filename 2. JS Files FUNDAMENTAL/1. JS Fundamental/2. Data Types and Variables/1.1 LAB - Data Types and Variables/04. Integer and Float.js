function integerAndFloat(x,y,z){

    let sum = x+y+z;

    console.log(`${sum} - ${sum % 1 == 0 ? "Integer" : "Float"}`);

}
integerAndFloat(9, 100, 2)