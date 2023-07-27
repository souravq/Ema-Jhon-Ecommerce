import { useEffect, useState } from "react";
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

import "./Menu.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

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

export default function Menu({getProductData}:{getProductData:any}) {


    const [products, setProducts] = useState<Pokedex[]>([]);

    // Fetch Product from API
    useEffect(()=>{
        fetch('https://raw.githubusercontent.com/ProgrammingHero1/ema-john-resources/main/fakeData/products.json')
        .then(res=>res.json())
        .then(data=>setProducts(data));

    },[])

    function productData(data:Pokedex){
        getProductData(data);
    }

  return (
    <div className="menu-card">
        {
            products.map((product)=>{
                return(
                    <div className="card" key={product.id}>
                        <img style={{ borderRadius:"10px"}} src={product.img} alt="Card Image" width="300px" height="300px"/>
                        <div className="card-details">
                            <h4>{product.name}</h4><br/>
                            <p>Price : $ {product.price}</p><br/><br/>
                            <p>Manufacturer : {product.seller} </p>
                            <p>Rating : {product.ratings} star</p><br/>
                            <div style={{position:"absolute", bottom:"0px", width:"100%"}}>
                                <button className="add-to-cart" onClick={()=>productData(product)}>Add to Cart <FontAwesomeIcon icon={faShoppingCart} /></button>
                            </div>
                            
                        </div>
                    </div>
                )
            })
        }
        
    </div>
  )
}
