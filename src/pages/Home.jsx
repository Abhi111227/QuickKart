import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Categories from "../components/Categories";
import Products from "../components/Products";
import Footer from "../components/Footer";
import Features from "./components/Features";

function Home() {
  return (
   <>
  <Navbar />
  <Hero />
  <Categories />
  <Products />
  <Footer />
  <Features/>
</>
  );
}

export default Home;