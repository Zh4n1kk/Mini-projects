import {table, TableUserConfig} from 'table';
import readline from 'readline-sync'

type Movie = {
    name: string
    ratings: {
        [key: string]: number
    }
}

let movies: Movie[] = [
    {
        'name': 'Interstellar',
        'ratings':{
            'Jhon':10,
            'Jack':3,
        }
    },
    {
      'name':'Avengers: Infinity War',
      'ratings':{
          'Jack':9,
          'Jane':10,       
      },
    },
]

function updateList() {
    const movieList = [
        ['Movie Name', 'Average rating'],
    ];
    movies.forEach(movie => {
        let avgRating:number = 0;
        for (const reviewer in movie.ratings) {
            avgRating += movie.ratings[reviewer]
        }
        let count = avgRating / Object.keys(movie.ratings).length
        let avgRatingResult =  count > 0 ? count : `Haven't rated yet`
        movieList.push([movie.name, avgRatingResult.toString()]);
    });
    console.log(table(movieList))
}

function addMovie() {
    const title = readline.question('Enter a title to add movie: ')
    const find = movies.find(movie => movie.name.toLowerCase() === title.toLowerCase()) 
    if (find) {
        console.log('Movie with this name already exists')
        return;
    }
    movies.push({
        'name': title,
        'ratings': {},
    })
    console.log(`Movie ${title} successfully added!`)
}

function rateMovie() {
    const title = readline.question('Find movie: ')
    const find = movies.find(movie => movie.name.toLowerCase() === title.toLowerCase()) 
    console.log(find)
    if (find) {
        const username = readline.question('Enter your name: ').trim()
        if (!username || username.length > 15 || /\d/.test(username)) {
            console.log('Incorrect name')
            return;
        }

        const rate = Number(readline.question('Enter rating 0-10: '))
        if (rate < 0 || rate > 10) {
            console.log('Wrong number')
            return;
        } else if (rate >= 0 || rate <= 10) {
            find.ratings[username] = rate
            console.log(`added new rating | ${username}: ${rate}`)
        }
    } else {
        console.log('This movie is not on our list')
    }
}

function deleteMovie() {
    const askUser = readline.question('Whick movie you want to delete?: ')
    const find = movies.findIndex(movie => movie.name.toLowerCase() === askUser.toLowerCase()) 
    
    if (find === -1) {
        console.log(`Movie not found`)
        return;   
    }

    movies.splice(find,1)[0] 
} 

function findMovie() {
    const askUser = readline.question('Whick movie you want to find?: ')
    const find = movies.findIndex(movie => movie.name.toLowerCase() === askUser.toLowerCase()) 
    const movie = movies[find]
    const rating = Object.entries(movie.ratings)

    const movieTable = [
        ['Movie title','Reviwer','Rating']
    ]
        for (const [reviewer,ratings] of rating) {
            movieTable.push([movie.name,reviewer,JSON.stringify(ratings)]);
        }

        console.log(table(movieTable))
    };

while(true){
    const askUser = readline.question('Enter command (add, delete, list, rate, find, stop): ').toLowerCase()

    if (askUser === 'list') {
        updateList()
    } else if (askUser === 'add') {
        addMovie()
    } else if (askUser === 'delete') {
        deleteMovie()
    } else if (askUser === 'rate') {
        rateMovie()
    } else if (askUser === 'find') {
        findMovie()
    } else if (askUser === 'stop') {
        break;
    } else {
        console.log('wrong')
    }
}
