//var filmes = require('./filmes')
//filmes.push('O mascara','Os parças')
//console.log(filmes)


const filmes = require('./filmes')
const series = require('./series')

filmes.push('thor')
series.pop()

function maisFilmes(){
    filmes.push('pantera')
    return filmes;
}
 

 
 console.log(maisFilmes())
 console.log(filmes);
 console.log(series);