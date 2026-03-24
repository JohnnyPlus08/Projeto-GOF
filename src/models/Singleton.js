class Singleton {
    constructor() {
        if (Singleton.instance) {
            return Singleton.instance;
        }

        this.lista = [];
        Singleton.instance = this;
    }

    adicionar(item) {
        this.lista.push(item);
    }

    listar() {
        return this.lista;
    }
}

module.exports = Singleton;