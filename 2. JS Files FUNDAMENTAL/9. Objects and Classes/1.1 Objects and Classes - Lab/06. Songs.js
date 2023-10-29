function songs(array) {

    let songsName = array.shift();

    while (array > 0) {
        let fullCommand = array.shift().split("_");
        let type = fullCommand[0];
        let song = fullCommand[1];
        let time = fullCommand[2];
    }


}
songs([3,
    'favourite_DownTown_3:14',
    'favourite_Kiss_4:16',
    'favourite_Smooth Criminal_4:01',
    'favourite']
)