function extract(params) {

    let newArr = params.reduce((acc, value) => {
        if (value > acc) {
            acc += value;
        }
    })

    console.log(newArr);


}
extract([1,
    3,
    8,
    4,
    10,
    12,
    3,
    2,
    24]
)