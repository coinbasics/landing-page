import Head from "next/head";
import Navigation from "../components/Navigation/Navigation";
import Header from "../components/Header/Header";
import Testimonials from "../components/Testimonials/Testimonials";
import Footer from "../components/Footer/Footer";
import Newsletters from "../components/Newsletters/Newsletters";

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
        <link rel="icon" href="/coinbasics.png" />
      </Head>
      <div className="font-poppins main">
        <Navigation />
        <Header />
        <Testimonials />
        <Newsletters />
        <Footer />
      </div>
    </>
  );
}
