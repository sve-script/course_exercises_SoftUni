function sortByTwoCriteria(array) {

    let sort = array.sort((a, b) => a.length - b.length || a.localeCompare(b))

    console.log(sort.join(`\n`));

}
sortByTwoCriteria(['test', 'Deny', 'omen', `Default`])