import { ArrowRightCircleIcon } from "@heroicons/react/24/outline";
import React, { useState } from "react";
import Input from "../Input/Input";

const Subscribe = () => {
  //   const [hasSubmittedEmail, setHasSubmittedEmail] = useState(false);
  const [email, setEmail] = useState("");

  return (
    <div className="mt-10 bg-purplishblue">
      <div className="py-24 px-6 sm:px-6 sm:py-32 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl capitalize">
            Start your journey with coinbasics!
          </h2>
          <div className="mt-10 flex items-center justify-center">
            <Input
              value={email}
              setValue={setEmail}
              placeholder="Enter your e-mail address"
              type="email"
              // hasSubmittedEmail={hasSubmittedEmail}
              // setHasSubmittedEmail={setHasSubmittedEmail}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Subscribe;
