const path = require('path');
const pathFile = path.resolve(__dirname, 'teste.json');

const writeDir = require('./writeFiles');
const readDir = require('./readFile');
const pessoas = [
    {nome:'Samuel'},
    {nome:'Samuel clone'},
    {nome:'Samuel clone v1.0.0'},
    {nome:'Samuel clone v1.1.0'},
];
const json = JSON.stringify(pessoas, '', 2)
writeDir(pathFile,json);

async function readFiles(pathFs){
    const data = await readDir(pathFs);
    renderData(data);
}

function renderData(dados){
    dados = JSON.parse(dados);
   dados.array.forEach(element => {
        console.log(element.nome)
   });
    console.log(dados);
}
readDir(pathFile);
