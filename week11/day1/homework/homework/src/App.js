import "./App.css";
import "./fonts/Roboto-Thin.ttf";
import Navbar from "./components/Navbar";
import Logo from "./components/Logo";
import Buttons from "./components/Buttons";
import Footer from "./components/Footer";
import Search from "./components/Search";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Logo />
      <Search />
      <Buttons />
      <Footer />
    </div>
  );
}

export default App;
