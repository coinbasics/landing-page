import React from "react";
import Button from "../Button/Button";

const posts = [
  {
    id: 1,
    title: "🤯 Satoshi's Identity Revealed? Bitcoin Legal in USA!",
    href: "https://open.substack.com/pub/coinbasics/p/satoshis-identity-revealed-bitcoin?utm_campaign=post&utm_medium=web",
    description:
      "$BTC Pump to $180k might be Incoming. Can BTC hit All-Time High in 2023?",
    imageUrl:
      "https://substackcdn.com/image/fetch/w_1456,c_limit,f_webp,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F86758491-824c-4d25-a475-05067dd924f1_600x315.jpeg",
    date: "Jan 29, 2023",
    datetime: "2023-01-29",
  },
  {
    id: 2,
    title: "Terra Luna USTC Pump 66%, Re-peg to $1.",
    href: "https://open.substack.com/pub/coinbasics/p/terra-luna-ustc-pump-66-re-peg-to?utm_campaign=post&utm_medium=web",
    description: "Plus : MircoStrategy Stock Up by 100%!",
    imageUrl:
      "https://substackcdn.com/image/fetch/w_1456,c_limit,f_webp,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F75fab0d9-1e94-4e6f-9f06-059187ee62e0_1140x570.png",
    date: "Feb 03, 2023",
    datetime: "2023-02-03",
  },
  {
    id: 3,
    title: "🤫 Vitalik Buterin's Stealthy Move: Ethereum's Privacy Solution",
    href: "https://open.substack.com/pub/coinbasics/p/vitalik-buterins-stealthy-move-ethereums?utm_campaign=post&utm_medium=web",
    description:
      "Vitalik Buterin has proposed a solution to the age-old problem of privacy on Ethereum and Chat GPT Overachiveing 🤯.",
    imageUrl:
      "https://substackcdn.com/image/fetch/w_1456,c_limit,f_webp,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F1e706536-7a24-4a1d-9653-ee19d622ee78_1200x851.webp",
    date: "Jan 25, 2023",
    datetime: "2023-01-25",
  },
];

const Newsletters = () => {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8 text-center">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Newsletters
          </h2>
          <p className="mt-2 text-lg leading-8 text-gray-600">
            we cover the latest news in crypto in bite sized pieces to keep you
            satiated.
          </p>
        </div>
        <div className="mx-auto mt-16 grid auto-rows-fr grid-cols-3 gap-8 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {posts.map((post) => (
            <article
              key={post.id}
              className="relative isolate flex flex-col justify-end overflow-hidden rounded-2xl bg-gray-900 px-8 pb-8 pt-80 sm:pt-48 lg:pt-80"
            >
              <img
                src={post.imageUrl}
                alt=""
                className="absolute inset-0 -z-10 h-full w-full object-cover"
              />
              <div className="absolute inset-0 -z-10 bg-gradient-to-t from-gray-900 via-gray-900/40" />
              <div className="absolute inset-0 -z-10 rounded-2xl ring-1 ring-inset ring-gray-900/10" />

              <div className="flex flex-wrap items-center gap-y-1 overflow-hidden text-sm leading-6 text-gray-300">
                <time dateTime={post.datetime} className="mr-8">
                  {post.date}
                </time>
              </div>
              <h3 className="mt-3 text-lg font-semibold leading-6 text-white text-left">
                <a href={post.href}>
                  <span className="absolute inset-0" />
                  {post.title}
                </a>
              </h3>
            </article>
          ))}
        </div>
        <br />
        <Button
          click={(e) => {
            e.preventDefault();
            console.log("clicked");
            router.push("https://www.coinbasics.xyz/");
          }}
          text="Read more"
        />
      </div>
    </div>
  );
};

export default Newsletters;
