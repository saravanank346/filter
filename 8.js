// 8. Write a function that takes an array of objects with a date property and returns a
//new array with only the objects where the date is within a given range. Use the
//filter method to accomplish this.


arr=[
    {
        date:'25-02-2001',
    },
    {
        date:'25-04-2001',
    },
    { date: '2022-03-01' },

  { date: '2022-04-01' },
  
  { date: '2022-05-01' },
]
given_year=2001
res={}

arr.filter(x=>{
    const date = new Date().arr.getFullYear();
    console.log(date)
    if(date==given_year){
        res.push(x)
    }
   

})
console.log(res)






