let productsDiv = document.getElementById("products")
let fruList = document.getElementById("fruList")
let vegList = document.getElementById("vegList")
fetch("http://localhost:5000/products")
.then(response=>{
   response.json()
   .then(data=>{
      let products = data
      data.forEach(element => { 
          productsDiv.innerHTML += `<li>${element.name}</li>`
      });
     

   })

})
.catch(error=>{
    console.log(error)

})

fetch("http://localhost:5000/products/vegetables")
.then(response=>{
   response.json()
   .then(data=>{
      let veglist = data
      console.log(data)
      veglist.forEach(element => { 
         vegList.innerHTML += `<li>${element.name}</li>`
      });
     

   })

})
.catch(error=>{
    console.log(error)

})

fetch("http://localhost:5000/products/fruits")
.then(response=>{
   response.json()
   .then(data=>{
      let frulist = data
      // console.log(data)
      frulist.forEach(element => { 
        fruList.innerHTML += `<li>${element.name}</li>`
      });
     

   })

})
.catch(error=>{
    console.log(error)

})