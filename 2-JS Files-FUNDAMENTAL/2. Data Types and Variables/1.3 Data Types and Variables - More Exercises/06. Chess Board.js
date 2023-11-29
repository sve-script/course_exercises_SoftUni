function chessBoard(numb) {

    let color = "";
    let count = 0;

    console.log(`<div class="chessboard">`);

    for (let i = 0; i < numb; i++) {
        console.log(`<div>`);
        for (let j = 0; j < numb; j++) {
            let color = "";
            if (count % 2 === 0) {
                if (j % 2 === 0) {
                    color = `black`
                } else {
                    color = `white`
                }
            }else {
                if(j % 2 === 0){
                    color = `white`;
                }else {
                    color = `black`
                }
                
            }
            console.log(`<span class="${color}"></span>`);
        }
        count++
        console.log(`</div>`);
    }

    console.log(`</div>`);
}
chessBoard(6)