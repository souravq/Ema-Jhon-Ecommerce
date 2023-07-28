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

    function setData(data:Pokedex[]){
        setProducts(data);
        localStorage.setItem("fullProductDetails", JSON.stringify(data));
    }

    // Fetch Product from API
    useEffect(()=>{
        fetch('https://raw.githubusercontent.com/ProgrammingHero1/ema-john-resources/main/fakeData/products.json')
        .then(res=>res.json())
        .then(data=>setData(data));

    },[])

    function productData(singleProductData:Pokedex){
        getProductData(singleProductData);
    }

  return (
    <div className="menu-card">
        {
            products.map((product)=>{
                return(
                    <div className="card" key={product.id}>
                        <div style={{width:"300px", height:"300px", margin:"0 auto"}}>
                            <img style={{ borderRadius:"10px"}} src={product.img} alt="Product Image Not Found" width="300px" height="300px"/>
                        </div>
                        
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
