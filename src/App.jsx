import Header from "./components/Header"
import Menu from "./components/Menu"
import pizzaData from "../public/data"
import Footer from "./components/Footer"

function App() {
  return (
    <div className="container">
      <Header/>
      <Menu pizzaObj={pizzaData}/>
      <Footer/>
    </div>
  )
}

export default App
