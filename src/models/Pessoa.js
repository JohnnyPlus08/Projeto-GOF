class Pessoa {
    constructor(id, nome, idade) {
        this.id = id;
        this.nome = nome;
        this.idade = idade;
    }

    clone() {
        return new Pessoa(this.id, this.nome, this.idade);
    }
}

module.exports = Pessoa;