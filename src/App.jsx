import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Article from "./components/Article";
import TableSection from "./components/TableSection";
import Aside from "./components/Aside";
import Footer from "./components/Footer";

function App() {

  return (
    <>
      <Navbar></Navbar>
      <Header></Header>
      <Hero></Hero>
      <div className="container flex flex-col md:flex-row mx-auto p-6">
        <main className="flex-1"><Article></Article>
      <TableSection></TableSection>
      </main>
      <Aside></Aside>
      </div>
      <Footer></Footer>
      </>
  );
}

export default App
