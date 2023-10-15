let words = ['nest', 'Eggs', 'bite', 'Grip', 'jAw'];
words.sort((a, b) => a.localeCompare(b));
console.log(words);


words.sort((a, b) => a.length - b.length);
console.log(words);