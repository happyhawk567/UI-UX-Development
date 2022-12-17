import './App.css';
import { useState } from "react";
import shoesData from "./assets/shoes-data.json";
import Shoe from "./components/Shoe";

function App() {
  // TODO: use useState to create a state variable to hold the state of the cart
  /* add your cart state code here */
  
  const [cart, setCart] = useState([]);
  const [price, setPrice] = useState(0);
  const [shoeList, setList] = useState([...shoesData])
  const [sort, setSort] = useState('none');
  const [colorFilters, setColorFilters] = useState("all")
  const [typeFilters, setTypeFilters] = useState("all")
  const allShoes = [...shoesData]
  const addToCart = (item) => {

      if (item.q === 0){
        setCart([...cart,item])
        item.q = 1;
      }

      else{
        item.q += 1;
      }

      let newPrice = price + item.price;
      setPrice(newPrice);
  }

  const remove = (item) => {
    let newPrice = price - (item.price * item.q);
    const newCart = cart.filter((inCart) => inCart.name !== item.name);
    setCart(newCart);
    setPrice(newPrice);  
    item.q = 0;                         
}

  const filterShoes = (color, type) => {
    let filteredShoes = allShoes.filter((shoe) => (shoe.color === color || color === "all") & (shoe.type === type || type === "all"))
    setList(filteredShoes);
    sortShoes(filteredShoes, sort);
  }

  const sortShoes = (shoeList, sortType) => {
    let sorted = [];
    if (sortType === "dec"){
      sorted = [...shoeList].sort((a,b) => {
      return a.price - b.price;
      });
      setSort("dec");
    }
    else if (sortType === "inc"){
      sorted = [...shoeList].sort((a,b) => {
        return b.price - a.price;
        });
        setSort("inc");
    }
    else{
      sorted = shoeList;
    }
    
    setList(sorted);
  }

  const selectColor = event => {
    setColorFilters(event.target.value);
    filterShoes(event.target.value, typeFilters);
    console.log(event.target.value);
  };

  const selectType = event => {
    setTypeFilters(event.target.value);
    filterShoes(colorFilters, event.target.value);
    console.log(event.target.value);
  };

  const selectSort = event => {
    setSort(event.target.value);
    sortShoes(shoeList, event.target.value);
    console.log(event.target.value);
  };
  
  return (
    
      <div className="App-header">

<h1>Shoes R Us</h1> 
<div className="App"> 
<div id="col">
    <h3> Filter By Color</h3>
    
 { <div onChange = {selectColor}>
        <input type="radio" value="all" name="color" /> All
        <br></br>
        <input type="radio" value="black" name="color" /> Black
        <br></br>
        <input type="radio" value="beige" name="color" /> Beige
        <br></br>
        <input type="radio" value="pink" name="color" /> Pink
        <br></br>
        <input type="radio" value="white" name="color" /> White
      </div>} 

    <h3> Filter By Type</h3>
  { <div onChange = {selectType}>
    <input type="radio" value="all" name="type" /> All
    <br></br>
    <input type="radio" value="heels" name="type" /> Heels
    <br></br>
    <input type="radio" value="boots" name="type" /> Boots
    <br></br>
    <input type="radio" value="sneakers" name="type" /> Sneakers
  </div>}

  <h3> Sort By Price</h3>
  { <div onChange = {selectSort}>
  <input type="radio" value="dec" name="sort" /> Increasing (low -> high)
  <br></br>
    <input type="radio" value="inc" name="sort" /> Decreasing (high -> low)
  </div>}

    <div>
      <h2>Cart</h2>
      {cart.map((item)=> 
        <><p>{item.name} (${item.price}) x {item.q} <button onClick={() => remove(item)}>
          Remove
        </button> </p> </>)

      }
        <p>Total Price: ${price}</p>     
    </div>
    </div>
  
      
<div id ="shoes-display">
      {shoeList.map((item) => ( 
     <Shoe item = {item} onClick={() => addToCart(item)} />
      
    ))}
    </div>
    </div>
    </div>
  
);
}

export default App;
