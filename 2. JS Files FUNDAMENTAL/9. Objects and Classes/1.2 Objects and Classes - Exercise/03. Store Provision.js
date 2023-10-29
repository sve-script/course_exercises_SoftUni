function storeProvision(stock, orders) {

    let stockAndOrders = stock.concat(orders);

    let products = {};

    for (let i = 0, y = i + 1; i < stockAndOrders.length; i += 2, y += 2) {
        let product = stockAndOrders[i];
        let quantity = Number(stockAndOrders[y]);


        products[product] = product;

    }
    console.log(products);

}
storeProvision(
    ['Chips', '5', 'CocaCola', '9', 'Bananas', '14', 'Pasta', '4', 'Beer', '2'],
    ['Flour', '44', 'Oil', '12', 'Pasta', '7', 'Tomatoes', '70', 'Bananas', '30']
)