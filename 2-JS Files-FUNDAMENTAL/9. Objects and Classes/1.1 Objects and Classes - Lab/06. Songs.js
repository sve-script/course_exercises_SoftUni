function songs(array) {

    let songsNumber = array.shift();

    class Songs {
        constructor(typeList, name, time) {
            this.typeList = typeList
            this.name = name
            this.time = time
        }

    }

    let type = array.pop();

    for (let songsInfo of array) {
        let [typeList, name, time] = songsInfo.split("_");
        let obj = new Songs(typeList, name, time);
        if (obj.typeList == type || type == "all") {
            console.log(obj.name);
        }
    }
}
songs([2,
    'like_Replay_3:15',
    'ban_Photoshop_3:48',
    'all']


)