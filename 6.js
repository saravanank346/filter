// 6. Write a function that takes an array of objects with a name and hobbies property
//and returns a new array with only the objects where the hobbies include a given
//hobby. Use the filter method to accomplish this.


arr=[{
    name:"saravanan",
    hobbies:"sleeping"
},{
    name:"ragul",
    hobbies:"playing"
},{
    name:"vignesh",
    hobbies:"coding"
},{
    name:"kishore",
    hobbies:"coding"
},]

out=[]
result=arr.filter(x=>{
    if(!(x.hobbies in out)){
        out[x.hobbies]=[]
    }
    out[x.hobbies].push(x)
})

console.log(out)