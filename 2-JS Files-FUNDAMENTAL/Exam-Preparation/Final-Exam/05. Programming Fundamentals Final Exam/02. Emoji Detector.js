function emojiDetector([input]) {

    let coolThreshold = /\d/g;
    let emoji = /(\:{2}|\*{2})[A-Z][a-z]{2,}\1/g;

    let coolNumbs = input.match(coolThreshold).map(x => Number(x)).reduce((acc, value) => acc * value);
    console.log(`Cool threshold: ${coolNumbs}`);

    let coolEmoji = input.match(emoji);
    console.log(`${coolEmoji.length} emojis found in the text. The cool ones are:`);


    if (coolEmoji) {

        for (let el of coolEmoji) {
            let sum = 0;

            let word = el.slice(2, el.length - 2);

            for (let emo of word) {

                sum += emo.charCodeAt();
            }

            if (sum >= coolNumbs) {
                console.log(el);
            }
        }
    }
}
emojiDetector((["5, 4, 3, 2, 1, go! The 1-th consecutive banana-eating contest has begun! ::Joy: *Banana** :Wink:: *Vali** :valid_emoji:"]))

