function extractFile(file) {

    let arr = file.split(`\\`).pop();

    let lastDot = arr.lastIndexOf(`.`);

    console.log(`File name: ${arr.slice(0, lastDot)}`);
    console.log(`File extension: ${arr.slice(lastDot + 1)}`);


}
extractFile('C:\\Projects\\Data-Structures\\LinkedList.cs')