//get data from api

// fakestoreapi.com/products

// define variables
let renderdata = document.querySelector(".renderdata");
let rendercartdata = document.querySelector(".renderCartData");
let dynamicCount= document.querySelector("dynamic-count");
let arrr=[];

async function getData(){
const res= await fetch("https://fakestoreapi.com/products");
const data = await res.json();
// console.log(data);

data.map((ele)=>{
    let productMainDiv = document.createElement("div");
    let createimgEle = document.createElement("img");
    let createTitle = document.createElement("p");
    let createPriceEle = document.createElement("p");
    let BtnEle = document.createElement("button");
    let BtnText = document.createTextNode("Add to cart");
    let createPriceText = document.createTextNode(`price: $${ele.price}`);
    let createTextTitle = document.createTextNode(`${ele.title.slice(0,35)}...`);
    createimgEle.setAttribute("src",ele.image);
    createimgEle.setAttribute("class","myImages");
    productMainDiv.setAttribute("class","box-main");
    createTitle.appendChild(createTextTitle);
     createPriceEle.setAttribute("class","price-element");
     BtnEle.setAttribute("class","btn-element");
    createPriceEle.appendChild(createPriceText);
    createTitle.setAttribute("class","productTitle")
    BtnEle.appendChild(BtnText);
      productMainDiv.appendChild(createimgEle);
      productMainDiv.appendChild(createTitle);
      productMainDiv.appendChild(createPriceText);
      productMainDiv.appendChild(BtnEle);
      renderdata.appendChild(productMainDiv);
    function addtocart(img,price){
        arrr.push({ii:img,pp:price});
        console.log(arrr)
        let myCData=[];
        let d=(img,price);
        myCData.push(d);

        alert("Product added to cart ");
        let cartMDiv=document.createElement("div")
        let cartImgEle = document.createElement("img");
        let cartTrashBtn=document.createElement("i");
    cartTrashBtn.setAttribute("class","fa-solid fa-trash")
        cartImgEle.setAttribute("src",img);
        cartImgEle.setAttribute("class","cartImgElement");
        cartMDiv.setAttribute("class","cartstyling")
        let cartpriceEle= document.createElement("p");
        let cartpriceText = document.createTextNode(price);
        cartpriceEle.appendChild(cartpriceText);
        dynamicCount.innerHTML=arrr.length;
        rendercartdata.appendChild(cartImgEle);
        rendercartdata.appendChild(cartpriceEle);
        rendercartdata.appendChild(cartTrashBtn);
        rendercartdata.appendChild(cartMDiv)
       
    };
    BtnEle.addEventListener("click",()=>addtocart(ele.image,ele.price))
});
};

getData();