function cats(array) {

    while (array.length > 0) {

        let fullCommand = array.shift().split(` `);
        let name = fullCommand[0];
        let age = fullCommand[1];

        class Cat {

            constructor(name, age) {
                this.name = name
                this.age = age
            }
        }
        function meow() {
            return "Meow"
        }
        let obj = new Cat(name, age);
        console.log(`${obj.name}, age ${obj.age} says ${meow()}`);
    }
}
cats(['Mellow 2', 'Tom 5'])