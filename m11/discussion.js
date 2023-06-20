// Create documents to use for this discussion
db.fruits.insertMany([
    {
        name: "apple",
        color: "red",
        stock: 20,
        price: 40,
        supplier_id: 1,
        onSale: true,
        origin: ["Philippines", "United States"]
    },
    {
        name: "Banana",
        color: "Yellow",
        stock: 15,
        price: 20,
        supplier_id: 2,
        onSale: true,
        origin: ["Philippines", "Ecuador"]
    },
    {
        name: "kiwi",
        color: "green",
        stock: 25,
        price: 50,
        supplier_id: 1,
        onSale: true,
        origin: ["United States", "New Zealand"]
    },
    {
        name: "mango",
        color: "yellow",
        stock: 10,
        price: 120,
        supplier_id: 2,
        onSale: false,
        origin: ["Philippines", "India"]
    }
]);