/* Crie uma classe generica que represente um herói de uma aventura e que possua as seguintes propriedades:
- nome
- idade
- tipo (ex: guerreiro, mago, monge, ninja )
*/

/*além disso, deve ter um método chamado atacar que deve atender os seguientes requisitos:

- exibir a mensagem: "o {tipo} atacou usando {ataque}")
- aonde o {tipo} deve ser concatenando o tipo que está na propriedade da classe
- e no {ataque} deve seguir uma descrição diferente conforme o tipo, seguindo a tabela abaixo:

se mago -> no ataque exibir (usou magia)
se guerreiro -> no ataque exibir (usou espada)
se monge -> no ataque exibir (usou artes marciais)
se ninja -> no ataque exibir (usou shuriken)
*/

class Heroi {
    constructor(nome, idade, tipo) {
        this.nome = nome;
        this.idade = idade;
        this.tipo = tipo;
    }

   
    atacar() {
        let ataque;
        switch (this.tipo) {
            case 'mago':
                ataque = 'usou magia';
                break;
            case 'guerreiro':
                ataque = 'usou espada';
                break;
            case 'monge':
                ataque = 'usou artes marciais';
                break;
            case 'ninja':
                ataque = 'usou shuriken';
                break;
            default:
                ataque = 'usou ataques variados';
        }
        return `O ${this.tipo} ${this.nome} atacou usando ${ataque}`;
    }
}


function exibirMensagem(mensagem) {
    console.log(mensagem);
}

function jogo() {
    const herois = [
        { nome: 'Darius', idade: 35, tipo: 'guerreiro' },
        { nome: 'Veigar', idade: 78, tipo: 'mago' },
        { nome: 'Lee Sin', idade: 32, tipo: 'monge' },
        { nome: 'Zed', idade: 27, tipo: 'ninja' }
    ];

    for (let heroi of herois) {
        const novoHeroi = new Heroi(heroi.nome, heroi.idade, heroi.tipo);
        const mensagem = novoHeroi.atacar();
        exibirMensagem(mensagem);
    }
}

jogo();
