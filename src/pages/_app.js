import { ChakraProvider } from "@chakra-ui/react";
import { HelmetProvider } from "react-helmet-async";
import { useRouter } from "next/router";
import styles from "../styles/app.module.css";
import { Header, Footer, SEO } from "../components";

function App({ Component, pageProps }) {
  const router = useRouter();
  return (
    <HelmetProvider>
      <ChakraProvider>
        <div className={styles.App}>
          <SEO
            description="Explore the world of Pokémon"
            image="https://assets.pokemon.com/assets/cms2/img/misc/gus/buttons/logo-pokemon-79x45.png"
            title="Pokédex"
            url={router.pathname}
            key="home"
          />
          <Header />
          <main style={{ minHeight: "calc(100vh - 6rem)" }}>
            <Component {...pageProps} />
          </main>
          <Footer />
        </div>
      </ChakraProvider>
    </HelmetProvider>
  );
}

export default App;
