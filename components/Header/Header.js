import { useState } from "react";
import Link from "next/link";
import Input from "../Input/Input";
import { BsTwitter, BsLinkedin, BsInstagram } from "react-icons/bs";

const HomeHeader = () => {
  //   const [hasSubmittedEmail, setHasSubmittedEmail] = useState(false);
  const [email, setEmail] = useState("");

  return (
    <header className="pt-20 md:pt-10 px-12 md:px-2 flex md:flex-col justify-between items-start">
      <div className="md:px-4 w-[50%] py-24 md:w-full md:py-0 md:pt-8 md:pb-0">
        <h1 className="leading-[60px] text-[54px] md:text-4xl font-extrabold my-4 text-left text-black-100 max-w-4xl capitalize">
          Your go to source for anything&nbsp;
          <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            Web3
          </span>
        </h1>
        <p className="text-xl md:text-base sm:text-[15px] leading-normal font-normal text-black-200">
          <span className="inline sm:hidden">Helping you</span> Navigate the
          ever evolving world of Web3
        </p>
        <p className="text-xl md:text-base sm:text-[14px] leading-normal font-normal text-black-200 mb-8">
          <span className="inline sm:hidden">Covering</span> From DeFi to Daos
          to DApps to Apes to Trades.
        </p>

        <div className="mb-6">
          <Input
            value={email}
            setValue={setEmail}
            placeholder="Enter your e-mail address"
            type="email"
            // hasSubmittedEmail={hasSubmittedEmail}
            // setHasSubmittedEmail={setHasSubmittedEmail}
          />
        </div>
        <p className="text-gray-500 ml-1">
          Read By Top VCs, Founders & Executives.
        </p>
        <div className="flex items-center py-2">
          <Link href="http://instagram.com/coinbasicshq/" target="_blank">
            <BsInstagram className="h-5 w-5 text-black-200 hover:text-primary transition-all duration-200" />
          </Link>
          &nbsp;&nbsp;
          <Link href="https://twitter.com/CoinbasicsHQ" target="_blank">
            <BsTwitter className="h-5 w-5 text-black-200 hover:text-primary transition-all duration-200" />
          </Link>{" "}
          &nbsp;&nbsp;
          <Link
            href="https://www.linkedin.com/company/coinbasics/"
            target="_blank"
          >
            <BsLinkedin className="h-5 w-5 text-black-200 hover:text-primary transition-all duration-200" />
          </Link>
        </div>
      </div>

      <div className="w-[60%] -mr-12 md:w-[130%] md:-ml-8">
        <img
          src="/dash-newsletter.png"
          alt="Coinbasics Newsletter"
          width="100%"
        />
      </div>
    </header>
  );
};

export default HomeHeader;
