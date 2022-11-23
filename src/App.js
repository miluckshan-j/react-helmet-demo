import "./App.css";
import { Header, Footer, SEO } from "./components";
import { Route, Routes } from "react-router-dom";
import { Details, Home } from "./pages";

function App() {
  return (
    <div className="App">
      <SEO
        description="Explore the world of Pokémon"
        image="https://assets.pokemon.com/assets/cms2/img/misc/gus/buttons/logo-pokemon-79x45.png"
        title="Pokédex"
        url={window.location.href}
        key="home"
      />
      <Header />
      <main style={{ minHeight: "calc(100vh - 6rem)" }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/details/:number" element={<Details />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
