import Pizza from "./Pizza";



function Menu({ pizzaObj }) {

  const numPizzas = pizzaObj.length;
  
  return (
    <main className="menu">
      <h2>Our Menu</h2>

      {numPizzas > 0 ? (
        <>
          <p>
            Authentic italian cuisine, 6 creative dishes to choose from, All
            from our stone oven, all organic, all delicious
          </p>

          <ul className="pizzas">
            {pizzaObj.map((pizza) => (
              <Pizza pizzaObj={pizza} key={pizza.name} />
            ))}
          </ul>
        </>
      ) : (
        <p>We are still working on our menu. Kindly check back later :)</p>
      )}
    </main>
  );
}

export default Menu;
