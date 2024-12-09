import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import Home from "./components/home/Home";
import './App.css';

function App() {
  return (
    <>
      <Header />
      <div className="main-container">
        <Home />
      </div>
      <Footer />
    </>
  );
}

export default App;
