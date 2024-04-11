let data=[]


const uimaker=(data)=>{
    document.getElementById("box").innerHTML=""
    data.map((ele)=>{
     let title=document.createElement("p") 
        title.innerHTML=ele.title
        title.setAttribute("id", "title")


        let price=document.createElement("p")
        price.innerHTML=ele.price
        price.setAttribute("id", "price")

        let category=document.createElement("p")
        category.innerHTML=ele.category
        category.setAttribute("id", "category")


        let image=document.createElement("img")
       image.src = ele.image
       image.setAttribute("id", "img")
    
       let cards=document.createElement("div")
       cards.innerHTML=cards.innerHTML
       cards.setAttribute("id", "cards")

        cards.append(title,image,price,category)
        document.getElementById("box").append(cards)
        
    })
    }




    
    const sorting = (val) => {
        console.log(data);
        if (val == "htl") {
         let p =  data.sort((a, b) => b.price - a.price)
            uimaker(p)
            alert("sorting successfully")
        }
        else {
           data.sort((a, b) => a.price - b.price)

            uimaker(data)

            alert("sorting successfully")
        }
    }

    const filter = (val) => {
        let temp =data.filter((ele) => ele.category == val)
        uimaker(temp)
    }
    
    const search = (val) => {
        let temp = data.filter((ele) => ele.title.toLowerCase() == (val.toLowerCase()))
        uimaker(temp)
    }
    const searchdata = (e) => {
        e.preventDefault();
        let val = document.getElementById("search").value
    
        search(val)
    }
    // const search = (val) => {
    //     let temp =data.filter((ele) => ele.data.includes(val))
    //     uimaker(temp)
    // }
    // const handlesearch = (e) => {
    //     e.preventDefault()

    //     let data = document.getElementById("search-value").value
    //     search(data)
    // }
    document.getElementById("htl").addEventListener("click", () => sorting("htl"))
    document.getElementById("lth").addEventListener("click", () => sorting("lth"))
    document.getElementById("search").addEventListener("submit", searchdata)
  
    fetch('https://fakestoreapi.com/products')
    .then(res => res.json())
    .then((datas) => { uimaker(datas)
    
    data=datas
    
    })
