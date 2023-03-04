import Head from "next/head";
import Navigation from "../components/Navigation/Navigation";
import Header from "../components/Header/Header";
import Testimonials from "../components/Testimonials/Testimonials";
import Footer from "../components/Footer/Footer";
import Newsletters from "../components/Newsletters/Newsletters";
import Subscribe from "../components/Subscribe/Subscribe";

export default function Home() {
  return (
    <>
      <Head>
        <title>Coinbasics</title>
        <meta
          name="description"
          content="Empowering The Next Generation Of Crypto-Savvy, Helping you Navigate the Ever Evolving World of Web3."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:image" content="/CB-preview.png" />
        <meta property="og:image:width" content="1000" />
        <meta property="og:image:height" content="600" />
        <link rel="icon" href="/coinbasics.png" />
      </Head>
      <div className="font-poppins main">
        <Navigation />
        <Header />
        <Newsletters />
        <Testimonials />
        <Subscribe />
        <Footer />
      </div>
    </>
  );
}
