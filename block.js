const SHA256 = require('crypto-js/sha256');

class Block {
    //Index = Identificador de la posicion del bloque en la cadena
    //Data = El contenido del bloque
    //previousHash == Valosr del bloque anterior de la cadena
    constructor(index, data, previousHash=''){
        this.index=index;
        this.data=data;
        this.previousHash= previousHash;
        this.date = new Date();
        this.nonce = 0;
        this.hash = this.createdHash();
    }

    createdHash(){
        return SHA256(`${this.index} ${this.data} ${this.date} ${this.nonce}`).toString();
    }

    mine(difficulty){
        while(this.hash.startsWith(difficulty)){
            this.nonce++;
            this.hash=this.createdHash();
        }
    }

    //Cifrado
    //Simetrico y asimetrico

    // a SHA256 = x
    // a SHA256 = x

    //NPM = Node Package manager

}

module.exports = Block;