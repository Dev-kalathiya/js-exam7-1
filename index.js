let products = [];

const uimekar = () => {
    document.getElementById("data").innerHTML = "";
    for (let i = 0; i < products.length; i++) {
      let tr = document.createElement("tr");
      let td1 = document.createElement("td");
      td1.innerHTML = products[i].product_name;
      let td2 = document.createElement("td");
      td2.innerHTML = products[i].enter_price;
      let img = document.createElement("img");
      img.src = products[i].img;
      let td5 = document.createElement("td");
      td5.innerHTML = products[i].item;
      let td6 = document.createElement("td");
      td6.innerHTML = products[i].category;
      let td4 = document.createElement("button");
      td4.innerHTML = "delete";
      td4.addEventListener("click", () => {
        products.splice(i, 1);
        uimekar();
      });
      tr.append(td1, img, td2, td5, td6, td4);
      document.getElementById("data").append(tr);
    }
  };

  const datap = (e) => {
    e.preventDefault();
  
    let product_name = document.getElementById("product_name").value;
    let img = document.getElementById("img").value;
    let enter_price = document.getElementById("enter_price").value;
    let item = document.getElementById("item").value;
    let category = document.getElementById("category ").value;
    let product = {
      product_name: product_name,
      img: img,
      enter_price: enter_price,
      item: item,
      category: category,
    };
    products.push(product);
  
    uimekar();
  };
  
  document.getElementById("form").addEventListener("submit", datap);
  