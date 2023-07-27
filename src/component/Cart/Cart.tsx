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
  const totalItem = cartData.length;
  const totalPrice = cartData.reduce((prev, curr)=>prev+curr.price,0);
  const totalShippingPrice = cartData.reduce((prev, curr)=>prev+curr.shipping,0);

  return (
    <div className="cart">
      <h3>Order Summary</h3><br/><br/>
      <p>Selected Items : {totalItem}</p><br/>
      <p>Total Price : ${totalPrice}</p><br/>
      <p>Total Shipping Charges : ${totalShippingPrice}</p><br/>
      <p>Tax : $60</p><br/><br/>
      
      <p>Grand Total : ${`${totalPrice + totalShippingPrice + 60}`}</p>
    </div>
  )
}
