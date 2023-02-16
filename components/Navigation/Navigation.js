import Link from "next/link";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { Disclosure } from "@headlessui/react";
import Button from "../Button/Button";

const Navigation = () => {
  return (
    <Disclosure
      as="nav"
      className="fixed top-0 left-0 w-full bg-[#fff]"
      style={{ zIndex: 999 }}
    >
      {({ open }) => (
        <>
          <div className="mx-auto px-10 md:px-6">
            <div className="relative flex h-16 justify-between">
              <div className="absolute inset-y-0 right-0 items-center hidden md:flex">
                {/* Mobile menu button */}
                <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-gray-400">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex items-center justify-center md:flex-none md:items-stretch md:justify-start">
                <div className="flex flex-shrink-0 items-center">
                  <img
                    className="block h-10 md:h-6 w-auto"
                    src="/coinbasicslogo.png"
                    alt="Coinbasics Logo"
                  />
                </div>
              </div>
              <div className="flex flex-1 items-center justify-center md:flex-none md:items-stretch">
                <div className="md:hidden md:block justify-between -ml-28 md:ml-6 flex md:space-x-0 space-x-8">
                  <Link
                    className="inline-flex items-center px-1 pt-1 text-gray-700 rounded md:p-0"
                    href="/"
                    target="_self"
                  >
                    Home{" "}
                  </Link>
                  <Link
                    className="inline-flex items-center px-1 pt-1 text-gray-700 rounded md:p-0"
                    href="https://www.coinbasics.xyz/?utm_source=substack&utm_medium=web&utm_campaign=substack_profile"
                    target="_blank"
                  >
                    Newsletters{" "}
                  </Link>

                  <div className="absolute inset-y-0 right-0 flex items-center pr-0 md:static md:inset-auto md:ml-6 md:pr-2 md:pr-0">
                    <Button
                      OnClick={(e) => {
                        e.preventDefault();
                        router.push("https://dashboard.commenda.io/");
                      }}
                      text="Subscribe"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="hidden md:block">
            <div className="space-y-1 pt-2 pb-4">
              <Disclosure.Button
                as="a"
                href="#"
                className="block border-l-4 border-commenda-blue py-2 pl-6 pr-4 text-base font-medium text-gray-500"
              >
                Home
              </Disclosure.Button>
              <Disclosure.Button
                as="a"
                href="https://www.coinbasics.xyz/?utm_source=substack&utm_medium=web&utm_campaign=substack_profile"
                className="block border-l-4 border-transparent py-2 pl-6 pr-4 text-base font-medium text-gray-500"
                target="_blank"
              >
                Newsletters
              </Disclosure.Button>
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
};

export default Navigation;
