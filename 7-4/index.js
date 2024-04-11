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
//     console.log(data);














// let store = []

// const getdata = async () => {
//     let res = await fetch("https://fakestoreapi.com/products")
//     let data = await res.json()
//     store = data
//     show(data)


// }

// const show = (data) => {
//     document.getElementById("box").innerHTML = ""


//     data.map((ele) => {
//         let title = document.createElement("h4")
//         title.innerHTML = ele.title
//         let price = document.createElement("p")
//         price.innerHTML = "PRICE:" + ele.price
//         let category = document.createElement("p")
//         category.innerHTML = "CATEGORY:" + ele.category
//         let image = document.createElement("img")
//         image.src = ele.image
//         let rating = document.createElement("p")
//         rating.innerHTML = "RATTING:" + ele.rating.rate
//         let div = document.createElement("div")


//         div.setAttribute("class", "box1")
//         image.setAttribute("class", "images")


//         div.append(title, image, price, category, rating)




//         document.getElementById("box").append(div)
//     })


// }


// getdata()




// const filtering = (val) => {


//     let temp = store.filter((ele) => ele.category == val)
//     show(temp)
// }


// const sorting = (val) => {
//     let temp


//     if (val == "htl") {
//         temp = store.sort((a, b) => b.price - a.price)
//         show(temp)
//     }
//     else {
//         temp = store.sort((a, b) => a.price - b.price)
//         show(temp)
//     }
// }


// const search = (val) => {
//     let temp = store.filter((ele) => ele.title.toLowerCase() == (val.toLowerCase()))
//     show(temp)
// }




// const searchdata = (e) => {
//     e.preventDefault();
//     let val = document.getElementById("search").value

//     search(val)
// }
// document.getElementById("men's clothing").addEventListener("click", () => filtering("men's clothing"))
// document.getElementById("women's clothing").addEventListener("click", () => filtering("women's clothing"))
// document.getElementById("jewelery").addEventListener("click", () => filtering("jewelery"))
// document.getElementById("electronics").addEventListener("click", () => filtering("electronics"))
// document.getElementById("htl").addEventListener("click", () => sorting("htl"))
// document.getElementById("lth").addEventListener("click", () => sorting("lth"))
// document.getElementById("searchform").addEventListener("submit", searchdata)

