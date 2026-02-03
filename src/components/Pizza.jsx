function Item({pizzaObj}) {
    return (
        <li className={`pizza ${pizzaObj.soldOut ? 'sold-out' : ''}`}>
            <img src={pizzaObj.photoName}/>
            <div>
                <h3>{pizzaObj.name}</h3>
                <p>{pizzaObj.ingredients}</p>
                {pizzaObj.soldOut ? <span>SOLD OUT</span> : <span>{pizzaObj.price}</span>}
            </div>
        </li>
    )
}

export default Item
