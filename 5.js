// 5.Write a function that takes an array of objects with a name and age property and
//returns a new array with only the objects where the age is greater than a given
//amount. Use the filter method to accomplish this.

arr=[{
    name:"saravanan",
    age:22
},{
    name:"ragul",
    age:21
},{
    name:"ramya",
    age:19
},
{
    name:"gokul",
    age:18
},{
    name:"saravanan",
    age:22
},]

given_age=18

result=arr.filter(x=>{
    if(x.age>given_age){
        return x
    }
})
console.log(result)