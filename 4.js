//4. Write a function that takes an array of objects with a category property and
//returns a new array with only the unique categories. Use the filter and map
//methods to accomplish this

arr=[
    {
        name:"saravanan",
        mob_brand:"redmi"
    },
    {
        name:"ragul",
        mob_brand:"oppo"
    },
    {
        name:"vignesh",
        mob_brand:"redmi"
    },
    {
        name:"kishore",
        mob_brand:"vivo"
    },
]
obj=[]
result= arr.filter(x=>{
    if(!(arr.mob_brand in obj)){
        obj[arr.mob_brand]=[]
        
    }
    obj.push(x)
})
console.log(obj)

