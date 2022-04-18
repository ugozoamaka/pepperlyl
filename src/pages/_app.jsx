import { useEffect } from "react";
import PropTypes from "prop-types";
import { useRouter } from "next/router";
import { MoralisProvider } from "react-moralis";
import sal from "sal.js";
import { ThemeProvider } from "next-themes";
import "../assets/css/bootstrap.min.css";
import "../assets/css/feather.css";
import "../assets/scss/style.scss";
import "react-toastify/dist/ReactToastify.css";

const moralisAppId = "hl4igfMOpKrfzRyaVxs0QrUVAoDBys4b16aUuKX7";
const moralisServerURL = "https://vwpjdptg1wbd.usemoralis.com:2053/server";

const MyApp = ({ Component, pageProps }) => {
    const router = useRouter();
    useEffect(() => {
        sal({ threshold: 0.1, once: true });
    }, [router.asPath]);

    useEffect(() => {
        sal();
    }, []);
    useEffect(() => {
        document.body.className = `${pageProps.className}`;
    });
    return (
        <MoralisProvider appId={moralisAppId} serverUrl={moralisServerURL}>
            <ThemeProvider defaultTheme="light">
                <Component {...pageProps} />
            </ThemeProvider>
        </MoralisProvider>
    );
};

MyApp.propTypes = {
    Component: PropTypes.elementType,
    pageProps: PropTypes.shape({
        className: PropTypes.string,
    }),
};

export default MyApp;
