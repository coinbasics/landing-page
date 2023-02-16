import Link from "next/link";
import { BsTwitter, BsLinkedin } from "react-icons/bs";

const Footer = () => {
  return (
    <footer className="bg-white px-20 py-16 md:px-8">
      <div className="w-full md:flex flex-col justify-center items-start hidden mb-8">
        <img
          src="/coinbasicslogo.png"
          alt="Coinbasics Logo"
          className="w-36 mb-4"
        />
        <p className="text-black-200 text-base font-normal leading-normal max-w-sm text-left mb-6">
          We are an open-source library of over 400+ web components and
          interactive elements built with the utility classes from Tailwind CSS.
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
          src="/coinbasicslogo.png"
          alt="Coinbasics Logo"
          className="w-36 mb-4 md:hidden"
        />
        <p className="text-black-200 text-base font-normal leading-normal text-center md:text-left mb-6">
          © 2021 Commenda Technologies, Inc. All rights reserved.
        </p>
        <div className="flex space-x-5 md:hidden">
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
