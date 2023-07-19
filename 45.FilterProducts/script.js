const data = [
    {
      id: 1,
      name: "Invicta Men's Pro Diver",
      img: "https://m.media-amazon.com/images/I/71e04Q53xlL._AC_UY879_.jpg",
      price: 74,
      cat: "Dress",
    },
    {
      id: 2,
      name: "edifice sospendisone",
      img: "https://www.casio.com/content/dam/casio/product-info/locales/in/en/timepiece/product/watch/E/EC/ECB/ecb-2000tp-1a/assets/ECB-2000TP-1A_front.jpg.transform/main-visual-pc/image.jpg",
      price: 120,
      cat: "Dress",
    },
    {
      id: 3,
      name: "Timex Men's Expedition Scout ",
      img: "https://m.media-amazon.com/images/I/91WvnZ1g40L._AC_UY879_.jpg",
      price: 40,
      cat: "Sport",
    },
    {
      id: 4,
      name: "Breitling Superocean Heritage",
      img: "https://m.media-amazon.com/images/I/61hGDiWBU8L._AC_UY879_.jpg",
      price: 200,
      cat: "Luxury",
    },
    {
      id: 5,
      name: "Casio Classic Resin Strap ",
      img: "https://m.media-amazon.com/images/I/51Nk5SEBARL._AC_UY879_.jpg",
      price: 160,
      cat: "Sport",
    },
    {
      id: 6,
      name: "Garmin Venu Smartwatch ",
      img: "https://m.media-amazon.com/images/I/51kyjYuOZhL._AC_SL1000_.jpg",
      price: 94,
      cat: "Casual",
    },
  ];

  const prodcont=document.querySelector(".products")
  const si=document.querySelector(".search")
  const catscont=document.querySelector(".cats")
  const prange=document.querySelector(".pricerange")
  const pval=document.querySelector(".pricevalue")
const displayprod=(filteredprod)=>{
    prodcont.innerHTML=filteredprod.map((data)=>
    `
    <div class="product">
    <img src=${data.img} alt="">
    <span class="name">${data.name}</span>
    <span class="pricetext">${data.price}$</span>
</div>    
    `).join("")
    
}
displayprod(data)
si.addEventListener('keyup',(e)=>{
    const val=e.target.value.toLowerCase();
    if(val){
        displayprod(data.filter(i=>i.name.toLowerCase().indexOf(val)!=-1))
    }else{
        displayprod(data)
    }    if(val){
        val=parseInt(val)
        displayprod(data.filter(i=>i.price.indexOf(val)!=-1))
    }else{
        displayprod(data)
    }
})

function setcat(){
  let allcats=data.map(i=>i.cat)
  let categories=["All",...allcats.filter((i)=>{
    return allcats.indexOf(i)==i
  }),
]

catscont.innerHTML=categories.map((cat)=>
  ` <span class="cat">${cat}</span>
  `  
  ).join("")
  catscont.addEventListener("click",(e)=>{
    e.target.textContent
  })
  
}
setcat()