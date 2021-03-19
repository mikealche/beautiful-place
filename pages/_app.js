import { AwesomenessProvider } from "../contexts/Awesomeness";
import "../styles/styles.scss";

function MyApp({ Component, pageProps }) {
  return (
    <AwesomenessProvider>
      <Component {...pageProps} />
    </AwesomenessProvider>
  );
}

export default MyApp;
