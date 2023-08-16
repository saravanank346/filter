//2.Write a function that takes an array of objects with a price property and returns a
//new array with only the objects that have a price less than a given amount. Use
//the filter method to accomplish this.


arr=[
    {
        price:200
    }, 
    {
        price:2000
    },
    {
        price:1000
    }, 
    {
        price:1050
    }
]
let given_amount=2000
result=arr.filter(x=>x.price < given_amount)
console.log(result)