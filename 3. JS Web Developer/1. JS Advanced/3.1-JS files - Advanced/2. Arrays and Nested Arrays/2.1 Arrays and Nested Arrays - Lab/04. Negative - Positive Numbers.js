function negativePositive(params) {

    let value = [];

    params.forEach(el => {
        if (el < 0) {
            value.unshift(el)
        } else {
            value.push(el)
        }
    })

    console.log(value.join(`\n`))
}
negativePositive([3, -2, 0, -1])