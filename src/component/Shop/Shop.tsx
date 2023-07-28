import { useState } from "react";
import Cart from "../Cart/Cart";
import Menu from "../Menu/Menu";

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

interface objType{
  [index:string]:number;
}

export default function Shop() {

  const [cartData, setCartData] = useState<Pokedex[]>([]);

  function getProductData(data:Pokedex){

    const storeValue = localStorage.getItem("cartStoreData");
    if(storeValue){
      const objdata:objType = JSON.parse(storeValue);
      if(Object.keys(objdata).includes(data.id)){
        objdata[data.id] += 1;
      }else{
        objdata[data.id] = 1;
      }
      
      localStorage.setItem("cartStoreData",JSON.stringify(objdata))
    }else{
      const obj:objType = {};
      obj[data.id] = 1;
      localStorage.setItem("cartStoreData",JSON.stringify(obj))
    }
    
    setCartData([...cartData,data]);
  }
  return (
    <div style={{display:"flex"}}>
      <div style={{width:"80%"}}>
        <Menu getProductData={getProductData}/>
      </div>
      <div style={{width:"20%"}}>
        <Cart cartData={cartData}/>
      </div>
    </div>
  )
}
