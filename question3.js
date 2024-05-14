/*
3. Sum
Imagine you have a shopping cart with various items. Each item has a price, and you want to know the total cost of everything in the cart.
e.g. item=[{price: 10.99}, {price: 5.99}, {price: 29.99}]


*/

item=[{price: 10.99}, {price: 5.99}, {price: 29.99}]

function sum(items){
    let totalPrice = 0
    for(let i of items){
        totalPrice = totalPrice + i.price
    }

    return console.log("Total Price is: " +  totalPrice)

}
sum(item)
