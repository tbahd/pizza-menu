import Order from "./Order";

function Footer() {
    const hour = new Date().getHours();
    console.log(hour);
    const openHour = 8;
    const closeHour = 22;
    const isOpen = hour >= openHour && hour <= closeHour;
    
    if(!isOpen)
    return (
        <p> We are happy to welcome you from {openHour}:00 and {closeHour}:00 </p>
    )

    return (
      <footer className="footer">
        {isOpen ? (
          <Order closeHour={closeHour} />
        ) : (
          <p>
            {" "}
            We are happy to welcome you from {openHour}:00 and {closeHour}
            :00{" "}
          </p>
        )}
      </footer>
    );
}

export default Footer
