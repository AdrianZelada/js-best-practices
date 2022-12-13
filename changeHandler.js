module.exports = {
    coins: {
        'p': 1,
        'n': 5,
        'd': 10,
        'q': 25
    },

    getAmount: function(coinType) {
        if(this.coins[coinType]) {
            return this.coins[coinType]
        } else {throw new Error('Unrecognized coin ' + coinType);}        
    },

    convertToChange(amount) {
        const coinsKey = 'qdnp';
        let coin = 0;
        const result = [];
        while (amount > 0) {
            if(amount >= this.coins[coinsKey[coin]]) {
                amount -= this.coins[coinsKey[coin]];
                result.push(coinsKey[coin]);
            } else {
                coin++;
            }
        }
        return result;
    }
};