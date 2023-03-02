import { ArrowRightCircleIcon } from "@heroicons/react/24/outline";
import React from "react";

const featuredPost = {
  id: 1,
  title: "BAYC : Racist Nazi-Inspired NFTs ?",
  href: "https://open.substack.com/pub/coinbasics/p/bayc-racist-nazi-inspired-nfts?utm_campaign=post&utm_medium=web",
  description: `A YouTuber Philion, aka Philip Rusnack has blown the lid off Bored Ape Yacht Club (BAYC)`,
  imageUrl: "./bayc.png",
  date: "Feb 22, 2023",
  datetime: "2023-02-22",
};

const posts = [
  {
    id: 1,
    title: "$20 Million Airdrop, Crypto Go BLURRRRR!",
    href: "https://open.substack.com/pub/coinbasics/p/20-million-airdrop-crypto-go-blurrrrr?utm_campaign=post&utm_medium=web",
    date: "Feb 15, 2023",
    datetime: "2023-02-15",
  },

  {
    id: 2,
    title: `"Sketchy" $BTC & Ordinal PUNKS`,
    href: "https://open.substack.com/pub/coinbasics/p/sketchy-btc-and-ordinal-punks?utm_campaign=post&utm_medium=web",
    date: "Feb 12, 2023",
    datetime: "2023-02-12",
  },

  {
    id: 3,
    title: "Terra Luna USTC Pump 66%, Re-peg to $1.",
    href: "https://open.substack.com/pub/coinbasics/p/terra-luna-ustc-pump-66-re-peg-to?utm_campaign=post&utm_medium=web",
    date: "Feb 03, 2023",
    datetime: "2023-02-03",
  },
  {
    id: 4,
    title: "🔥 APTOS EXPLODES by 400% in 30 days! 🚀",
    href: "https://open.substack.com/pub/coinbasics/p/coinbasics-newsletter-9-aptos-explodes?utm_campaign=post&utm_medium=web",
    date: "Jan 28, 2023",
    datetime: "2023-01-28",
  },
];

const Newsletters = () => {
  return (
    <div
      className="pt-10 pb-16 sm:py-10"
      style={{ backgroundColor: "rgba(61,215,254, 0.1)" }}
    >
      <div className="w-[90%] mx-auto lg:w-full">
        <h1 className="text-3xl md:text-xl font-bold my-8 text-black-100 ml-6 text-left md:text-center md:ml-0 capitalize">
          Read some of our best pieces
        </h1>
      </div>
      <div className="mx-auto grid max-w-7xl grid-cols-2 gap-x-8 gap-y-12 px-6 sm:gap-y-16 lg:grid-cols-1 lg:px-8">
        <article className="mx-auto w-full max-w-2xl lg:mx-0 lg:max-w-full">
          <div className="relative w-full">
            <img
              src={featuredPost.imageUrl}
              alt=""
              className="aspect-[3/2] w-full rounded-xl bg-gray-100 object-cover sm:aspect-[3/2]"
            />
            <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-gray-900/10" />
          </div>
          <time
            dateTime={featuredPost.datetime}
            className="block text-sm leading-6 text-gray-600 mt-8"
          >
            {featuredPost.date}
          </time>
          <h2
            id="featured-post"
            className="mt-4 text-3xl md:text-xl font-bold tracking-tight text-gray-900"
          >
            {featuredPost.title}
          </h2>
          <p className="mt-4 text-lg md:text-sm leading-8 text-gray-600">
            {featuredPost.description}
          </p>
          <div className="mt-4 flex flex-col justify-between gap-6 sm:mt-8 sm:flex-row-reverse sm:gap-8 lg:mt-4 lg:flex-col">
            <div className="flex">
              <a
                href={featuredPost.href}
                className="text-sm font-semibold leading-6 text-primary"
                aria-describedby="featured-post"
              >
                Continue reading <span aria-hidden="true">&rarr;</span>
              </a>
            </div>
          </div>
        </article>
        <div className="mx-auto w-full max-w-2xl border-t border-gray-900/10 pt-12 sm:pt-6 lg:mx-0 lg:max-w-none lg:border-t-0 lg:pt-0">
          <div className="-my-12 divide-y divide-gray-900/10">
            {posts.map((post) => (
              <article
                key={post.id}
                className="py-10 flex justify-between items-end md:py-6"
              >
                <div className="group relative max-w-xl">
                  <time
                    dateTime={post.datetime}
                    className="block text-sm leading-6 text-gray-600"
                  >
                    {post.date}
                  </time>
                  <h2 className="mt-2 text-lg md:text-sm font-semibold text-gray-900 group-hover:text-gray-600">
                    <a href={post.href}>
                      <span className="absolute inset-0" />
                      {post.title}
                    </a>
                  </h2>
                  <p className="mt-4 text-sm leading-6 text-gray-600">
                    {post.description}
                  </p>
                </div>
                <a href={post.href}>
                  <ArrowRightCircleIcon className="h-8 w-8 text-primary" />
                </a>
              </article>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Newsletters;
