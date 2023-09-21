function rightPlace(string,char,compareWord){

    let editedWord = string.replace("_",char)

    console.log(editedWord == compareWord ? "Matched" : "Not Matched");
    
}
rightPlace('Str_ng', 'I', 'Strong')