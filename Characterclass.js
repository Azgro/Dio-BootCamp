class characterClass{

    constructor(nome, idade, tipo){
        this.nome = nome
        this.idade = idade
        this.tipo = tipo
    }

    chamaAtaque() {

        let ataque = ""
       
        switch (this.tipo) {
            case "guerreiro":
                ataque = "espada";
                break;
            case "mago":
                ataque = "magia";
                break;
            case "ninja":
                ataque = "shuriken";
                break;
            case "monge":
                ataque = "artes marciais"
                break;
            default:
                ataque = "desconhecido";
                break;

        }
        
        console.log(`O ${this.tipo} atacou usando ${ataque}`);
    }


}

const guerreiro = new characterClass("Azgro", 25, "guerreiro")
guerreiro.chamaAtaque();
