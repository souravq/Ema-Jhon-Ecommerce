import { useEffect, useState } from "react";
import "./Cart.css";

interface Pokedex {
  category:     string;
  id:           string;
  img:          string;
  name:         string;
  price:        number;
  quantity:     number;
  ratings:      number;
  ratingsCount: number;
  seller:       string;
  shipping:     number;
  stock:        number;
}

export default function Cart({cartData}:{cartData:Pokedex[]}) {

  const [, setStoreCartData] = useState({});
  const storeValue = localStorage.getItem("cartStoreData");
  const fullProductDetails = localStorage.getItem("fullProductDetails");
  useEffect(()=>{
    
    if(storeValue){
      const cartStoreData = JSON.parse(storeValue);
      setStoreCartData(cartStoreData);
    }
    

  },[cartData,storeValue]);


  let totalItem = 0;
  let totalPrice = 0;
  let totalShippingPrice = 0;

  if(storeValue && fullProductDetails){
    const cartStoreData = JSON.parse(storeValue);
    const fullProduct = JSON.parse(fullProductDetails);
    
    for(const objData of Object.keys(cartStoreData)){
      totalItem += cartStoreData[objData];
      for(let i=0; i<fullProduct.length; i++){
        if(fullProduct[i].id === objData){
          totalPrice += fullProduct[i].price*cartStoreData[objData];
          totalShippingPrice += fullProduct[i].shipping*cartStoreData[objData];
        }
      }
      
    }
  }
  
  //const totalPrice = cartData.reduce((prev, curr)=>prev+curr.price,0);
  //const totalShippingPrice = cartData.reduce((prev, curr)=>prev+curr.shipping,0);

  return (
    <div className="cart">
      <h2>Order Summary</h2><br/><br/>
      <p>Selected Items : {totalItem}</p><br/>
      <p>Total Price : ${totalPrice}</p><br/>
      <p>Total Shipping Charges : ${totalShippingPrice}</p><br/>
      <p>Tax : $60</p><br/><br/>
      
      <p>Grand Total : ${`${totalPrice + totalShippingPrice + 60}`}</p>
    </div>
  )
}
