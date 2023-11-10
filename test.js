function test() {

    let person = {};

    let sve = `name`

    person[sve] = [1, 2, 3, 4];

    console.log(person[sve]);

    person[sve].push(...[1, 2, 3, 4])
    console.log(person);
}
test()