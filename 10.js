// 10.Write a function that takes an array of strings and returns a new array with only
//the strings that are palindromes. Use the filter method to accomplish this.

arr1=["madam","roor","saravanan"]

res=[]
reult=arr1.filter(x=>{
    e=x.split("").reverse().join("");
    if(e==x){
        res.push(e)
    }
    

    
})
console.log(res)
