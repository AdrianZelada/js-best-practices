module.exports = {
    products: [
        {
          name: 'Skittles',
          price: 85,
          id: 'A1'
        }
    ],
    
    getProducts: function() { 
        return this.products;
    },
    
    getProduct: function(productId) {
        var product = this.products.find(function(p) { return p.id === productId; });
        return product;
    },  
        
};