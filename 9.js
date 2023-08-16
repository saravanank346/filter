//9.. Write a function that takes an array of objects with a name and email property
//and returns a new array with only the objects where the email address includes a
//given domain. Use the filter method to accomplish this.


arr=[
    {
        name:"saravanan",
        email:"saravanan@gmail.com"
    },
    {
        name:"ragul",
        email:"ragul@gmail.com"
    },
    {
        name:"vignesh",
        email:"vignesh@gmail.com"
    },
    {
        name:"kishore",
        email:"kishoregmail.com"
    },
]

result=arr.filter(x=>x.email.includes("@"))
console.log(result)