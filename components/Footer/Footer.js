import Link from "next/link";
import { BsTwitter, BsLinkedin, BsInstagram } from "react-icons/bs";

const Footer = () => {
  return (
    <footer className="bg-white px-20 py-16 md:px-8">
      <div className="w-full md:flex flex-col justify-center items-start hidden mb-8">
        <img src="/CB-Light.png" alt="Coinbasics Logo" className="w-36 mb-4" />
        <p className="text-black-200 text-base font-normal leading-normal max-w-sm text-left mb-6">
          Covering From DeFi to Daos to DApps, Apes to Airdrops, GamFi to
          Metaverse to NFT to Trades: Simplifying It All For You.
        </p>
        <div className="flex space-x-5">
          <Link href="/" target="_blank">
            <BsTwitter className="h-5 w-5 text-black-200 hover:text-primary transition-all duration-200" />
          </Link>
          <Link href="/" target="_blank">
            <BsLinkedin className="h-5 w-5 text-black-200 hover:text-primary transition-all duration-200" />
          </Link>
        </div>
      </div>
      <div className="w-full flex flex-col justify-center items-center md:items-start">
        <img
          src="/CB-Light.png"
          alt="Coinbasics Logo"
          className="w-36 mb-4 md:hidden"
        />
        <p className="text-black-200 text-base font-normal leading-normal text-center mb-6 max-w-3xl md:hidden">
          Empowering the next generation of crypto savvy. Covering From DeFi to
          Daos to DApps, Apes to Airdrops, GamFi to Metaverse to NFT to Trades:
          Simplifying It All For You.
        </p>
        <p className="text-black-200 text-base font-normal leading-normal text-center md:text-left mb-6">
          © 2023 CoinbasicsHQ. All rights reserved.
        </p>
        <div className="flex space-x-5 md:hidden">
          <Link href="http://instagram.com/coinbasicshq/" target="_blank">
            <BsInstagram className="h-5 w-5 text-black-200 hover:text-primary transition-all duration-200" />
          </Link>
          <Link href="https://twitter.com/CoinbasicsHQ" target="_blank">
            <BsTwitter className="h-5 w-5 text-black-200 hover:text-primary transition-all duration-200" />
          </Link>
          <Link
            href="https://www.linkedin.com/company/coinbasics/"
            target="_blank"
          >
            <BsLinkedin className="h-5 w-5 text-black-200 hover:text-primary transition-all duration-200" />
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
