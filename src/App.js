import "./App.css";
import { Header, Footer } from "./components";
import { Route, Routes } from "react-router-dom";
import { Details, Home } from "./pages";

function App() {
  return (
    <div className="App">
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
