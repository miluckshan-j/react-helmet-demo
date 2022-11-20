import "./App.css";
import { Header, Footer } from "./components";

function App() {
  return (
    <div className="App">
      <Header />
      <main style={{ minHeight: "calc(100vh - 6rem)" }}>Main Content</main>
      <Footer />
    </div>
  );
}

export default App;
