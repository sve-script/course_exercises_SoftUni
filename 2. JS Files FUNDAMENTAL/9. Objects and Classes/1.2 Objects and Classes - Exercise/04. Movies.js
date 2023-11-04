function movies(movies) {

    let fullMoviesInfo = [];

    while (movies.length > 0) {

        let movieInfo = movies.shift();

        if (movieInfo.includes("addMovie")) {
            addMovie(movieInfo)
        } else if (movieInfo.includes("directedBy")) {
            directedBy(movieInfo)
        } else {
            onDate(movieInfo)
        }
    }

    for (let movie of fullMoviesInfo) {
        if (movie.name && movie.director && movie.date) {
            console.log(JSON.stringify(movie));
        }
    }

    function addMovie(movieInfos) {

        let splitCommand = movieInfos.split("addMovie ")
        let movieToAdd = splitCommand[1];

        //можеше да ползвам деструктивен масив !!/и за останалите функции/


        let movieObj = { name: movieToAdd };
        return fullMoviesInfo.push(movieObj)
    }

    function directedBy(movieInfos) {

        let splitCommand = movieInfos.split(" directedBy ");
        let movie = splitCommand[0];
        let director = splitCommand[1];

        // деструктивен вариант 
        // let [movie,director] = movieinfo.split(" directedBy ")
        for (let obj of fullMoviesInfo) {
            if (obj[`name`] == movie) {
                return obj.director = director;

            }
        }
        return;
    }

    function onDate(movieInfos) {

        let splitCommand = movieInfos.split(" onDate ");
        let movie = splitCommand[0];
        let date = splitCommand[1];

        for (let obj of fullMoviesInfo) {
            if (obj[`name`] == movie) {
                return obj.date = date;
            }
        }
        return

    }
}
movies([
    'addMovie Fast and Furious',
    'addMovie Godfather',
    'Inception directedBy Christopher Nolan',
    'Godfather directedBy Francis Ford Coppola',
    'Godfather onDate 29.07.2018',
    'Fast and Furious onDate 30.07.2018',
    'Batman onDate 01.08.2018',
    'Fast and Furious directedBy Rob Cohen'
]


)