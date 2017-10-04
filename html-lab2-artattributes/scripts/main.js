

function user(name,id) {
  this.userName= name;
  this.userID = id;

}

function product(product_id,name,description,price) {

  this.product_id = product_id;
  this.name= name;
  this.description = description;
  this.price = price;

}



window.onload = function() {
loadProducts();
  loaduser();

}

function loadProducts(){

  $.get("localhost:80/Dali_product.php",
          function(json){
          $.each(json.data,function(i,product){
            $("#fig"+1+ "name").append(product.name);
          });
          });
}


function loaduser(){
  var current_user= localStorage.getItem('user');

  if (!current_user) {
    current_user = new user("yanten", "225");
    localStorage.user = JSON.stringify(current_user);

  }

  else {
    current_user = JSON.parse(localStorage.user);
  }

document.getElementById("lnkUser").innerHTML = "Hello, "+current_user.userName;
}
