// 7. Write a function that takes an array of objects with a name and grades property
//and returns a new array with only the objects where the average grade is greater
//than a given amount. Use the filter method to accomplish this.

arr=[{
    name:"saravanan",
    grade:"A"
},{
    name:"ragul",
    grade:"C"

},{
    name:"gokul",
    grade:"A"

},{
    name:"aravid",
    grade:"C"

},{
    name:"vignesh",
    grade:"D"

},]
given_grade="B"
result=arr.filter(x=>{
    if(x.grade>given_grade){
        return x
    }
})
console.log(result)

