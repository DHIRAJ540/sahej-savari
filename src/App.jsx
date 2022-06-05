// Components
import Nav from "./components/Nav/Nav";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Products from "./components/Products/Products";
import Contact from "./components/Contact/Contact";

function App() {
  return (
    <div className="App">
      <Nav />
      <Home />
      <About />
      <Products />
      <Contact />
    </div>
  );
}

export default App;
