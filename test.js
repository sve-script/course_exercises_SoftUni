function myFunction(obj, b) {

    class Person {
        constructor(age,name,city){
            this.age = age;
            this.name = name;
            this.city = city

        }

        myCity(){
            console.log(`${this.city} is the best City in the word`);
        }
    }

    let personOne = new Person(31,`sve`, `stara zagora`)

    
    personOne.myCity()

}
myFunction([1, 2, 3], [3, 2, 1])