class Heroi {
  constructor(nome, idade, tipo) {
    this.nome = nome;
    this.idade = idade;
    this.tipo = tipo;
  }

  atacar() {
    let ataque;

    switch (this.tipo) {
      case "mago":
        ataque = "usou magia";
        break;
      case "guerreiro":
        ataque = "usou espada";
        break;
      case "monge":
        ataque = "usou artes marciais";
        break;
      case "ninja":
        ataque = "usou shuriken";
        break;
      default:
        ataque = "usou um ataque desconhecido";
    }

    console.log(`o ${Eron} ${monge} atacou usando ${ataque}`);
  }
}

// Criando uma instância de Heroi para Eron
const eron = new Heroi("Eron", 28, "monge");
eron.atacar(); // Saída esperada: "o Eron monge atacou usando artes marciais"
