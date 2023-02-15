import Head from "next/head";

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
      <div className="font-inter main">
        {/* <Navigation />
        <Header />

        <Footer /> */}
      </div>
    </>
  );
}
