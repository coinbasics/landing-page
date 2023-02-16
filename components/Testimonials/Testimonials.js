import React from "react";
import TweetEmbed from "react-tweet-embed";

const Testimonials = () => {
  return (
    <div className="px-8 w-5/6 mx-auto md:px-4 md:w-11/12">
      <h1 className="text-3xl md:text-2xl font-bold my-4 text-black-100 text-center">
        What people say about us!
      </h1>
      <div className="grid grid-cols-2 gap-8 md:grid-cols-1">
        <TweetEmbed
          tweetId={"1625529176509022208"}
          options={{ theme: "light" }}
        />
        <TweetEmbed
          tweetId={"1625579116241231872"}
          options={{ theme: "light" }}
        />
      </div>
    </div>
  );
};

export default Testimonials;
