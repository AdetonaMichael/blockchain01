// creating the blockchain constructor function
function Blockchain(){
    // the blocks that we create/mine will be stored in this array
    this.chain = [];
    // this is where we would place all our new transaction before they are placed into a block and mined
    this.pendingTransactions = [];
}

// creating a function that handles the creation of new blocks
Blockchain.prototype.createNewBlock = function(nonce, previousBlockHash, hash){
    // creating a new Block object
    const newBlock = {
        index:this.chain.length+1,
        timestamp:Date.now(),
        transactions: this.pendingTransactions,
        // a nonce is a prof of work. in our case it's a number
        nonce: nonce,
        // the hash will be all transaction passed to a hashing function
        hash: hash,
        previousBlockHash: previousBlockHash
    };
    this.pendingTransactions = [];
    this.chain.push(newBlock);
     
    return newBlock;
}

// creating function to getLast Block
Blockchain.prototype.getLastBlock = function (){
    return this.chain[this.chain.length-1];
}

//creating a new Transaction
Blockchain.prototype.createNewTransaction = function(amount, sender, recipient){
    const newTransaction  ={
        amount = amount,
        sender = sender,
        recipient = recipient,
    }
    this.pendingTransactions.push(newTransaction)
    return this.getLastBlock()['index']+1;
}