function solve(n, l) {

    let includ = n.includes(5) // - дали 5 се садържа в масива - true;
    let indexOF = n.indexOf(3) // садържа ли се и на кой индекс точно числото 3. КЛ 4 - да на ч индекс.
    let sliced = n.slice(2, 4) // прави нов масив с елементите вътре - от кой (2), до кой (4) но 4 не се включва;
    let spliced = n.splice(2, 4) // взима елементи от масива, от кой елемент почва и колко общо да вземе.
    let poped = n.pop() // премахва последния елемент от масива. в скобите нищо не се пише
    let pushed = l.push(1, 2, 4);
    console.log(l);

    console.log(n);
    console.log(`${includ} - includes`);
    console.log(`-------------------------`);
    console.log(`${indexOF} - indexOf`);
    console.log(`-------------------------`);
    console.log(`${sliced} - slice`);
    console.log(`-------------------------`);
    console.log(`${spliced} - splice`);
    console.log(`-------------------------`);
    console.log(poped);
    console.log(`-------------------------`);
    console.log(pushed);
    console.log(`-------------------------`);


}

solve([1, 5, 6, 1, 3, 2, 4, 5], [1, 5, 6, 1, 3, 2, 4, 5])


function func(arr) {

    function all(array) {

        console.log(array);
    }
    all(arr)

    let arrow = arr.map(x => x + 1)

    console.log(`${arrow} - arrow `);


}

func([1, 5, 1, 3, 4, 5, 1])