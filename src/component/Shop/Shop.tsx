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

export default function Shop() {

  const [cartData, setCartData] = useState<Pokedex[]>([]);

  function getProductData(data:Pokedex){
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
