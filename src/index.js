const Pessoa = require('./models/Pessoa');
const Singleton = require('./models/Singleton');

const gerenciador = new Singleton();

// criando pessoa
const p1 = new Pessoa(1, "João", 20);

// clonando (PROTOTYPE)
const p2 = p1.clone();
p2.nome = "Maria";

// usando singleton
gerenciador.adicionar(p1);
gerenciador.adicionar(p2);

console.log(gerenciador.listar());