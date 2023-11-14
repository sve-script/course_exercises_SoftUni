function myFunction(obj, b) {

    console.log(obj.b !== null && obj.b !== undefined);
}
myFunction({ x: 'a', b: 'b', z: undefined }, 'z')