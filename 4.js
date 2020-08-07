let data = {
    id :1,
    name : "Leanne Graham",
    username : "Bret",
    email: "Sincere@april.biz",
    address:
    {
        street: "Kulas Light",
        suite: "Apt. 556",
        city: "Gwenborough",
        zipcode: "92996-3874",
    },
    phone: "1-770-736-8031 x56442",
    website: "hildegard.org",
}
// console.log(data)

//ubah data
let spread = {...data,name:'Mochamad Sofyan',email:'mchsfyn17@gmail.com',hobby:'Main Game'}
console.log(spread)
// mengambil data
let {address:{street,city}} = data
console.log(`Data street = ${street} 
Data city = ${city}`)