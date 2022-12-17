// TODO: create a component that displays a single bakery item

export default function Shoe({item, onClick}) {
    return(
        <div class ="item-box">
          <h4> {item.name} </h4>
          <div> <img src={item.image}></img>  </div>
          Price: ${item.price}  
         <div> 
          <button onClick={() => onClick(item.name, item.price)}>
                Add to Cart
            </button>
            </div>
            <div> </div>  
        </div>   
        
    )
}