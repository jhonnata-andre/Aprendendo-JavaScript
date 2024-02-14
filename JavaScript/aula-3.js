const PedroIdade = 19;
const JoãoIdade = 17;
const Nome = 'Jhonnata';

let PodeEntrar = false;

if (PedroIdade >= 18){
    PodeEntrar = true;
} else{
    PodeEntrar = false;
}

console.log('Pedro pode entrar?', PodeEntrar);

if (JoãoIdade >= 18){
    PodeEntrar = true;
} else{
    PodeEntrar = false;
}

console.log('João pode entrar?', PodeEntrar);

if (Nome == 'Jhonnata'){
    PodeEntrar = true;
} else{
    PodeEntrar = false;
}

console.log('Jhonnata pode entrar?', PodeEntrar);
