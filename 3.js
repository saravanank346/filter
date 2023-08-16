//3.Write a function that takes an array of strings and returns a new array with only
//the strings that have a length greater than a given amount. Use the filter method
//to accomplish this

arr=["saravanan","ragul","kishore","vignesh","arun","ab"]
given_length=7
result=arr.filter(x=>{
    len=x.length
    if(len>given_length){
        return x
    }
})
console.log(result)
