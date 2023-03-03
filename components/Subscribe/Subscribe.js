import React from "react";

const Subscribe = () => {
  return (
    <div className="mt-20 md:mt-10">
      <div className="px-6 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="mb-6 text-3xl font-bold tracking-tight bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent sm:text-3xl capitalize">
            Start your journey with coinBasics
          </h2>
          <div className="flex items-center justify-center p-4">
            <iframe
              src="https://coinbasics.substack.com/embed"
              width="1100px"
              height="250px"
              frameborder="0"
              scrolling="no"
              style={{ border: "1px solid #eee" }}
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Subscribe;
