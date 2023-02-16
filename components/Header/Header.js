import { useState } from "react";
import Link from "next/link";
import Input from "../Input/Input";

const HomeHeader = () => {
  //   const [hasSubmittedEmail, setHasSubmittedEmail] = useState(false);
  const [email, setEmail] = useState("");

  return (
    <header className="pt-20 md:pt-10 px-12 md:px-2 flex md:flex-col justify-between items-start">
      <div className="md:px-4 w-[50%] py-24 md:w-full md:py-6">
        <h1 className="leading-[60px] text-[54px] md:text-4xl font-extrabold my-4 text-left text-black-100 max-w-4xl">
          Helping you Navigate the Ever Evolving{" "}
          <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            World of Web3
          </span>
        </h1>
        <p className="text-xl md:text-lg leading-normal font-normal text-black-200 mb-8">
          Get the world&apos;s most popular daily crypto email. <br /> Alpha,
          news, analysis, all free
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
          <small className="text-gray-500 hidden md:block mt-2">
            We care about the protection of your data. Read our{" "}
            <Link href="/" className="underline text-gray-900">
              Privacy Policy.
            </Link>{" "}
          </small>
        </div>
      </div>

      <div className="w-[60%] -mr-12 md:w-full">
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
