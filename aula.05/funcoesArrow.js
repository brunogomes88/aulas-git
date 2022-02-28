//function digaOla() {
  //  return 'olá!'
//};


//const digaOla = function() {
  //  return 'Olá'
//}
//const digaOla = () => 'olá'

let horaAtual = () => {
    let data = new Date();
    return data.getHours() + ':' + data.getMinutes();
}
console.log(horaAtual());