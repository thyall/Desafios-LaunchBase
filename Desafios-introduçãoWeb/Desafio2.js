const empresa = {
    nome: 'Rocketseat',
    cor: 'Roxo',
    foco: 'Programação',
    endereco: {
        rua: 'Rua guilherme jambela',
        numero: 50
    }
};

const programador = {
    nome: 'Thyall',
    idade: 24,
    tecnologia: [
        {
             nome: 'C++',
             especialidade: 'Desktop'
        },

        {
            nome: 'Python',
            especialidade: 'Data Science'
        }
    ]
}

console.log(`O nome da empresa é ${empresa.nome} e seu endereço é ${empresa.endereco.rua} numero ${empresa.endereco.numero}`);

console.log(`O usuario ${programador.nome} tem ${programador.idade} e usa a tecnologia ${programador.tecnologia[0].nome} com especialdiade em ${programador.tecnologia[1].especialidade}`)