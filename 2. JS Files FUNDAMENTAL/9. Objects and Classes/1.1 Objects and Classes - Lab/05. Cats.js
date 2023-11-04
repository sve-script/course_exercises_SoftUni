function cats(array) {

    class Cat {
        constructor(name, age) {
            this.name = name;
            this.age = age;
        }
        meow() {
            return `Meow`
        }
    }

    for (let key of array) {
        let [name, age] = key.split(` `);

        let catObj = new Cat(name, age)
        console.log(`${catObj.name}, age ${catObj.age} says ${catObj.meow()}`);
    }
}

cats(['Candy 1', 'Poppy 3', 'Nyx 2'])