function storeProvision(stock, orders) {

    let stockAndOrders = stock.concat(orders);

    let products = {};

    for (let i = 0; i < stock.length; i += 2) {
        let productName = stock[i];
        let quantity = Number(stock[i + 1]);

        products[productName] = quantity;
    }

    for (let j = 0; j < orders.length; j += 2) {
        let orderProducts = orders[j];
        let orderQuantity = Number(orders[j + 1]);


        if (orderProducts in products) {
            products[orderProducts] += orderQuantity;
        } else {
            products[orderProducts] = orderQuantity;
        }
    }

    for (let key in products) {
        console.log(`${key} -> ${products[key]}`)
    }
}
storeProvision(
    ["Chips", "5", "CocaCola", "9", "Bananas", "14", "Pasta", "4", "Beer", "2"],
    ["Flour", "44", "Oil", "12", "Pasta", "7", "Tomatoes", "70", "Bananas", "30"]
)
