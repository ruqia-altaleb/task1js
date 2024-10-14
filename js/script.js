
   var allProducts = document.querySelectorAll(".products-items .product-item")
   var div = document.querySelector("#div1")
   var btn = document.getElementById("btn")
   var totalPrice = 0

   allProducts.forEach(function(item){
    item.onclick = function (){

        totalPrice +=  +(item.getAttribute("price"))
        console.log(totalPrice)

        if (totalPrice >0 ){
            btn.style.display = "block";
        
        }
    }
   })
   btn.onclick = function (){
    div.style.display = "block";
   div.innerHTML="Total Price : "+totalPrice +"  EGP"
   }
 

   








  
   

  




   